// Generate OG image + favicon variants for Alright site (v3 · 2026-05-26)
//
// V3 brand: símbolo de 3 figuras correndo com laptops (Symbol_White.png em
// bone) sobre Black puro. Wordmark "alright" lowercase em bone (PNG, fonte
// feita na mão sem versão TTF/OTF).
//
// Regra cravada owner: 'padrão é bone e preto, laranja só quando tiver
// imagem no fundo'. Favicons + OG image seguem isso — sem laranja.
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'assets/meta');
await fs.mkdir(OUT, { recursive: true });

const BLACK = '#000000';
const BONE = '#faf9f5';
const ORANGE = '#FF5D36'; // só usado pra brackets do ((Look again.))

// Assets v3 (PNG files na arquitetura — lettering feito na mão)
const SYMBOL_WHITE = path.join(ROOT, 'assets/logo/v3/symbol/Symbol_White.png');
const WORDMARK_WHITE = path.join(ROOT, 'assets/logo/v3/Wordmark_White.png');
const FONT_NEUE_HAAS_BOLD = path.join(ROOT, 'assets/fonts/v3/neue-haas-display/NeueHaasDisplayBold.ttf');
const FONT_MONUMENT_MONO = path.join(ROOT, 'assets/fonts/v3/monument-grotesk/MonumentGrotesk-Mono.otf');

async function fileUrl(p) {
  return 'file://' + p;
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

// ────────────────────────────────────────────────────────────────────────
// OG image (1200×630) — símbolo bone + wordmark "alright" bone + ((Look again.))
// ────────────────────────────────────────────────────────────────────────
// Embed PNGs + fonts como base64 dataURL pra Playwright renderizar sem
// race condition de file:// loading.
async function toDataUrl(p, mime) {
  const buf = await fs.readFile(p);
  return `data:${mime};base64,${buf.toString('base64')}`;
}
const symbolDataUrlOg   = await toDataUrl(SYMBOL_WHITE,        'image/png');
const wordmarkDataUrlOg = await toDataUrl(WORDMARK_WHITE,      'image/png');
const neueHaasDataUrl   = await toDataUrl(FONT_NEUE_HAAS_BOLD, 'font/ttf');
const monumentMonoDataUrl = await toDataUrl(FONT_MONUMENT_MONO, 'font/otf');

const ogHtml = `<!DOCTYPE html><html><head>
<style>
@font-face{font-family:"Neue Haas Display";src:url("${neueHaasDataUrl}") format("truetype");font-weight:700;font-style:normal;font-display:block}
@font-face{font-family:"Monument Grotesk Mono";src:url("${monumentMonoDataUrl}") format("opentype");font-weight:400;font-style:normal;font-display:block}
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1200px;height:630px;background:${BLACK};color:${BONE};font-family:"Neue Haas Display",sans-serif;overflow:hidden}
.frame{position:relative;width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:48px 64px}
.top{display:flex;justify-content:space-between;align-items:flex-start}
.eyebrow{font-family:"Monument Grotesk Mono",monospace;font-size:13px;font-weight:400;letter-spacing:.22em;text-transform:uppercase;color:rgba(250,249,245,.65)}
.center{display:flex;flex-direction:column;align-items:center;justify-content:center;flex:1;gap:24px}
.symbol{height:200px;width:auto;display:block}
.wordmark{height:90px;width:auto;display:block}
.tagline{font-family:"Neue Haas Display",sans-serif;font-size:28px;font-weight:700;letter-spacing:-0.01em;color:rgba(250,249,245,.85);margin-top:12px}
.tagline .paren{color:${ORANGE};font-weight:700}
.bottom{display:flex;justify-content:space-between;align-items:flex-end;font-family:"Monument Grotesk Mono",monospace;font-size:13px;font-weight:400;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,249,245,.45)}
.bottom .right{text-align:right}
</style></head><body>
<div class="frame">
  <div class="top">
    <span class="eyebrow">Alright · 2026</span>
    <span class="eyebrow">São Paulo / BR</span>
  </div>
  <div class="center">
    <img class="symbol" src="${symbolDataUrlOg}" alt="" />
    <img class="wordmark" src="${wordmarkDataUrlOg}" alt="alright" />
    <div class="tagline"><span class="paren">((</span> Look again. <span class="paren">))</span></div>
  </div>
  <div class="bottom">
    <span>A.I. first Production Company</span>
    <span class="right">wearealright.cc</span>
  </div>
</div>
</body></html>`;

await page.setViewportSize({ width: 1200, height: 630 });
await page.setContent(ogHtml, { waitUntil: 'load' });
await page.evaluate(() => document.fonts.ready);
await page.evaluate(() => Promise.all(Array.from(document.images).map(img => img.complete ? null : new Promise(r => { img.onload = r; img.onerror = r; }))));
await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
const ogBuf = await page.screenshot({ type: 'png', omitBackground: false, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await fs.writeFile(path.join(OUT, 'og-image.png'), ogBuf);
console.log('✓ og-image.png (1200×630)');

// JPEG variant (smaller, broader compat — usado por WhatsApp/social)
await sharp(ogBuf).jpeg({ quality: 90, mozjpeg: true }).toFile(path.join(OUT, 'og-image.jpg'));
console.log('✓ og-image.jpg');

// ────────────────────────────────────────────────────────────────────────
// Favicon (v3 · 2026-05-26) — Símbolo v3 (3 figuras correndo com laptops)
// em bone sobre Black puro. SVG inlinado pra max nitidez nos tamanhos
// que browsers permitem (SVG-preferring). PNGs nos tamanhos 16/32/48/64
// /180/192/512 pra compat completa.
// ────────────────────────────────────────────────────────────────────────

const symbolDataUrl = await (async () => {
  const buf = await fs.readFile(SYMBOL_WHITE);
  return `data:image/png;base64,${buf.toString('base64')}`;
})();

// SVG favicon: PNG embedado como dataURL pra single-file SVG
const faviconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 600">
  <rect width="600" height="600" fill="${BLACK}"/>
  <image x="80" y="80" width="440" height="440" href="${symbolDataUrl}" preserveAspectRatio="xMidYMid meet"/>
</svg>`;
await fs.writeFile(path.join(OUT, 'favicon.svg'), faviconSvg);
console.log('✓ favicon.svg');

// PNG variants — render at each size via Playwright (preserva nitidez do
// PNG nativo nos tamanhos pequenos). Embedding dataURL evita race-condition
// de file:// loading.
function faviconHtmlSync(size, padPct = 0.16) {
  const pad = Math.round(size * padPct);
  const inner = size - pad * 2;
  return `<!DOCTYPE html><html><head>
<style>*{margin:0;padding:0;box-sizing:border-box}
html,body{width:${size}px;height:${size}px;background:${BLACK};overflow:hidden}
.icon{width:${size}px;height:${size}px;background:${BLACK};display:flex;align-items:center;justify-content:center}
img{width:${inner}px;height:${inner}px;display:block;object-fit:contain}
</style></head><body><div class="icon"><img src="${symbolDataUrl}" alt=""/></div></body></html>`;
}

const sizes = [16, 32, 48, 64, 180, 192, 512];
for (const size of sizes) {
  // Tamanhos pequenos (16/32) ficam apertados — usar pad menor pra símbolo
  // ocupar mais área e ficar legível na aba do browser.
  const padPct = size <= 32 ? 0.06 : 0.12;
  const html = faviconHtmlSync(size, padPct);
  await page.setViewportSize({ width: size, height: size });
  await page.setContent(html, { waitUntil: 'load' });
  await page.evaluate(() => Promise.all(Array.from(document.images).map(img => img.complete ? null : new Promise(r => { img.onload = r; img.onerror = r; }))));
  await page.evaluate(() => new Promise(r => setTimeout(r, 100)));
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: size, height: size } });
  const out = size === 180 ? 'apple-touch-icon.png' : `icon-${size}.png`;
  await fs.writeFile(path.join(OUT, out), buf);
  console.log(`✓ ${out}`);
}

await browser.close();
console.log('\nDone. Assets v3 em assets/meta/');
