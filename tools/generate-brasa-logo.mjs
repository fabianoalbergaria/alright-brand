#!/usr/bin/env node
// Generate Brasa logo variants (SVG + PNG) — the Alright motion signature
// frozen as a static mark. Each SVG is hand-crafted (ember + radial halo +
// 3 smoke wisps + optional wordmark lockup); PNGs are rasterized via
// Playwright at @1x/@2x/@3x.

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
// SVG builders — geometry frozen at the motion's peak (ember lit + smoke
// fully drawn). ViewBox 240×320 for mark, 240×420 for lockup with wordmark.
// ─────────────────────────────────────────────────────────────────────────

// Three smoke wisp paths — gentle S-curves rising from the ember position.
// Smoke is rendered in the foreground color (Bone over Dark, Dark over Bone).
const WISPS = [
  // Center wisp — straight-ish line with slight sway
  'M 120 208 C 115 168, 128 128, 118 88 C 115 70, 122 56, 118 44',
  // Left wisp — pulls outward as it rises
  'M 100 211 C 92 175, 105 140, 92 102 C 88 82, 95 64, 88 56',
  // Right wisp — mirrors left
  'M 140 211 C 148 175, 135 140, 148 102 C 152 82, 145 64, 152 56',
];

function ember(smokeColor, opts = {}) {
  const { ox = 0, oy = 0 } = opts; // offset (for lockup positioning)
  const wispPaths = WISPS.map(d => {
    // Translate wisp coordinates by (ox, oy) so the mark can be placed in
    // a larger canvas (lockup adds vertical room for the wordmark below).
    const translated = d.replace(/([MCQT])\s+([\d.]+)\s+([\d.]+)/g, (_, cmd, x, y) =>
      `${cmd} ${parseFloat(x) + ox} ${parseFloat(y) + oy}`
    ).replace(/(\d+),\s*([\d.]+)\s+([\d.]+)/g, (m) => m); // pass-through (no extra commas)
    return translated;
  });
  return `
    <!-- Halo: the brand's single permitted gradient — radial, functional, anchored to ember -->
    <ellipse cx="${120 + ox}" cy="${220 + oy}" rx="98" ry="84" fill="url(#brasa-halo)" />

    <!-- Smoke wisps — three drawn paths in foreground color -->
    <g stroke="${smokeColor}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-opacity="0.62">
      ${wispPaths.map(d => `<path d="${d}"/>`).join('\n      ')}
    </g>

    <!-- Ember — the hot dot, always Kodak Red -->
    <circle cx="${120 + ox}" cy="${220 + oy}" r="9" fill="${RED}" />
  `;
}

function haloDef() {
  // Radial gradient — only gradient permitted in the brand system because
  // it represents the literal physical halo of the ember.
  return `
    <radialGradient id="brasa-halo" cx="50%" cy="50%" r="50%">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.55"/>
      <stop offset="40%" stop-color="${RED}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  `;
}

function svgMark({ bg, smokeColor, transparent = false }) {
  // Pure mark — ember + halo + smoke. ViewBox 240×320 (4:5).
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320" width="240" height="320">
  <defs>${haloDef()}</defs>
  ${transparent ? '' : `<rect width="240" height="320" fill="${bg}"/>`}
  ${ember(smokeColor)}
</svg>
`;
}

function svgLockup({ bg, smokeColor, textColor, transparent = false }) {
  // Lockup — brasa mark above "Alright" wordmark. Mark sits in 0–280, text
  // baseline ~370. ViewBox 240×420.
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 420" width="240" height="420">
  <defs>
    ${haloDef()}
    <style><![CDATA[
      @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&display=swap');
      .wm { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; }
    ]]></style>
  </defs>
  ${transparent ? '' : `<rect width="240" height="420" fill="${bg}"/>`}
  ${ember(smokeColor)}
  <!-- Wordmark Alright · l Bold (mono-fallback intencional — reveal moment is monochrome) -->
  <text class="wm" x="120" y="385" text-anchor="middle" font-size="56" font-weight="400" letter-spacing="-0.01em" fill="${textColor}">A<tspan font-weight="700">l</tspan>right</text>
</svg>
`;
}

function svgFavicon({ bg }) {
  // Favicon — tiny brasa, no smoke wisps (would disappear at 16px anyway).
  // Just ember + tight halo on dark. ViewBox square (1:1).
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64">
  <defs>
    <radialGradient id="brasa-halo-fav" cx="50%" cy="50%" r="45%">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.70"/>
      <stop offset="50%" stop-color="${RED}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="64" height="64" fill="${bg}"/>
  <!-- Halo -->
  <circle cx="32" cy="32" r="22" fill="url(#brasa-halo-fav)" />
  <!-- Ember — solid red dot, ~8% of canvas -->
  <circle cx="32" cy="32" r="5" fill="${RED}" />
</svg>
`;
}

// ─────────────────────────────────────────────────────────────────────────
// Variants — what gets generated
// ─────────────────────────────────────────────────────────────────────────

const VARIANTS = [
  {
    name: 'brasa-mark-transparent',
    svg: svgMark({ smokeColor: BONE, transparent: true }),
    pngBg: 'transparent',
    sizes: [240, 480, 720],
  },
  {
    name: 'brasa-mark-on-bone',
    svg: svgMark({ bg: BONE, smokeColor: DARK }),
    sizes: [240, 480, 720],
  },
  {
    name: 'brasa-mark-on-dark',
    svg: svgMark({ bg: DARK, smokeColor: BONE }),
    sizes: [240, 480, 720],
  },
  {
    name: 'brasa-lockup-on-bone',
    svg: svgLockup({ bg: BONE, smokeColor: DARK, textColor: DARK }),
    sizes: [240, 480, 720],
  },
  {
    name: 'brasa-lockup-on-dark',
    svg: svgLockup({ bg: DARK, smokeColor: BONE, textColor: BONE }),
    sizes: [240, 480, 720],
  },
  {
    name: 'brasa-favicon',
    svg: svgFavicon({ bg: DARK }),
    sizes: [], // favicon variants handled separately by generate-meta-assets
  },
];

// Write SVGs
for (const v of VARIANTS) {
  const out = path.join(OUT_SVG, `${v.name}.svg`);
  await fs.writeFile(out, v.svg);
  console.log(`✓ svg/${v.name}.svg`);
}

// Rasterize via Playwright at multiple sizes
const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
const page = await ctx.newPage();

for (const v of VARIANTS) {
  if (!v.sizes || v.sizes.length === 0) continue;
  for (const w of v.sizes) {
    // Aspect ratio depends on whether it's a lockup (240×420) or mark (240×320)
    const isLockup = v.name.includes('lockup');
    const aspect = isLockup ? 420 / 240 : 320 / 240;
    const h = Math.round(w * aspect);
    const bg = v.pngBg === 'transparent' ? 'transparent' : (v.name.includes('on-dark') ? DARK : BONE);

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
    // Tag with size — 240 → @1x, 480 → @2x, 720 → @3x
    const tag = w === 240 ? '@1x' : w === 480 ? '@2x' : '@3x';
    const out = path.join(OUT_PNG, `${v.name}${tag}.png`);
    await fs.writeFile(out, buf);
    console.log(`✓ png/${v.name}${tag}.png (${w}×${h})`);
  }
}

await browser.close();
console.log('\nDone.');
console.log(`  ${VARIANTS.length} SVGs → assets/logo/svg/`);
console.log(`  ${VARIANTS.filter(v => v.sizes?.length).length * 3} PNGs → assets/logo/png/`);
