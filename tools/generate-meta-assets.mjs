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
// Responsive design: PNG icons at 16/32 use a thickened-wisp variant
// (legível em telas onde o browser não consegue rasterizar wisps sub-pixel);
// PNG icons ≥48 e o favicon.svg usam a espessura canon do motion (idêntica
// às references e ao frame final do brasa-motion-reveal.html).
//
// Geometria reutilizada do tools/generate-brasa-logo.mjs (mesmas 3 cubic
// Beziers, ember a 78% from top, halo tight). Aqui inlinada pra evitar
// dependência cross-tool — se a geometria mudar lá, atualize aqui também.

const BRASA_GEOMETRY = (() => {
  // Square viewBox 600×600. Ember at 78% from top.
  const SIZE = 600;
  const CX_BR = SIZE / 2;
  const EY_BR = SIZE * 0.78;
  const CY_TILE_BR = 375;
  const EY_ORIG = CY_TILE_BR + 165;
  const DY = EY_BR - EY_ORIG;

  const canon = [
    { p0: [CX_BR, EY_ORIG - 12 + DY], p1: [CX_BR - 68, CY_TILE_BR + 30 + DY], p2: [CX_BR + 60, CY_TILE_BR - 68 + DY], p3: [CX_BR + 22, CY_TILE_BR - 195 + DY], baseW: 8.5, tipW: 0.8 },
    { p0: [CX_BR, EY_ORIG - 12 + DY], p1: [CX_BR + 60, CY_TILE_BR + 22 + DY], p2: [CX_BR - 60, CY_TILE_BR - 52 + DY], p3: [CX_BR - 75, CY_TILE_BR - 150 + DY], baseW: 7.0, tipW: 0.8 },
    { p0: [CX_BR, EY_ORIG - 12 + DY], p1: [CX_BR + 22, CY_TILE_BR + 45 + DY], p2: [CX_BR + 82, CY_TILE_BR - 22 + DY], p3: [CX_BR + 82, CY_TILE_BR - 120 + DY], baseW: 5.5, tipW: 0.8 },
  ];

  function bezierPoint(p0, p1, p2, p3, t) {
    const omt = 1 - t;
    return [
      omt*omt*omt*p0[0] + 3*omt*omt*t*p1[0] + 3*omt*t*t*p2[0] + t*t*t*p3[0],
      omt*omt*omt*p0[1] + 3*omt*omt*t*p1[1] + 3*omt*t*t*p2[1] + t*t*t*p3[1],
    ];
  }
  function bezierTangent(p0, p1, p2, p3, t) {
    const omt = 1 - t;
    const x = 3*omt*omt*(p1[0]-p0[0]) + 6*omt*t*(p2[0]-p1[0]) + 3*t*t*(p3[0]-p2[0]);
    const y = 3*omt*omt*(p1[1]-p0[1]) + 6*omt*t*(p2[1]-p1[1]) + 3*t*t*(p3[1]-p2[1]);
    const len = Math.hypot(x, y) || 1;
    return [x/len, y/len];
  }
  function ribbonPath(wisp, samples = 80) {
    const { p0, p1, p2, p3, baseW, tipW } = wisp;
    const left = [], right = [];
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const [px, py] = bezierPoint(p0, p1, p2, p3, t);
      const [tx, ty] = bezierTangent(p0, p1, p2, p3, t);
      const nx = ty, ny = -tx;
      const w = baseW + (tipW - baseW) * t;
      const hw = w / 2;
      left.push([px - nx * hw, py - ny * hw]);
      right.push([px + nx * hw, py + ny * hw]);
    }
    const fmt = ([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`;
    let d = `M ${fmt(left[0])}`;
    for (let i = 1; i < left.length; i++) d += ` L ${fmt(left[i])}`;
    for (let i = right.length - 1; i >= 0; i--) d += ` L ${fmt(right[i])}`;
    return d + ' Z';
  }

  function svg(wispScale = 1) {
    const wisps = canon.map(w => ({ ...w, baseW: w.baseW * wispScale, tipW: w.tipW * wispScale }));
    const emberR = 18;
    const haloR = emberR * 3.0;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}">
  <defs>
    <radialGradient id="halo" cx="${CX_BR}" cy="${EY_BR}" r="${haloR}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="${ORANGE}" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="${ORANGE}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${ORANGE}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" fill="${DARK}"/>
  <circle cx="${CX_BR}" cy="${EY_BR}" r="${haloR}" fill="url(#halo)"/>
  ${wisps.map(w => `<path d="${ribbonPath(w)}" fill="${BONE}"/>`).join('\n  ')}
  <circle cx="${CX_BR}" cy="${EY_BR}" r="${emberR}" fill="${ORANGE}"/>
</svg>`;
  }
  return { svg };
})();

// favicon.svg = motion canon thickness (used by SVG-preferring browsers)
const faviconSvg = BRASA_GEOMETRY.svg(1.0);
await fs.writeFile(path.join(OUT, 'favicon.svg'), faviconSvg);
console.log('✓ favicon.svg (canon)');

// PNG variants — chunky for 16/32 (×3.5 wisp scale), canon for 48+
function faviconHtml(size){
  // At 16/32px sub-pixel wisps disappear → use thicker scale.
  // At 48+ rasterization preserves canon thickness cleanly.
  const wispScale = size <= 32 ? 3.5 : 1.0;
  const svg = BRASA_GEOMETRY.svg(wispScale);
  return `<!DOCTYPE html><html><head>
<style>*{margin:0;padding:0;box-sizing:border-box}html,body{width:${size}px;height:${size}px;background:${DARK};overflow:hidden}
.icon{width:${size}px;height:${size}px;background:${DARK};display:flex;align-items:center;justify-content:center}
svg{width:100%;height:100%;display:block}
</style></head><body><div class="icon">${svg}</div></body></html>`;
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
