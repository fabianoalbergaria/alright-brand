#!/usr/bin/env node
// Render the 3 Instagram kit avatars at 1080×1080 PNG. Output goes to
// assets/social/instagram/avatar-*.png — used by the scale-test grid in
// the IG editor (Cards 32/44/56/110 px sized via CSS).
//
// Re-run after editing instagram-kit/index.html avatar markup.

import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SRC_HTML = resolve(REPO_ROOT, 'instagram-kit/index.html');
const OUT_DIR = resolve(REPO_ROOT, 'assets/social/instagram');

const AVATARS = [
  { id: 'avatar-a', file: 'avatar-a-symbol.png' },
  { id: 'avatar-b', file: 'avatar-b-favicon.png' },
  { id: 'avatar-c', file: 'avatar-c-wordmark.png' },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1080, height: 1080 },
  deviceScaleFactor: 1,
});
const page = await ctx.newPage();
await page.goto(`file://${SRC_HTML}`, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);

for (const av of AVATARS) {
  // Detach the frame into a clean holder at viewport origin, strip
  // preview-time transform/box-shadow, render at native 1080×1080.
  await page.evaluate(({ id }) => {
    const frame = document.getElementById(id);
    if (!frame) throw new Error('Avatar not found: ' + id);

    // Hide all other body children so the clip captures only the frame
    window.__hidden = [];
    for (const child of Array.from(document.body.children)) {
      if (child.id === '__avatarHolder') continue;
      window.__hidden.push({ el: child, display: child.style.display });
      child.style.display = 'none';
    }

    let holder = document.getElementById('__avatarHolder');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = '__avatarHolder';
      document.body.appendChild(holder);
    }
    holder.style.cssText = 'position:fixed;left:0;top:0;background:#141413;z-index:99999;';
    holder.innerHTML = '';
    window.__originalParent = frame.parentNode;
    window.__originalNext = frame.nextSibling;
    window.__originalStyle = frame.getAttribute('style') || '';
    holder.appendChild(frame);
    frame.style.transform = 'none';
    frame.style.boxShadow = 'none';
  }, { id: av.id });

  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));

  const buf = await page.screenshot({
    clip: { x: 0, y: 0, width: 1080, height: 1080 },
    type: 'png',
  });
  writeFileSync(resolve(OUT_DIR, av.file), buf);
  console.log(`✓ ${av.file} (1080×1080)`);

  // Restore frame
  await page.evaluate(() => {
    const holder = document.getElementById('__avatarHolder');
    const frame = holder.firstElementChild;
    if (window.__originalNext) window.__originalParent.insertBefore(frame, window.__originalNext);
    else window.__originalParent.appendChild(frame);
    if (window.__originalStyle) frame.setAttribute('style', window.__originalStyle);
    else frame.removeAttribute('style');
    for (const h of window.__hidden) h.el.style.display = h.display;
    window.__hidden = [];
  });
}

await browser.close();
console.log('done.');
