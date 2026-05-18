#!/usr/bin/env node
// Generate Instagram kit PSDs from the live editor HTML.
//
// Each PSD bundles:
//   - "Background"  : raster of the piece with editable text HIDDEN — preserves
//                     bg color, wordmark, meta, brand-canon decorations
//                     (brackets, accent bars, the orange dot in manifesto, etc.)
//   - N text layers : one per element listed in EDITABLE_SELECTORS in the
//                     editor — real vector text (double-click to edit in PS).
//                     Inline colored spans within an editable element are
//                     flattened to the element's dominant color.
//
// For avatar pieces (no text), falls back to 2-layer Background+Content raster.
// feed-01-case.psd is hand-crafted (text layers built by a different process)
// and skipped here so we don't overwrite it.
//
// Usage:
//   node tools/generate-instagram-psd.mjs           # regenerate all 10
//   node tools/generate-instagram-psd.mjs --only=feed-bigidea

import { chromium } from 'playwright';
import { writePsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image, ImageData, loadImage } from 'canvas';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

initializeCanvas(
  createCanvas,
  (w, h) => new ImageData(new Uint8ClampedArray(w * h * 4), w, h)
);

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const SRC_HTML = resolve(REPO_ROOT, 'instagram-kit/index.html');
const OUT_DIR = resolve(REPO_ROOT, 'assets/social/instagram/psd');

const BONE = '#faf9f5';
const DARK = '#141413';

// Photoshop matches text layer fonts by PostScript name in the layer's
// FontSet, NOT by the CSS family name. Map CSS family + computed weight to
// the PostScript IDs that Google Fonts ships for Bricolage Grotesque and
// JetBrains Mono. Falls back to "Family-Regular" for unknown weights and to
// the raw family for unknown families.
const POSTSCRIPT_WEIGHT_SUFFIX = {
  100: 'Thin',
  200: 'ExtraLight',
  300: 'Light',
  400: 'Regular',
  500: 'Medium',
  600: 'SemiBold',
  700: 'Bold',
  800: 'ExtraBold',
  900: 'Black',
};
const KNOWN_FONT_BASES = {
  'Bricolage Grotesque': 'BricolageGrotesque',
  'JetBrains Mono':      'JetBrainsMono',
};
function fontPostScriptName(cssFamily, cssWeight) {
  const base = KNOWN_FONT_BASES[cssFamily];
  if (!base) return cssFamily;  // unknown family — ship as-is
  const w = Math.round(cssWeight / 100) * 100;
  const suffix = POSTSCRIPT_WEIGHT_SUFFIX[w] || 'Regular';
  return `${base}-${suffix}`;
}

// Per-piece spec: size + bg recipe + editable text layer selectors.
//
// User rule: the Alright wordmark in the footer never changes — every OTHER
// text element is editable. We translate that to:
//   - Background layer = bg color + .wm (wordmark) + decorative SVG (accent
//     bars, brand-canon brackets that aren't editable text on their own).
//   - One vector text layer per .selector listed below — these are everything
//     user-facing text except the wordmark.
//
// `layers: null` → fall back to 2-layer (Background + Content) raster, used
// for avatars (pure symbol/wordmark, no text to expose).
const PIECES = [
  { id: 'avatar-a',  file: 'avatar-a-symbol',   size: [1080, 1080], bg: DARK, layers: null },
  { id: 'avatar-b',  file: 'avatar-b-favicon',  size: [1080, 1080], bg: DARK, layers: null },
  { id: 'avatar-c',  file: 'avatar-c-wordmark', size: [1080, 1080], bg: DARK, layers: null },
  { id: 'feed-case', file: 'feed-01-case', size: [1080, 1350], bg: BONE, layers: [
    { sel: '.eyebrow',     name: 'Eyebrow' },
    { sel: '.index',       name: 'Index' },
    { sel: '.title',       name: 'Title' },
    { sel: '.bottom .meta', name: 'Meta' },
  ]},
  { id: 'feed-manifesto', file: 'feed-02-manifesto', size: [1080, 1350], bg: DARK, layers: [
    { sel: '.top .kicker:nth-of-type(1)', name: 'Kicker · Manifesto' },
    { sel: '.top .kicker:nth-of-type(2)', name: 'Kicker · Brackets' },
    { sel: '.quote',                      name: 'Quote' },
    { sel: '.tag',                        name: 'Tag' },
  ]},
  { id: 'feed-bigidea', file: 'feed-03-bigidea', size: [1080, 1350], bg: BONE, layers: [
    { sel: '.top .kicker:nth-of-type(1)', name: 'Kicker · Big idea' },
    { sel: '.top .kicker:nth-of-type(2)', name: 'Kicker · EP' },
    { sel: '.phrase',                     name: 'Phrase · ((Look again.))' },
    { sel: '.tag',                        name: 'Tag' },
  ]},
  { id: 'feed-making', file: 'feed-04-making-of', size: [1080, 1350], bg: BONE, layers: [
    { sel: '.eyebrow',   name: 'Eyebrow' },
    { sel: '.ref',       name: 'Ref' },
    { sel: '.frame-tag', name: 'Frame tag' },
    { sel: '.title',     name: 'Title' },
    { sel: '.meta',      name: 'Meta' },
  ]},
  { id: 'feed-quote', file: 'feed-05-quote', size: [1080, 1350], bg: BONE, layers: [
    { sel: '.top .kicker:nth-of-type(1)', name: 'Kicker · Pensamento' },
    { sel: '.top .kicker:nth-of-type(2)', name: 'Kicker · Brackets' },
    { sel: '.body',                        name: 'Body' },
    { sel: '.attrib',                      name: 'Attrib' },
    { sel: '.meta',                        name: 'Meta' },
  ]},
  { id: 'feed-split', file: 'feed-06-split', size: [1080, 1350], bg: 'split-62-bone-dark', layers: [
    { sel: '.pane-top .eyebrow',     name: 'Eyebrow' },
    { sel: '.pane-top .headline',    name: 'Headline' },
    { sel: '.pane-bottom .lead',     name: 'Lead' },
    { sel: '.pane-bottom .meta',     name: 'Meta' },
  ]},
  { id: 'vert-reels', file: 'vertical-07-reels-cover', size: [1080, 1920], bg: BONE, layers: [
    { sel: '.eyebrow', name: 'Eyebrow' },
    { sel: '.ref',     name: 'Ref' },
    { sel: '.title',   name: 'Title' },
  ]},
  { id: 'vert-stories', file: 'vertical-08-stories', size: [1080, 1920], bg: DARK, layers: [
    { sel: '.index',     name: 'Index · Date' },
    { sel: '.headline',  name: 'Headline' },
    { sel: '.lead',      name: 'Lead' },
    { sel: '.cta .label', name: 'CTA · Label' },
  ]},
];

function parseArgs() {
  const args = process.argv.slice(2);
  const only = args.find(a => a.startsWith('--only='));
  if (!only) return PIECES;
  const ids = only.slice('--only='.length).split(',').map(s => s.trim()).filter(Boolean);
  return PIECES.filter(p => ids.includes(p.id) || ids.includes(p.file));
}

// ────────────────────────────────────────────────────────────────────────
// Browser-side: detach frame into a clean holder + optionally hide selectors
// ────────────────────────────────────────────────────────────────────────

async function setupFrame(page, piece, { hideEditable = false, bgTransparent = false } = {}) {
  await page.evaluate(({ id, hideEditable, bgTransparent, layers }) => {
    const frame = document.getElementById(id);
    if (!frame) throw new Error('Frame not found: ' + id);

    // Stash original parent + position
    window.__psdRestore = window.__psdRestore || [];
    window.__psdRestore.push({
      el: frame,
      parent: frame.parentNode,
      next: frame.nextSibling,
      style: frame.getAttribute('style') || '',
    });

    // Hide siblings to keep clip region clean
    window.__psdHiddenSiblings = [];
    for (const child of Array.from(document.body.children)) {
      if (child.id === '__psdHolder') continue;
      window.__psdHiddenSiblings.push({ el: child, display: child.style.display });
      child.style.display = 'none';
    }

    // Holder pinned at viewport origin
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
    if (bgTransparent) {
      frame.style.background = 'transparent';
      frame.querySelectorAll('.pane-top, .pane-bottom').forEach(el => {
        el.style.background = 'transparent';
      });
    }

    document.body.style.background = 'transparent';
    document.documentElement.style.background = 'transparent';

    // Optionally hide all editable text elements so we capture the
    // "background" — wordmark, meta, brand-canon decorations only.
    window.__psdHiddenEditable = [];
    if (hideEditable && layers) {
      for (const layer of layers) {
        for (const el of frame.querySelectorAll(layer.sel)) {
          window.__psdHiddenEditable.push({ el, visibility: el.style.visibility });
          el.style.visibility = 'hidden';
        }
      }
    }
  }, { id: piece.id, hideEditable, bgTransparent, layers: piece.layers });

  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r))));
}

async function restoreFrame(page) {
  await page.evaluate(() => {
    // Restore editable visibility
    for (const r of window.__psdHiddenEditable || []) {
      r.el.style.visibility = r.visibility;
    }
    window.__psdHiddenEditable = [];

    // Restore frame DOM position
    const stack = window.__psdRestore;
    while (stack.length) {
      const e = stack.pop();
      if (e.next) e.parent.insertBefore(e.el, e.next);
      else e.parent.appendChild(e.el);
      if (e.style) e.el.setAttribute('style', e.style);
      else e.el.removeAttribute('style');
    }

    // Restore siblings
    for (const s of window.__psdHiddenSiblings || []) {
      s.el.style.display = s.display;
    }
    window.__psdHiddenSiblings = [];
  });
}

async function shoot(page, w, h, { omitBackground = false } = {}) {
  return await page.screenshot({
    clip: { x: 0, y: 0, width: w, height: h },
    omitBackground,
    type: 'png',
  });
}

// ────────────────────────────────────────────────────────────────────────
// Text layer extraction
// ────────────────────────────────────────────────────────────────────────

async function extractTextLayers(page, piece) {
  return await page.evaluate(({ id, layers }) => {
    const frame = document.getElementById(id);
    const fr = frame.getBoundingClientRect();

    function gatherText(el) {
      let out = '';
      (function walk(n) {
        if (n.nodeType === 3) out += n.textContent;
        else if (n.nodeType === 1) {
          const tag = n.tagName;
          if (tag === 'BR') out += '\n';
          else for (const c of n.childNodes) walk(c);
        }
      })(el);
      return out;
    }

    function parseColor(rgb) {
      const m = rgb.match(/rgba?\(([^)]+)\)/);
      if (!m) return { r: 0, g: 0, b: 0 };
      const [r, g, b] = m[1].split(',').map(s => parseFloat(s.trim()));
      return { r, g, b };
    }

    const results = [];
    for (const layer of layers) {
      const el = frame.querySelector(layer.sel);
      if (!el) {
        console.warn('Layer selector not found:', layer.sel);
        continue;
      }
      const cs = getComputedStyle(el);
      const er = el.getBoundingClientRect();

      let text = gatherText(el).replace(/\s+\n/g, '\n').replace(/\n\s+/g, '\n').trim();
      // CSS text-transform → bake into the layer text so PS shows it as-is
      if (cs.textTransform === 'uppercase') text = text.toUpperCase();
      else if (cs.textTransform === 'lowercase') text = text.toLowerCase();
      else if (cs.textTransform === 'capitalize') {
        text = text.replace(/\b\w/g, c => c.toUpperCase());
      }

      const fontFamily = cs.fontFamily.replace(/["']/g, '').split(',')[0].trim();
      const fontSize = parseFloat(cs.fontSize);
      const lhStr = cs.lineHeight;
      const lineHeight = lhStr === 'normal' ? fontSize * 1.2 : parseFloat(lhStr);
      const fontWeight = parseInt(cs.fontWeight, 10);
      const lsStr = cs.letterSpacing;
      const letterSpacingPx = lsStr === 'normal' ? 0 : parseFloat(lsStr);
      const tracking = Math.round(letterSpacingPx / fontSize * 1000);
      const color = parseColor(cs.color);

      const x = er.left - fr.left;
      const yTop = er.top - fr.top;
      // PS transform[5] = baseline of first line. Bricolage Grotesque + JetBrains Mono
      // both align with ascent ≈ 0.82 × fontSize. Add half of the line-box leading
      // for the gap above the first cap.
      const leadingGap = Math.max(0, (lineHeight - fontSize) / 2);
      const baselineY = yTop + leadingGap + fontSize * 0.82;

      results.push({
        name: layer.name,
        text,
        fontFamily,
        fontSize,
        lineHeight,
        fontWeight,
        tracking,
        color,
        x,
        yTop,
        baselineY,
        textAlign: cs.textAlign,
      });
    }
    return results;
  }, { id: piece.id, layers: piece.layers });
}

// ────────────────────────────────────────────────────────────────────────
// Background builders
// ────────────────────────────────────────────────────────────────────────

function buildSolidBackground(piece) {
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

// ────────────────────────────────────────────────────────────────────────
// PSD assemblers
// ────────────────────────────────────────────────────────────────────────

async function buildAvatarPsd(page, piece) {
  // Avatars have no editable text — fall back to 2-layer Background + Content
  const [w, h] = piece.size;

  await setupFrame(page, piece, { bgTransparent: true });
  const contentPng = await shoot(page, w, h, { omitBackground: true });
  await restoreFrame(page);

  const contentImg = await loadImage(contentPng);
  const contentCv = createCanvas(w, h);
  contentCv.getContext('2d').drawImage(contentImg, 0, 0, w, h);

  const bgCv = buildSolidBackground(piece);

  const flatCv = createCanvas(w, h);
  const fctx = flatCv.getContext('2d');
  fctx.drawImage(bgCv, 0, 0);
  fctx.drawImage(contentCv, 0, 0);

  return {
    width: w, height: h,
    canvas: flatCv,
    children: [
      { name: 'Background', canvas: bgCv,      left: 0, top: 0, right: w, bottom: h },
      { name: 'Content',    canvas: contentCv, left: 0, top: 0, right: w, bottom: h },
    ],
  };
}

async function buildLayeredPsd(page, piece) {
  const [w, h] = piece.size;

  // Capture flat composite (everything visible) for psd.canvas — the preview
  // shown by tools that don't compose layers.
  await setupFrame(page, piece);
  const flatPng = await shoot(page, w, h);
  await restoreFrame(page);

  // Capture background with editable text hidden — wordmark, meta, brackets,
  // accent bars, manifesto's orange dot, etc. survive here.
  await setupFrame(page, piece, { hideEditable: true });
  const bgPng = await shoot(page, w, h);
  // Text layers extracted from the same DOM state — but with editable elements
  // still in layout (we didn't display:none, we set visibility:hidden), so
  // getBoundingClientRect returns the real position.
  await page.evaluate(() => {
    for (const r of window.__psdHiddenEditable || []) {
      r.el.style.visibility = r.visibility;
    }
    window.__psdHiddenEditable = [];
  });
  const textLayers = await extractTextLayers(page, piece);
  await restoreFrame(page);

  const flatImg = await loadImage(flatPng);
  const flatCv = createCanvas(w, h);
  flatCv.getContext('2d').drawImage(flatImg, 0, 0, w, h);

  const bgImg = await loadImage(bgPng);
  const bgCv = createCanvas(w, h);
  bgCv.getContext('2d').drawImage(bgImg, 0, 0, w, h);

  // Build text layer children
  const textChildren = textLayers.map(t => ({
    name: t.name,
    text: {
      text: t.text.replace(/\n/g, '\r'),
      orientation: 'horizontal',
      transform: [1, 0, 0, 1, t.x, t.baselineY],
      shapeType: 'point',
      antiAlias: 'smooth',
      style: {
        font: { name: fontPostScriptName(t.fontFamily, t.fontWeight) },
        fontSize: t.fontSize,
        fillColor: t.color,
        fillFlag: true,
        tracking: t.tracking,
        autoLeading: false,
        leading: t.lineHeight,
        autoKerning: true,
        // Skip fauxBold — the weight is already encoded in the PostScript name
        // (e.g. BricolageGrotesque-Bold), so PS picks the real weighted glyph.
      },
      paragraphStyle: {
        justification: ({
          left: 'left', start: 'left',
          right: 'right', end: 'right',
          center: 'center',
          justify: 'justifyAll',
        })[t.textAlign] || 'left',
      },
    },
    // Approximate layer bounds — point text is unbounded in PS but bounds help
    // some viewers position the layer marker. Width estimate is generous.
    left: Math.max(0, Math.round(t.x)),
    top: Math.max(0, Math.round(t.yTop)),
    right: w,
    bottom: Math.min(h, Math.round(t.yTop + t.lineHeight * Math.max(1, t.text.split('\n').length))),
  }));

  return {
    width: w, height: h,
    canvas: flatCv,
    children: [
      { name: 'Background', canvas: bgCv, left: 0, top: 0, right: w, bottom: h },
      ...textChildren,
    ],
  };
}

// ────────────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────────────

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
    const psd = piece.layers === null
      ? await buildAvatarPsd(page, piece)
      : await buildLayeredPsd(page, piece);

    const out = resolve(OUT_DIR, `${piece.file}.psd`);
    const buf = writePsd(psd, { invalidateTextLayers: true });
    writeFileSync(out, Buffer.from(buf));
    const layerCount = (psd.children || []).length;
    console.log(`  ✓ ${piece.file}.psd  (${piece.size[0]}×${piece.size[1]}, ${layerCount} layers, ${Math.round(buf.byteLength / 1024)} KB)`);
  }

  await browser.close();
  console.log('done.');
}

main().catch(err => { console.error(err); process.exit(1); });
