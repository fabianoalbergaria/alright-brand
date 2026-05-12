// Alright logo pack generator v2 — uses Playwright (real browser, real Bricolage)
// Outputs: live-text SVG + PNG @1x/2x/3x for each variant.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT_SVG = path.join(ROOT, 'assets/logo/svg');
const OUT_PNG = path.join(ROOT, 'assets/logo/png');

await fs.mkdir(OUT_SVG, { recursive: true });
await fs.mkdir(OUT_PNG, { recursive: true });

const DARK = '#141413';
const BONE = '#faf9f5';
const ORANGE = '#d97757';

// Each variant defines HTML markup for the logo and which background
// to draw on. The browser does the heavy lifting (Bricolage from Google Fonts).
const variants = [
  {
    name: 'alright-default-dark',
    bg: BONE,
    html: `<span class="reg" style="color:${DARK}">A<span class="bold">l</span>right</span>`,
  },
  {
    name: 'alright-default-bone',
    bg: DARK,
    html: `<span class="reg" style="color:${BONE}">A<span class="bold">l</span>right</span>`,
  },
  {
    name: 'alright-expressivo-dark',
    bg: BONE,
    html: `<span class="reg" style="color:${DARK}">A<span class="bold" style="color:${ORANGE}">l</span>right</span>`,
  },
  {
    name: 'alright-expressivo-bone',
    bg: DARK,
    html: `<span class="reg" style="color:${BONE}">A<span class="bold" style="color:${ORANGE}">l</span>right</span>`,
  },
  {
    name: 'alright-reveal-dark',
    bg: BONE,
    html: `<span class="reg reveal" style="color:${DARK}">((A I r i g h t))</span>`,
  },
  {
    name: 'alright-reveal-bone',
    bg: DARK,
    html: `<span class="reg reveal" style="color:${BONE}">((A I r i g h t))</span>`,
  },
  {
    name: 'lockup-we-are-alright-dark',
    bg: BONE,
    html: `<span class="reg" style="color:${DARK}">((We Are Alright))</span>`,
  },
  {
    name: 'lockup-we-are-alright-bone',
    bg: DARK,
    html: `<span class="reg" style="color:${BONE}">((We Are Alright))</span>`,
  },
];

function buildPage(variant, widthPx) {
  const fontSize = 200;
  const padding = 60;
  return `<!DOCTYPE html>
<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,700&display=block" rel="stylesheet">
<style>
  html,body { margin:0; padding:0; background:${variant.bg}; }
  body { font-family:'Bricolage Grotesque', sans-serif; font-size:${fontSize}px; line-height:1; padding:${padding}px ${padding * 1.2}px; display:inline-block; }
  .reg { font-weight:400; letter-spacing:-0.01em; }
  .bold { font-weight:700; }
  .reveal { letter-spacing:0.04em; }
  #logo { display:inline-block; }
</style>
</head>
<body><span id="logo">${variant.html}</span></body></html>`;
}

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 3 });
const page = await ctx.newPage();

console.log(`Rendering ${variants.length} variants...`);

for (const v of variants) {
  await page.setContent(buildPage(v, 4000), { waitUntil: 'networkidle' });
  // Wait for Bricolage to be ready
  await page.evaluate(() => document.fonts.ready);

  const logo = await page.locator('#logo').first();
  const box = await logo.boundingBox();
  if (!box) throw new Error(`No bounding box for ${v.name}`);

  // Save PNG at 3 sizes (1x = 1200 wide reference; we screenshot the element
  // at deviceScaleFactor=3 which yields ~3x, then resize to 2x and 1x)
  const baseWidth = 1200;
  const heightRatio = box.height / box.width;
  const widths = { '3x': baseWidth * 3, '2x': baseWidth * 2, '1x': baseWidth };

  // Capture at highest resolution
  const buf3x = await logo.screenshot({ type: 'png', omitBackground: false });
  await fs.writeFile(path.join(OUT_PNG, `${v.name}@3x.png`), buf3x);

  // Use sharp to downscale
  const sharp = (await import('sharp')).default;
  for (const tag of ['2x', '1x']) {
    const out = await sharp(buf3x).resize({ width: widths[tag] }).png({ compressionLevel: 9 }).toBuffer();
    await fs.writeFile(path.join(OUT_PNG, `${v.name}@${tag}.png`), out);
  }

  // Build a live-text SVG with <text>/<tspan> + @font-face import.
  // Render at a tall viewBox; baseline positioned at 80% height.
  const svgW = 2000;
  const svgH = Math.round(svgW * heightRatio);
  const fontSize = Math.round(svgH * 0.72);
  const padX = Math.round(svgW * 0.04);
  const baselineY = Math.round(svgH * 0.78);

  // Convert HTML span markup to tspan markup for SVG <text>
  // Maps <span class="bold">X</span>  →  <tspan font-weight="700">X</tspan>
  // Inline color via style="color:..." → fill="..."
  function htmlToTspan(html, defaultFill) {
    // strip outer <span class="reg ..."> wrapper
    let inner = html.replace(/^<span[^>]*>/, '').replace(/<\/span>$/, '');
    // tspans for bold spans (with optional color)
    inner = inner.replace(/<span class="bold"(?: style="color:([^"]+)")?>([^<]+)<\/span>/g,
      (_, color, text) => `<tspan font-weight="700"${color ? ` fill="${color}"` : ''}>${text}</tspan>`);
    return inner;
  }
  const defaultFill = v.html.match(/color:(#[0-9a-fA-F]+)/)?.[1] || DARK;
  const isReveal = v.html.includes('reveal');
  const tspanContent = htmlToTspan(v.html, defaultFill);
  const letterSpacing = isReveal ? '0.04em' : '-0.01em';

  const liveSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" width="${svgW}" height="${svgH}">
  <defs>
    <style><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&display=swap');
      text { font-family:'Bricolage Grotesque', 'Inter', sans-serif; }
    ]]></style>
  </defs>
  <rect width="100%" height="100%" fill="${v.bg}"/>
  <text x="${padX}" y="${baselineY}" font-size="${fontSize}" font-weight="400" letter-spacing="${letterSpacing}" fill="${defaultFill}">${tspanContent}</text>
</svg>`;
  await fs.writeFile(path.join(OUT_SVG, `${v.name}.svg`), liveSvg);

  console.log(`✓ ${v.name}`);
}

await browser.close();
console.log('\nDone.');
console.log(`  ${variants.length} SVGs → assets/logo/svg/`);
console.log(`  ${variants.length * 3} PNGs → assets/logo/png/`);
