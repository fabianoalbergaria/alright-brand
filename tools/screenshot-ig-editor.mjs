#!/usr/bin/env node
// Tira screenshot do IG editor local pra mostrar pro owner como ficou
// (já que o kit.wearealright.cc tem Cloudflare Access bloqueando).
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const SRC = 'file:///Users/fabianoalbergaria/Desktop/alright-brand/.claude/worktrees/sleepy-tu-58502b/instagram-kit/index.html';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(SRC, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => new Promise(r => setTimeout(r, 800)));

// Full-page screenshot
const full = await page.screenshot({ type: 'png', fullPage: true });
writeFileSync('/tmp/ig-editor-full.png', full);
console.log('✓ /tmp/ig-editor-full.png (full page)');

// Just the avatars section (zoom in)
await page.evaluate(() => {
  document.getElementById('avatars')?.scrollIntoView({ block: 'start' });
});
await page.evaluate(() => new Promise(r => setTimeout(r, 400)));
const avatars = await page.screenshot({
  type: 'png',
  clip: { x: 0, y: 0, width: 1440, height: 1400 },
});
writeFileSync('/tmp/ig-editor-avatars.png', avatars);
console.log('✓ /tmp/ig-editor-avatars.png (avatars section)');

await browser.close();
