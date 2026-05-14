// Generate OG image + favicon variants for Alright site
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'assets/meta');
await fs.mkdir(OUT, { recursive: true });

const DARK = '#141413';
const BONE = '#faf9f5';
const ORANGE = '#d97757';

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

// ---------- OG image (1200×630) ----------
const ogHtml = `<!DOCTYPE html><html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500&display=block" rel="stylesheet">
<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:${DARK};color:${BONE};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden}
.frame{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:60px 72px}
.top{display:flex;justify-content:space-between;align-items:flex-start}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:13px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:rgba(250,249,245,.7)}
.center{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;text-align:center;gap:32px}
.wordmark{font-size:200px;font-weight:300;line-height:1;letter-spacing:-0.025em}
.wordmark .l{font-weight:700;color:${ORANGE}}
.tagline{font-size:30px;font-weight:300;letter-spacing:-0.01em;color:rgba(250,249,245,.85)}
.paren{color:${ORANGE};font-weight:300}
.bottom{display:flex;justify-content:space-between;align-items:flex-end;font-family:'JetBrains Mono',monospace;font-size:13px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,249,245,.5)}
.bottom .right{text-align:right}
</style></head><body>
<div class="frame">
  <div class="top">
    <span class="eyebrow">Alright · 2026</span>
    <span class="eyebrow">São Paulo / BR</span>
  </div>
  <div class="center">
    <div class="wordmark">A<span class="l">l</span>right</div>
    <div class="tagline"><span class="paren">((</span> Look again. <span class="paren">))</span></div>
  </div>
  <div class="bottom">
    <span>A.I. first Production Company</span>
    <span class="right">wearealright.cc</span>
  </div>
</div>
</body></html>`;
await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(ogHtml, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const ogBuf = await page.screenshot({ type: 'png', omitBackground: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await fs.writeFile(path.join(OUT, 'og-image.png'), ogBuf);
console.log('✓ og-image.png (1200×630)');

// JPEG variant (smaller, broader compatibility)
await sharp(ogBuf).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(OUT, 'og-image.jpg'));
console.log('✓ og-image.jpg');

// ---------- Favicon ----------
// SVG (modern browsers, scales)
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs><style>@import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&amp;display=block');text{font-family:'Bricolage Grotesque',sans-serif}</style></defs>
  <rect width="64" height="64" fill="${DARK}"/>
  <text x="32" y="49" text-anchor="middle" font-size="50" font-weight="400" letter-spacing="-0.02em" fill="${BONE}">A<tspan font-weight="700" fill="${ORANGE}">l</tspan></text>
</svg>`;
await fs.writeFile(path.join(OUT, 'favicon.svg'), faviconSvg);
console.log('✓ favicon.svg');

// Render PNG variants via browser (so Bricolage renders correctly)
function faviconHtml(size){
  const fs = Math.round(size * 0.78);
  return `<!DOCTYPE html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&display=block" rel="stylesheet">
<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:${size}px;height:${size}px;background:${DARK};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden}
.icon{width:${size}px;height:${size}px;background:${DARK};display:flex;align-items:center;justify-content:center;font-size:${fs}px;font-weight:400;color:${BONE};line-height:1;letter-spacing:-0.02em}
.icon b{font-weight:700;color:${ORANGE}}
</style></head><body><div class="icon">A<b>l</b></div></body></html>`;
}

const sizes = [16, 32, 48, 64, 180, 192, 512];
for (const size of sizes) {
  const html = faviconHtml(size);
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: size, height: size } });
  const out = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await fs.writeFile(path.join(OUT, out), buf);
  console.log(`✓ ${out}`);
}

await browser.close();
console.log('\nDone. Assets in assets/meta/');
