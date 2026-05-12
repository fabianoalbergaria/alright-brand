// Alright logo pack generator
// Outputs outlined SVGs (paths, no font dependency),
// live-text SVGs (editable), and PNGs at 1x/2x/3x.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { readFileSync } from 'node:fs';
import opentype from 'opentype.js';
import sharp from 'sharp';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT_SVG_OUTLINED = path.join(ROOT, 'assets/logo/svg/outlined');
const OUT_SVG_LIVE = path.join(ROOT, 'assets/logo/svg/live-text');
const OUT_PNG = path.join(ROOT, 'assets/logo/png');

await fs.mkdir(OUT_SVG_OUTLINED, { recursive: true });
await fs.mkdir(OUT_SVG_LIVE, { recursive: true });
await fs.mkdir(OUT_PNG, { recursive: true });

// Load static TTF instances (created via fontTools)
function loadFont(file) {
  const buf = readFileSync(path.join(HERE, file));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
}
const regular = loadFont('fonts/Bricolage-Regular.ttf');
const bold = loadFont('fonts/Bricolage-Bold.ttf');

const DARK = '#141413';
const BONE = '#faf9f5';
const ORANGE = '#d97757';

const FONT_SIZE = 200;
const PADDING = 60;

// letters: array of { char, weight ('reg'|'bold'), color, extraSpacingBefore? }
function composeOutlined(letters, fg, bg) {
  const baseline = FONT_SIZE * 0.78;
  let x = 0;
  let prevGlyph = null;
  let prevFont = null;
  const pathsXml = [];

  for (const { char, weight, color, extraSpacingBefore = 0 } of letters) {
    const font = weight === 'bold' ? bold : regular;
    x += extraSpacingBefore;

    if (prevGlyph && prevFont === font) {
      // only kern within the same font to avoid cross-font glyph index errors
      const curGlyph = font.charToGlyph(char);
      const kern = font.getKerningValue(prevGlyph, curGlyph) || 0;
      x += (kern / font.unitsPerEm) * FONT_SIZE;
    }

    if (char === ' ') {
      // treat as wide space
      x += FONT_SIZE * 0.3;
      prevGlyph = null;
      prevFont = null;
      continue;
    }

    const p = font.getPath(char, x, baseline, FONT_SIZE);
    const d = p.toPathData(3);
    pathsXml.push(`<path d="${d}" fill="${color || fg}"/>`);

    const glyph = font.charToGlyph(char);
    x += (glyph.advanceWidth / font.unitsPerEm) * FONT_SIZE;
    prevGlyph = glyph;
    prevFont = font;
  }

  const width = Math.ceil(x);
  const vbW = width + PADDING * 2;
  const vbH = Math.ceil(FONT_SIZE) + PADDING * 1.2;
  const bgRect = bg ? `<rect x="${-PADDING}" y="${-PADDING * 0.4}" width="${vbW}" height="${vbH}" fill="${bg}"/>` : '';

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-PADDING} ${-PADDING * 0.4} ${vbW} ${vbH}" width="${vbW}" height="${vbH}">
  ${bgRect}
  ${pathsXml.join('\n  ')}
</svg>`;
}

// Live-text version using <text> + Bricolage
function composeLive(spec, fg, bg) {
  // spec: array of segments { text, weight, color, letterSpacing? }
  const fontSize = FONT_SIZE;
  let svgText = '';
  for (const seg of spec) {
    const w = seg.weight === 'bold' ? 700 : 400;
    const fill = seg.color || fg;
    const ls = seg.letterSpacing ? ` letter-spacing="${seg.letterSpacing}"` : '';
    svgText += `<tspan font-weight="${w}" fill="${fill}"${ls}>${seg.text.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</tspan>`;
  }
  // approximate width — for live text we use a generous viewBox
  const vbW = 2000;
  const vbH = 320;
  const bgRect = bg ? `<rect width="${vbW}" height="${vbH}" fill="${bg}"/>` : '';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vbW} ${vbH}" width="${vbW}" height="${vbH}">
  <style>text { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; }</style>
  ${bgRect}
  <text x="60" y="220" font-size="${fontSize}">${svgText}</text>
</svg>`;
}

// Build variant definitions
const variants = [
  {
    name: 'alright-default-dark',
    bg: null,
    outlined: () => composeOutlined([
      { char: 'A', weight: 'reg' },
      { char: 'l', weight: 'bold' },
      { char: 'r', weight: 'reg' },
      { char: 'i', weight: 'reg' },
      { char: 'g', weight: 'reg' },
      { char: 'h', weight: 'reg' },
      { char: 't', weight: 'reg' },
    ], DARK, null),
    live: () => composeLive([
      { text: 'A' }, { text: 'l', weight: 'bold' }, { text: 'right' },
    ], DARK, null),
  },
  {
    name: 'alright-default-bone',
    bg: DARK,
    outlined: () => composeOutlined([
      { char: 'A', weight: 'reg', color: BONE },
      { char: 'l', weight: 'bold', color: BONE },
      { char: 'r', weight: 'reg', color: BONE },
      { char: 'i', weight: 'reg', color: BONE },
      { char: 'g', weight: 'reg', color: BONE },
      { char: 'h', weight: 'reg', color: BONE },
      { char: 't', weight: 'reg', color: BONE },
    ], BONE, DARK),
    live: () => composeLive([
      { text: 'A', color: BONE }, { text: 'l', weight: 'bold', color: BONE }, { text: 'right', color: BONE },
    ], BONE, DARK),
  },
  {
    name: 'alright-expressivo-dark',
    bg: null,
    outlined: () => composeOutlined([
      { char: 'A', weight: 'reg' },
      { char: 'l', weight: 'bold', color: ORANGE },
      { char: 'r', weight: 'reg' },
      { char: 'i', weight: 'reg' },
      { char: 'g', weight: 'reg' },
      { char: 'h', weight: 'reg' },
      { char: 't', weight: 'reg' },
    ], DARK, null),
    live: () => composeLive([
      { text: 'A' }, { text: 'l', weight: 'bold', color: ORANGE }, { text: 'right' },
    ], DARK, null),
  },
  {
    name: 'alright-expressivo-bone',
    bg: DARK,
    outlined: () => composeOutlined([
      { char: 'A', weight: 'reg', color: BONE },
      { char: 'l', weight: 'bold', color: ORANGE },
      { char: 'r', weight: 'reg', color: BONE },
      { char: 'i', weight: 'reg', color: BONE },
      { char: 'g', weight: 'reg', color: BONE },
      { char: 'h', weight: 'reg', color: BONE },
      { char: 't', weight: 'reg', color: BONE },
    ], BONE, DARK),
    live: () => composeLive([
      { text: 'A', color: BONE }, { text: 'l', weight: 'bold', color: ORANGE }, { text: 'right', color: BONE },
    ], BONE, DARK),
  },
  {
    name: 'alright-reveal-dark',
    bg: null,
    outlined: () => composeOutlined([
      { char: '(', weight: 'reg' },
      { char: '(', weight: 'reg', extraSpacingBefore: -20 },
      { char: 'A', weight: 'reg', extraSpacingBefore: 30 },
      { char: 'I', weight: 'reg', extraSpacingBefore: 30 },
      { char: 'r', weight: 'reg', extraSpacingBefore: 30 },
      { char: 'i', weight: 'reg', extraSpacingBefore: 30 },
      { char: 'g', weight: 'reg', extraSpacingBefore: 30 },
      { char: 'h', weight: 'reg', extraSpacingBefore: 30 },
      { char: 't', weight: 'reg', extraSpacingBefore: 30 },
      { char: ')', weight: 'reg', extraSpacingBefore: 30 },
      { char: ')', weight: 'reg', extraSpacingBefore: -20 },
    ], DARK, null),
    live: () => composeLive([
      { text: '((' }, { text: 'A I r i g h t', letterSpacing: '20' }, { text: '))' },
    ], DARK, null),
  },
  {
    name: 'alright-reveal-bone',
    bg: DARK,
    outlined: () => composeOutlined([
      { char: '(', weight: 'reg', color: BONE },
      { char: '(', weight: 'reg', color: BONE, extraSpacingBefore: -20 },
      { char: 'A', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 'I', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 'r', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 'i', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 'g', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 'h', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: 't', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: ')', weight: 'reg', color: BONE, extraSpacingBefore: 30 },
      { char: ')', weight: 'reg', color: BONE, extraSpacingBefore: -20 },
    ], BONE, DARK),
    live: () => composeLive([
      { text: '((', color: BONE }, { text: 'A I r i g h t', letterSpacing: '20', color: BONE }, { text: '))', color: BONE },
    ], BONE, DARK),
  },
  {
    name: 'lockup-we-are-alright-dark',
    bg: null,
    outlined: () => composeOutlined([
      { char: '(', weight: 'reg' },
      { char: '(', weight: 'reg', extraSpacingBefore: -20 },
      { char: 'W', weight: 'reg', extraSpacingBefore: 15 },
      { char: 'e', weight: 'reg' },
      { char: ' ', weight: 'reg' },
      { char: 'A', weight: 'reg' },
      { char: 'r', weight: 'reg' },
      { char: 'e', weight: 'reg' },
      { char: ' ', weight: 'reg' },
      { char: 'A', weight: 'reg' },
      { char: 'l', weight: 'reg' },
      { char: 'r', weight: 'reg' },
      { char: 'i', weight: 'reg' },
      { char: 'g', weight: 'reg' },
      { char: 'h', weight: 'reg' },
      { char: 't', weight: 'reg' },
      { char: ')', weight: 'reg', extraSpacingBefore: 15 },
      { char: ')', weight: 'reg', extraSpacingBefore: -20 },
    ], DARK, null),
    live: () => composeLive([
      { text: '((We Are Alright))' },
    ], DARK, null),
  },
  {
    name: 'lockup-we-are-alright-bone',
    bg: DARK,
    outlined: () => composeOutlined([
      { char: '(', weight: 'reg', color: BONE },
      { char: '(', weight: 'reg', color: BONE, extraSpacingBefore: -20 },
      { char: 'W', weight: 'reg', color: BONE, extraSpacingBefore: 15 },
      { char: 'e', weight: 'reg', color: BONE },
      { char: ' ', weight: 'reg', color: BONE },
      { char: 'A', weight: 'reg', color: BONE },
      { char: 'r', weight: 'reg', color: BONE },
      { char: 'e', weight: 'reg', color: BONE },
      { char: ' ', weight: 'reg', color: BONE },
      { char: 'A', weight: 'reg', color: BONE },
      { char: 'l', weight: 'reg', color: BONE },
      { char: 'r', weight: 'reg', color: BONE },
      { char: 'i', weight: 'reg', color: BONE },
      { char: 'g', weight: 'reg', color: BONE },
      { char: 'h', weight: 'reg', color: BONE },
      { char: 't', weight: 'reg', color: BONE },
      { char: ')', weight: 'reg', color: BONE, extraSpacingBefore: 15 },
      { char: ')', weight: 'reg', color: BONE, extraSpacingBefore: -20 },
    ], BONE, DARK),
    live: () => composeLive([
      { text: '((We Are Alright))', color: BONE },
    ], BONE, DARK),
  },
];

console.log(`Generating ${variants.length} variants...`);

for (const v of variants) {
  const outlinedSvg = v.outlined();
  const liveSvg = v.live();

  await fs.writeFile(path.join(OUT_SVG_OUTLINED, `${v.name}.svg`), outlinedSvg);
  await fs.writeFile(path.join(OUT_SVG_LIVE, `${v.name}.svg`), liveSvg);

  // Rasterize outlined SVG to PNG @1x/2x/3x
  // Density: 1x = 1200px wide reference
  const widths = { '1x': 1200, '2x': 2400, '3x': 3600 };
  for (const [tag, w] of Object.entries(widths)) {
    const png = await sharp(Buffer.from(outlinedSvg))
      .resize({ width: w, withoutEnlargement: false })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await fs.writeFile(path.join(OUT_PNG, `${v.name}@${tag}.png`), png);
  }
  console.log(`✓ ${v.name}`);
}

console.log('\nDone.');
console.log(`  ${variants.length} outlined SVGs → assets/logo/svg/outlined/`);
console.log(`  ${variants.length} live-text SVGs → assets/logo/svg/live-text/`);
console.log(`  ${variants.length * 3} PNGs → assets/logo/png/`);
