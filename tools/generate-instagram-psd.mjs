#!/usr/bin/env node
// Generate Instagram kit PSDs from the live editor HTML.
//
// Each PSD is a 2-layer master:
//   - "Background"  : solid raster (or 2-tone for feed-split)
//   - "Content"     : transparent PNG of the rendered piece without its bg color
//
// When stacked, the result is visually identical to the editor's flat PNG;
// when the Content layer is toggled, you see the raw backdrop.
//
// Usage:
//   node tools/generate-instagram-psd.mjs           # regenerate all 10
//   node tools/generate-instagram-psd.mjs --only=feed-bigidea,vert-stories

import { chromium } from 'playwright';
import { writePsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image, loadImage } from 'canvas';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

initializeCanvas(createCanvas, (w, h) => new Image(w, h));

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SRC_HTML = resolve(REPO_ROOT, 'instagram-kit/index.html');
const OUT_DIR = resolve(REPO_ROOT, 'assets/social/instagram/psd');

const BONE = '#faf9f5';
const DARK = '#141413';

// Pieces to render. feed-01-case is the hand-crafted text-layer PSD already
// on disk — skipped here so we don't clobber it with a raster version.
const PIECES = [
  { id: 'avatar-a',       file: 'avatar-a-symbol',         size: [1080, 1080], bg: DARK },
  { id: 'avatar-b',       file: 'avatar-b-favicon',        size: [1080, 1080], bg: DARK },
  { id: 'avatar-c',       file: 'avatar-c-wordmark',       size: [1080, 1080], bg: DARK },
  { id: 'feed-manifesto', file: 'feed-02-manifesto',       size: [1080, 1350], bg: DARK },
  { id: 'feed-bigidea',   file: 'feed-03-bigidea',         size: [1080, 1350], bg: BONE },
  { id: 'feed-making',    file: 'feed-04-making-of',       size: [1080, 1350], bg: BONE },
  { id: 'feed-quote',     file: 'feed-05-quote',           size: [1080, 1350], bg: BONE },
  // feed-split has bone/dark split panes — 62% top bone, 38% bottom dark
  { id: 'feed-split',     file: 'feed-06-split',           size: [1080, 1350], bg: 'split-62-bone-dark' },
  { id: 'vert-reels',     file: 'vertical-07-reels-cover', size: [1080, 1920], bg: BONE },
  { id: 'vert-stories',   file: 'vertical-08-stories',     size: [1080, 1920], bg: DARK },
];

function parseArgs() {
  const args = process.argv.slice(2);
  const only = args.find(a => a.startsWith('--only='));
  if (!only) return PIECES;
  const ids = only.slice('--only='.length).split(',').map(s => s.trim()).filter(Boolean);
  return PIECES.filter(p => ids.includes(p.id) || ids.includes(p.file));
}

function buildBackgroundCanvas(piece) {
  const [w, h] = piece.size;
  const cv = createCanvas(w, h);
  const ctx = cv.getContext('2d');
  if (piece.bg === 'split-62-bone-dark') {
    const topH = Math.round(h * 0.62);
    ctx.fillStyle = BONE;
    ctx.fillRect(0, 0, w, topH);
    ctx.fillStyle = DARK;
    ctx.fillRect(0, topH, w, h - topH);
  } else {
    ctx.fillStyle = piece.bg;
    ctx.fillRect(0, 0, w, h);
  }
  return cv;
}

async function captureContent(page, piece) {
  const [w, h] = piece.size;

  // Detach this frame and parent it in a clean offscreen holder so:
  //   - it's not clipped by `.piece-frame-wrap { overflow: hidden }`
  //   - the preview-time `transform: scale()` doesn't shrink it
  //   - bg color is transparent so the screenshot has alpha for content
  //   - no other page chrome bleeds through at the clip coords
  await page.evaluate(({ id }) => {
    const frame = document.getElementById(id);
    if (!frame) throw new Error('Frame not found: ' + id);

    // Stash original parent + position so we can restore after
    window.__psdRestore = window.__psdRestore || [];
    window.__psdRestore.push({
      el: frame,
      parent: frame.parentNode,
      next: frame.nextSibling,
      style: frame.getAttribute('style') || '',
    });

    // Hide every direct body child during capture so nothing else paints at
    // the clip region. We restore them after the screenshot.
    window.__psdHiddenSiblings = [];
    for (const child of Array.from(document.body.children)) {
      if (child.id === '__psdHolder') continue;
      window.__psdHiddenSiblings.push({ el: child, display: child.style.display });
      child.style.display = 'none';
    }

    // Re-parent into a clean fixed holder pinned at viewport origin
    let holder = document.getElementById('__psdHolder');
    if (!holder) {
      holder = document.createElement('div');
      holder.id = '__psdHolder';
      document.body.appendChild(holder);
    }
    holder.style.cssText = 'position:fixed;left:0;top:0;background:transparent;z-index:99999;';
    holder.innerHTML = '';
    holder.appendChild(frame);

    // Strip preview-only styling
    frame.style.transform = 'none';
    frame.style.boxShadow = 'none';
    frame.style.background = 'transparent';

    // feed-split has its own inner pane backgrounds — knock them out too
    frame.querySelectorAll('.pane-top, .pane-bottom').forEach(el => {
      el.style.background = 'transparent';
    });

    // Some bg classes might compose with var(--bone) — force transparency
    document.body.style.background = 'transparent';
    document.documentElement.style.background = 'transparent';
  }, { id: piece.id });

  // Two RAFs after fonts ready to let layout settle
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));

  const buf = await page.screenshot({
    clip: { x: 0, y: 0, width: w, height: h },
    omitBackground: true,
    type: 'png',
  });

  // Restore frame to its original DOM position so subsequent captures see a
  // clean page (otherwise multiple frames pile up in the holder)
  await page.evaluate(() => {
    const stack = window.__psdRestore;
    while (stack.length) {
      const e = stack.pop();
      if (e.next) e.parent.insertBefore(e.el, e.next);
      else e.parent.appendChild(e.el);
      if (e.style) e.el.setAttribute('style', e.style);
      else e.el.removeAttribute('style');
    }
    // Restore hidden body children
    for (const s of window.__psdHiddenSiblings || []) {
      s.el.style.display = s.display;
    }
    window.__psdHiddenSiblings = [];
  });

  return buf;
}

async function main() {
  mkdirSync(OUT_DIR, { recursive: true });
  const queue = parseArgs();
  console.log(`generate-instagram-psd · ${queue.length} piece(s)`);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1080, height: 1920 },
    deviceScaleFactor: 1,
  });
  const page = await ctx.newPage();
  await page.goto(`file://${SRC_HTML}`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);

  for (const piece of queue) {
    const [w, h] = piece.size;

    const contentPng = await captureContent(page, piece);
    const contentImg = await loadImage(contentPng);
    const contentCv = createCanvas(w, h);
    contentCv.getContext('2d').drawImage(contentImg, 0, 0, w, h);

    const bgCv = buildBackgroundCanvas(piece);

    // Pre-composited flat canvas — required for Photoshop/preview tools that
    // read `psd.canvas` (composite image data) instead of compositing layers.
    const flatCv = createCanvas(w, h);
    const fctx = flatCv.getContext('2d');
    fctx.drawImage(bgCv, 0, 0);
    fctx.drawImage(contentCv, 0, 0);

    const psd = {
      width: w,
      height: h,
      canvas: flatCv,
      children: [
        {
          name: 'Background',
          canvas: bgCv,
          left: 0, top: 0, right: w, bottom: h,
        },
        {
          name: 'Content',
          canvas: contentCv,
          left: 0, top: 0, right: w, bottom: h,
        },
      ],
    };

    const out = resolve(OUT_DIR, `${piece.file}.psd`);
    const buf = writePsd(psd);
    writeFileSync(out, Buffer.from(buf));
    console.log(`  ✓ ${piece.file}.psd  (${w}×${h}, ${Math.round(buf.byteLength / 1024)} KB)`);
  }

  await browser.close();
  console.log('done.');
}

main().catch(err => { console.error(err); process.exit(1); });
