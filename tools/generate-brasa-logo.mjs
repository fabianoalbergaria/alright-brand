#!/usr/bin/env node
// Generate Brasa logo variants (SVG + PNG) — frozen at the motion's peak.
// Uses the EXACT wisp geometry from the motion's canvas drawing
// (brasa-motion-reveal.html lines 198–226): three cubic Beziers from
// p0→p1→p2→p3 with variable width (baseW at t=0 → tipW at t=1), rendered
// as filled offset polylines (smooth ribbon outline). Wisps cross/interlace
// in the middle, exactly like the motion freezes at WISP_FINISH (~2.82s).

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
const RED  = '#ed1c24';

// ─────────────────────────────────────────────────────────────────────────
// Motion-canon geometry (logical 600×750 — copied verbatim from the
// motion source). Wisps are 4-point cubic Beziers from ember to tip.
// ─────────────────────────────────────────────────────────────────────────

const LOGICAL_W = 600;
const LOGICAL_H = 750;
const CX = LOGICAL_W / 2;       // 300
const CY_TILE = LOGICAL_H * 0.5; // 375
const EY = CY_TILE + 165;        // 540 — ember y in motion coords

// Motion canon — exact wisp thicknesses from brasa-motion-reveal.html at
// peak. Favicon uses these unscaled (owner: "espessura igual ao frame final
// do motion"). Mark/lockup scale up by 1.4× to read chunkier as a frozen
// graphic (canvas circle-bead softens edges; SVG outline is crisp, needs
// more mass).
const CANON_WISPS = [
  { p0: [CX, EY - 12], p1: [CX - 68, CY_TILE + 30], p2: [CX +  60, CY_TILE -  68], p3: [CX +  22, CY_TILE - 195], baseW: 8.5, tipW: 0.8 },
  { p0: [CX, EY - 12], p1: [CX + 60, CY_TILE + 22], p2: [CX -  60, CY_TILE -  52], p3: [CX -  75, CY_TILE - 150], baseW: 7.0, tipW: 0.8 },
  { p0: [CX, EY - 12], p1: [CX + 22, CY_TILE + 45], p2: [CX +  82, CY_TILE -  22], p3: [CX +  82, CY_TILE - 120], baseW: 5.5, tipW: 0.8 },
];

// Mark/lockup wisps — owner-approved 1.4× thickening for SVG outline
const MARK_BASEW_SCALE = 1.4;
const WISPS = CANON_WISPS.map(w => ({
  ...w,
  baseW: w.baseW * MARK_BASEW_SCALE,
}));

function bezierPoint(p0, p1, p2, p3, t) {
  const omt = 1 - t;
  const x = omt*omt*omt*p0[0] + 3*omt*omt*t*p1[0] + 3*omt*t*t*p2[0] + t*t*t*p3[0];
  const y = omt*omt*omt*p0[1] + 3*omt*omt*t*p1[1] + 3*omt*t*t*p2[1] + t*t*t*p3[1];
  return [x, y];
}

function bezierTangent(p0, p1, p2, p3, t) {
  const omt = 1 - t;
  const x = 3*omt*omt*(p1[0]-p0[0]) + 6*omt*t*(p2[0]-p1[0]) + 3*t*t*(p3[0]-p2[0]);
  const y = 3*omt*omt*(p1[1]-p0[1]) + 6*omt*t*(p2[1]-p1[1]) + 3*t*t*(p3[1]-p2[1]);
  const len = Math.hypot(x, y) || 1;
  return [x/len, y/len];
}

// Build a filled ribbon outline by sampling the Bezier curve and offsetting
// each sample point along the perpendicular to the tangent. Width tapers
// linearly from baseW (at t=0) to tipW (at t=1). Returns an SVG path "d".
function ribbonPath(wisp, samples = 80, scale = 1, offset = [0, 0]) {
  const { p0, p1, p2, p3, baseW, tipW } = wisp;
  const left = [];
  const right = [];
  for (let i = 0; i <= samples; i++) {
    const t = i / samples;
    const [px, py] = bezierPoint(p0, p1, p2, p3, t);
    const [tx, ty] = bezierTangent(p0, p1, p2, p3, t);
    // Perpendicular: rotate tangent 90° clockwise → (ty, -tx)
    const nx = ty, ny = -tx;
    const w = baseW + (tipW - baseW) * t;
    const hw = w / 2;
    const x = px * scale + offset[0];
    const y = py * scale + offset[1];
    const sx = scale; // perpendicular scaling matches main scale (uniform)
    left.push([x - nx * hw * sx, y - ny * hw * sx]);
    right.push([x + nx * hw * sx, y + ny * hw * sx]);
  }
  // Build closed path: along left edge forward, then right edge backward.
  const fmt = ([x, y]) => `${x.toFixed(2)} ${y.toFixed(2)}`;
  let d = `M ${fmt(left[0])}`;
  for (let i = 1; i < left.length; i++) d += ` L ${fmt(left[i])}`;
  for (let i = right.length - 1; i >= 0; i--) d += ` L ${fmt(right[i])}`;
  d += ' Z';
  return d;
}

// ─────────────────────────────────────────────────────────────────────────
// SVG builders
// ─────────────────────────────────────────────────────────────────────────

function emberAndHalo(scale = 1, offset = [0, 0]) {
  // Ember position scaled into target viewBox.
  const ex = CX * scale + offset[0];
  const ey = EY * scale + offset[1];
  // Ember radius at "burned" state ≈ 14 logical px (from motion: baseR + glow).
  const emberR = 14 * scale;
  // Halo: tight glow around ember — much smaller than my v1 mistake. Matches
  // the motion's burning state (haloR ≈ baseR * 1.9–2.5).
  const haloR = emberR * 3.2;
  return `
    <defs>
      <radialGradient id="brasa-halo" cx="${ex}" cy="${ey}" r="${haloR}" gradientUnits="userSpaceOnUse">
        <stop offset="0%"  stop-color="${RED}" stop-opacity="0.42"/>
        <stop offset="45%" stop-color="${RED}" stop-opacity="0.15"/>
        <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="${ex}" cy="${ey}" r="${haloR}" fill="url(#brasa-halo)"/>
    <circle cx="${ex}" cy="${ey}" r="${emberR}" fill="${RED}"/>
  `;
}

function wispsFilled(smokeColor, scale = 1, offset = [0, 0]) {
  return WISPS.map(w =>
    `<path d="${ribbonPath(w, 80, scale, offset)}" fill="${smokeColor}"/>`
  ).join('\n    ');
}

// ─────────────────────────────────────────────────────────────────────────
// Variant: full mark (4:5 ratio, same as motion canvas)
// viewBox 600×750 = logical motion coords (no scale needed).
// ─────────────────────────────────────────────────────────────────────────
function svgMark({ bg, smokeColor, transparent = false }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGICAL_W} ${LOGICAL_H}" width="${LOGICAL_W}" height="${LOGICAL_H}">
  ${emberAndHalo()}
  ${transparent ? '' : `<rect width="${LOGICAL_W}" height="${LOGICAL_H}" fill="${bg}"/>`}
  ${transparent ? '' : `<!-- bg drawn after defs but before content via the rect above is wrong — re-emit halo on top of bg -->`}
  ${transparent ? wispsFilled(smokeColor) : `
  <rect width="${LOGICAL_W}" height="${LOGICAL_H}" fill="${bg}"/>
  <circle cx="${CX}" cy="${EY}" r="${14 * 3.2}" fill="url(#brasa-halo)"/>
  ${wispsFilled(smokeColor)}
  <circle cx="${CX}" cy="${EY}" r="14" fill="${RED}"/>
  `}
</svg>
`;
}

// Cleaner builder — draws in correct z-order: bg, halo, wisps, ember.
function svgMarkClean({ bg, smokeColor, transparent = false }) {
  const ex = CX, ey = EY, emberR = 14;
  const haloR = emberR * 3.2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGICAL_W} ${LOGICAL_H}" width="${LOGICAL_W}" height="${LOGICAL_H}">
  <defs>
    <radialGradient id="brasa-halo" cx="${ex}" cy="${ey}" r="${haloR}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.42"/>
      <stop offset="45%" stop-color="${RED}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  ${transparent ? '' : `<rect width="${LOGICAL_W}" height="${LOGICAL_H}" fill="${bg}"/>`}
  <circle cx="${ex}" cy="${ey}" r="${haloR}" fill="url(#brasa-halo)"/>
  ${wispsFilled(smokeColor)}
  <circle cx="${ex}" cy="${ey}" r="${emberR}" fill="${RED}"/>
</svg>
`;
}

// ─────────────────────────────────────────────────────────────────────────
// Variant: lockup (mark above Alright wordmark).
// viewBox 600×980 — adds 230 logical units below for wordmark.
// ─────────────────────────────────────────────────────────────────────────
function svgLockup({ bg, smokeColor, textColor, transparent = false }) {
  const ex = CX, ey = EY, emberR = 14;
  const haloR = emberR * 3.2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${LOGICAL_W} 980" width="${LOGICAL_W}" height="980">
  <defs>
    <radialGradient id="brasa-halo" cx="${ex}" cy="${ey}" r="${haloR}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.42"/>
      <stop offset="45%" stop-color="${RED}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
    <style><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&display=swap');
      .wm { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; }
    ]]></style>
  </defs>
  ${transparent ? '' : `<rect width="${LOGICAL_W}" height="980" fill="${bg}"/>`}
  <circle cx="${ex}" cy="${ey}" r="${haloR}" fill="url(#brasa-halo)"/>
  ${wispsFilled(smokeColor)}
  <circle cx="${ex}" cy="${ey}" r="${emberR}" fill="${RED}"/>
  <!-- Alright wordmark · mono fallback (l Bold sem accent, igual o reveal moment do motion) -->
  <text class="wm" x="${CX}" y="900" text-anchor="middle" font-size="130" font-weight="400" letter-spacing="-0.01em" fill="${textColor}">A<tspan font-weight="700">l</tspan>right</text>
</svg>
`;
}

// ─────────────────────────────────────────────────────────────────────────
// Variant: favicon (square 1:1, simplified for small sizes)
// Strategy: same Brasa composition but in square viewBox. Ember sits at 70%
// from top of square. Wisps are widened proportionally (×1.5) to survive
// rasterization at 16/32px. Halo tighter.
// ─────────────────────────────────────────────────────────────────────────
function svgFavicon({ bg = DARK }) {
  // Use viewBox 600×600 (square) but keep most of motion geometry. Crop the
  // top of the canvas by drawing in -75 → 600 y-space; the longest wisp tip
  // reaches y≈180 which is well inside the 600 viewBox.
  const SIZE = 600;
  const ex = CX;
  const ey = SIZE * 0.78;  // 468 — ember at ~78% from top
  // Re-center geometry: original ey=540, new ey=468, so shift y by -72
  const dy = ey - EY;  // -72

  // Favicon uses motion canon thickness verbatim (no scaling) — owner
  // wants the favicon wisps to read at the same espessura as the references
  // / motion's final frame. At 16/32px favicon size the wisps necessarily
  // get sub-pixel (anti-alias hint only); from 64px upwards they read clean.
  const faviconWisps = CANON_WISPS.map(w => ({
    ...w,
    p0: [w.p0[0], w.p0[1] + dy],
    p1: [w.p1[0], w.p1[1] + dy],
    p2: [w.p2[0], w.p2[1] + dy],
    p3: [w.p3[0], w.p3[1] + dy],
  }));

  const emberR = 18;
  const haloR = emberR * 3.0;

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <defs>
    <radialGradient id="brasa-halo-fav" cx="${ex}" cy="${ey}" r="${haloR}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="${RED}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${SIZE}" height="${SIZE}" fill="${bg}"/>
  <circle cx="${ex}" cy="${ey}" r="${haloR}" fill="url(#brasa-halo-fav)"/>
  ${faviconWisps.map(w => `<path d="${ribbonPath(w, 80)}" fill="${BONE}"/>`).join('\n  ')}
  <circle cx="${ex}" cy="${ey}" r="${emberR}" fill="${RED}"/>
</svg>
`;
}

// ─────────────────────────────────────────────────────────────────────────
// Variants list
// ─────────────────────────────────────────────────────────────────────────

const VARIANTS = [
  {
    name: 'brasa-mark-transparent',
    svg: svgMarkClean({ smokeColor: BONE, transparent: true }),
    pngBg: 'transparent',
    sizes: [480, 960, 1440],
  },
  {
    name: 'brasa-mark-on-bone',
    svg: svgMarkClean({ bg: BONE, smokeColor: DARK }),
    sizes: [480, 960, 1440],
  },
  {
    name: 'brasa-mark-on-dark',
    svg: svgMarkClean({ bg: DARK, smokeColor: BONE }),
    sizes: [480, 960, 1440],
  },
  {
    name: 'brasa-lockup-on-bone',
    svg: svgLockup({ bg: BONE, smokeColor: DARK, textColor: DARK }),
    sizes: [480, 960, 1440],
  },
  {
    name: 'brasa-lockup-on-dark',
    svg: svgLockup({ bg: DARK, smokeColor: BONE, textColor: BONE }),
    sizes: [480, 960, 1440],
  },
  {
    name: 'brasa-favicon',
    svg: svgFavicon({ bg: DARK }),
    sizes: [], // favicons handled by generate-meta-assets.mjs
  },
  // Square transparent variant — for embedding on dark backgrounds where the
  // outer container already provides bg (IG avatars, lockups, etc).
  // Same geometry as brasa-favicon but no <rect> bg. Uses mark thickness
  // (×1.4) since it'll be rendered at large sizes (e.g. 1080×1080).
  {
    name: 'brasa-square-transparent',
    svg: (() => {
      const SIZE = 600;
      const ex = CX;
      const ey = SIZE * 0.78;
      const dy = ey - EY;
      // Use MARK-thickness wisps (×1.4 from WISPS const at top of file)
      const squareWisps = WISPS.map(w => ({
        ...w,
        p0: [w.p0[0], w.p0[1] + dy],
        p1: [w.p1[0], w.p1[1] + dy],
        p2: [w.p2[0], w.p2[1] + dy],
        p3: [w.p3[0], w.p3[1] + dy],
      }));
      const emberR = 18;
      const haloR = emberR * 3.0;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${SIZE} ${SIZE}" width="${SIZE}" height="${SIZE}">
  <defs>
    <radialGradient id="brasa-halo-sq" cx="${ex}" cy="${ey}" r="${haloR}" gradientUnits="userSpaceOnUse">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.55"/>
      <stop offset="45%" stop-color="${RED}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="${ex}" cy="${ey}" r="${haloR}" fill="url(#brasa-halo-sq)"/>
  ${squareWisps.map(w => `<path d="${ribbonPath(w, 80)}" fill="${BONE}"/>`).join('\n  ')}
  <circle cx="${ex}" cy="${ey}" r="${emberR}" fill="${RED}"/>
</svg>
`;
    })(),
    pngBg: 'transparent',
    sizes: [600, 1080],
  },
];

// Write SVGs
for (const v of VARIANTS) {
  const out = path.join(OUT_SVG, `${v.name}.svg`);
  await fs.writeFile(out, v.svg);
  console.log(`✓ svg/${v.name}.svg`);
}

// Rasterize via Playwright
const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
const page = await ctx.newPage();

for (const v of VARIANTS) {
  if (!v.sizes || v.sizes.length === 0) continue;
  for (const w of v.sizes) {
    const isLockup = v.name.includes('lockup');
    const isSquare = v.name.includes('square') || v.name.includes('favicon');
    const aspect = isSquare ? 1 : (isLockup ? 980 / LOGICAL_W : LOGICAL_H / LOGICAL_W);
    const h = Math.round(w * aspect);
    const bg = v.pngBg === 'transparent' ? 'transparent'
      : (v.name.includes('on-dark') ? DARK : BONE);

    const html = `<!doctype html><html><head><style>
      * { margin: 0; padding: 0; }
      html, body { background: ${bg}; width: ${w}px; height: ${h}px; }
      svg { width: 100%; height: 100%; display: block; }
    </style></head><body>${v.svg}</body></html>`;

    await page.setViewportSize({ width: w, height: h });
    await page.setContent(html, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const buf = await page.screenshot({
      type: 'png',
      omitBackground: v.pngBg === 'transparent',
      clip: { x: 0, y: 0, width: w, height: h },
    });
    // Tag: 480 → @1x, 960 → @2x, 1440 → @3x; square variants use raw size
    const tag = (v.sizes.includes(600) || v.sizes.includes(1080))
      ? `-${w}`
      : (w === 480 ? '@1x' : w === 960 ? '@2x' : '@3x');
    const out = path.join(OUT_PNG, `${v.name}${tag}.png`);
    await fs.writeFile(out, buf);
    console.log(`✓ png/${v.name}${tag}.png (${w}×${h})`);
  }
}

await browser.close();
console.log('\nDone. Geometria copiada do motion canon (Brasa V01).');
