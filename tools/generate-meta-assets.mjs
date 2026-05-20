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
const ORANGE = '#ed1c24';

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

// ---------- Favicon (Brasa v2 · 2026-05-20) ----------
// Substituiu o ((l)) anterior. Novo anchor: a brasa — ember Kodak Red +
// halo radial (único gradiente permitido na marca) sobre Dark. Sem smoke
// wisps no favicon — ficariam invisíveis nos 16/32px. Apenas o "ponto
// quente" que dá nome à signature motion "Feel Alright" / "((Brasa))".
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <radialGradient id="halo" cx="50%" cy="50%" r="45%">
      <stop offset="0%"  stop-color="${ORANGE}" stop-opacity="0.70"/>
      <stop offset="50%" stop-color="${ORANGE}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" fill="${DARK}"/>
  <circle cx="32" cy="32" r="22" fill="url(#halo)" />
  <circle cx="32" cy="32" r="5" fill="${ORANGE}" />
</svg>`;
await fs.writeFile(path.join(OUT, 'favicon.svg'), faviconSvg);
console.log('✓ favicon.svg');

// PNG variants — pure SVG rendering scales perfectly. For each target
// size, embed the same SVG and screenshot.
function faviconHtml(size){
  const r = Math.round(size * 0.35);  // halo radius ~35% of canvas
  const er = Math.max(2, Math.round(size * 0.08));  // ember radius ~8%
  return `<!DOCTYPE html><html><head>
<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:${size}px;height:${size}px;background:${DARK};overflow:hidden}
.icon{width:${size}px;height:${size}px;background:${DARK};display:flex;align-items:center;justify-content:center}
svg{width:100%;height:100%;display:block}
</style></head><body><div class="icon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <radialGradient id="halo" cx="50%" cy="50%" r="45%">
      <stop offset="0%"  stop-color="${ORANGE}" stop-opacity="0.70"/>
      <stop offset="50%" stop-color="${ORANGE}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="${DARK}"/>
  <circle cx="${size/2}" cy="${size/2}" r="${r}" fill="url(#halo)" />
  <circle cx="${size/2}" cy="${size/2}" r="${er}" fill="${ORANGE}" />
</svg>
</div></body></html>`;
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
