#!/usr/bin/env node
// Quick preview composition: brasa-mark symbol vs old wrong favicon
// vs proposed new favicon (with smoke wisps).

import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';

const out = '/tmp/brasa-favicon-preview.png';

const DARK = '#141413';
const BONE = '#faf9f5';
const RED  = '#ed1c24';

// New favicon design — adapts the brasa-mark to a square 64×64 viewBox
// with shorter wisps that survive rasterization at 16/32px.
function newFavicon(size) {
  const cx = size / 2;
  const cy = size * 0.6;            // ember slightly below center
  const haloR = size * 0.42;
  const emberR = Math.max(2, size * 0.075);
  const wispStroke = Math.max(0.9, size / 36);
  const opacity = 0.78;

  // Wisps — 3 paths starting at ember level, rising to top edge
  const wispY0 = cy - emberR - 1;
  const wispYTop = size * 0.10;

  const wisp = (x0, dx) => {
    const x1 = x0 + dx;
    const yMid = (wispY0 + wispYTop) / 2;
    return `M ${x0} ${wispY0} C ${x0 - dx * 0.4} ${yMid + 6}, ${x1 + dx * 0.4} ${yMid - 4}, ${x1} ${wispYTop}`;
  };

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <radialGradient id="halo" cx="50%" cy="${(cy / size * 100).toFixed(1)}%" r="${(haloR / size * 100).toFixed(1)}%">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.62"/>
      <stop offset="50%" stop-color="${RED}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="${DARK}"/>
  <ellipse cx="${cx}" cy="${cy}" rx="${haloR * 1.05}" ry="${haloR}" fill="url(#halo)"/>
  <g stroke="${BONE}" stroke-width="${wispStroke}" fill="none" stroke-linecap="round" stroke-opacity="${opacity}">
    <path d="${wisp(cx, 0)}"/>
    <path d="${wisp(cx - emberR * 0.9, -emberR * 0.4)}"/>
    <path d="${wisp(cx + emberR * 0.9, emberR * 0.4)}"/>
  </g>
  <circle cx="${cx}" cy="${cy}" r="${emberR}" fill="${RED}"/>
</svg>`;
}

// Composition: 4 columns
//   1) Old wrong favicon (just ember + halo, NO wisps) — current live
//   2) New proposed favicon @ 16px size
//   3) New proposed favicon @ 32px size
//   4) New proposed favicon @ 512px size (large preview)

function oldFavicon(size) {
  const cx = size / 2;
  const cy = size / 2;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <radialGradient id="halo-old" cx="50%" cy="50%" r="45%">
      <stop offset="0%"  stop-color="${RED}" stop-opacity="0.70"/>
      <stop offset="50%" stop-color="${RED}" stop-opacity="0.20"/>
      <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="${DARK}"/>
  <circle cx="${cx}" cy="${cy}" r="${size * 0.34}" fill="url(#halo-old)"/>
  <circle cx="${cx}" cy="${cy}" r="${size * 0.078}" fill="${RED}"/>
</svg>`;
}

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1400px;padding:64px;background:#f3f1eb;font-family:'Bricolage Grotesque',sans-serif;color:#141413}
  h1{font-size:36px;font-weight:400;letter-spacing:-0.02em;margin-bottom:6px}
  .sub{font-family:'JetBrains Mono',monospace;font-size:12px;color:#5b5750;letter-spacing:0.06em;margin-bottom:40px}

  .grid{display:grid;grid-template-columns:repeat(2,1fr);gap:40px;margin-bottom:40px}
  .card{background:#fff;padding:32px;border-radius:8px;display:flex;flex-direction:column;align-items:center;text-align:center}
  .card.wrong{background:#fff5f3;border:1px solid #ed1c2433}
  .card.right{background:#f0f8f0;border:1px solid #1c8c4533}
  .card h2{font-size:18px;font-weight:500;margin-bottom:6px}
  .card .label{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.14em;text-transform:uppercase;color:#5b5750;margin-bottom:24px}
  .card.wrong .label{color:#a02020}
  .card.right .label{color:#1c8c45}
  .row{display:flex;gap:24px;align-items:flex-end;margin-bottom:18px}
  .row .col{display:flex;flex-direction:column;align-items:center;gap:8px}
  .row .col span{font-family:'JetBrains Mono',monospace;font-size:10px;color:#5b5750;letter-spacing:0.1em}
  .row .col .swatch{box-shadow:0 8px 24px rgba(0,0,0,.18);display:block}

  .big{margin-top:24px}
  .big .swatch{box-shadow:0 24px 60px rgba(0,0,0,.35)}

  .note{font-size:14px;font-weight:300;color:#3d3a35;line-height:1.55;margin-top:14px;max-width:36ch}
</style></head>
<body>
  <h1>Brasa favicon · proposta nova vs atual</h1>
  <div class="sub">esquerda = o que está ao vivo agora (errado, sem wisps) · direita = proposta corrigida (ember + halo + 3 smoke wisps)</div>

  <div class="grid">
    <div class="card wrong">
      <div class="label">Atual (errado)</div>
      <h2>Só ember + halo</h2>
      <div class="row">
        <div class="col">${oldFavicon(16)}<span>16px</span></div>
        <div class="col">${oldFavicon(32)}<span>32px</span></div>
        <div class="col">${oldFavicon(64)}<span>64px</span></div>
      </div>
      <div class="big">${oldFavicon(256)}</div>
      <p class="note">Sem as listras brancas que saem do círculo radial — apenas o ember. Brand identity incompleta.</p>
    </div>

    <div class="card right">
      <div class="label">Proposta nova</div>
      <h2>Ember + halo + smoke wisps</h2>
      <div class="row">
        <div class="col">${newFavicon(16)}<span>16px</span></div>
        <div class="col">${newFavicon(32)}<span>32px</span></div>
        <div class="col">${newFavicon(64)}<span>64px</span></div>
      </div>
      <div class="big">${newFavicon(256)}</div>
      <p class="note">3 smoke wisps (Bone) saem do ember Kodak Red. Em 16px ficam fininhas (anti-aliasing) mas a forma é distintiva. Em 32px+ leem cristalinas.</p>
    </div>
  </div>

  <div style="margin-top:48px;padding-top:32px;border-top:1px solid rgba(20,20,19,0.08)">
    <h1 style="font-size:24px">Referência · símbolo Brasa "completo" no logo pack</h1>
    <div class="sub">já existe em assets/logo/svg/brasa-mark-on-dark.svg — esse é o que a proposta nova reproduz em formato quadrado pra favicon</div>
    <div style="display:flex;justify-content:center;margin-top:24px">
      <div style="width:240px;height:320px;display:flex;align-items:center;justify-content:center;background:${DARK};box-shadow:0 24px 60px rgba(0,0,0,.35)">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 320" width="240" height="320">
          <defs>
            <radialGradient id="brasa-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%"  stop-color="${RED}" stop-opacity="0.55"/>
              <stop offset="40%" stop-color="${RED}" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="${RED}" stop-opacity="0"/>
            </radialGradient>
          </defs>
          <ellipse cx="120" cy="220" rx="98" ry="84" fill="url(#brasa-halo)" />
          <g stroke="${BONE}" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-opacity="0.62">
            <path d="M 120 208 C 115 168, 128 128, 118 88 C 115 70, 122 56, 118 44"/>
            <path d="M 100 211 C 92 175, 105 140, 92 102 C 88 82, 95 64, 88 56"/>
            <path d="M 140 211 C 148 175, 135 140, 148 102 C 152 82, 145 64, 152 56"/>
          </g>
          <circle cx="120" cy="220" r="9" fill="${RED}" />
        </svg>
      </div>
    </div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1400 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: 'png', fullPage: true });
writeFileSync(out, buf);
await browser.close();
console.log(`✓ ${out} (${Math.round(buf.byteLength/1024)} KB)`);
