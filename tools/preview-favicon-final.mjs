#!/usr/bin/env node
// Preview do favicon final · embed PNGs como base64 pra screenshot funcionar.
import { writeFileSync, readFileSync } from 'node:fs';
import { chromium } from 'playwright';
import { resolve } from 'node:path';

const ROOT = '/Users/fabianoalbergaria/Desktop/alright-brand/.claude/worktrees/sleepy-tu-58502b';

function b64(file) {
  const buf = readFileSync(resolve(ROOT, 'assets/meta', file));
  return 'data:image/png;base64,' + buf.toString('base64');
}

const ICONS = {
  16: b64('icon-16.png'),
  32: b64('icon-32.png'),
  48: b64('icon-48.png'),
  64: b64('icon-64.png'),
  192: b64('icon-192.png'),
  512: b64('icon-512.png'),
};

function tile(size, src, scale = 1) {
  const displaySize = size * scale;
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:10px">
    <div style="width:${displaySize}px;height:${displaySize}px;background:#0a0a09;padding:0;line-height:0">
      <img src="${src}" width="${displaySize}" height="${displaySize}" style="image-rendering:pixelated;display:block" />
    </div>
    <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#5b5750;letter-spacing:0.1em">${size}px${scale > 1 ? ` · ${scale}× zoom` : ''}</span>
  </div>`;
}

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1100px;padding:40px;background:#f3f1eb;font-family:'Bricolage Grotesque',sans-serif;color:#141413}
  h1{font-size:30px;font-weight:400;letter-spacing:-0.02em;margin-bottom:4px}
  h2{font-size:18px;font-weight:400;letter-spacing:-0.01em;margin-bottom:8px}
  .sub{font-family:'JetBrains Mono',monospace;font-size:11px;color:#5b5750;letter-spacing:0.06em;margin-bottom:24px}
  section{background:#fff;padding:28px 32px;border-radius:8px;margin-bottom:20px}
  .row{display:flex;gap:36px;align-items:flex-end;flex-wrap:wrap}
  .legend{font-family:'JetBrains Mono',monospace;font-size:11px;letter-spacing:0.04em;color:#5b5750;line-height:1.7;margin-top:14px}
  .legend b{color:#141413;font-weight:500}
  .legend code{background:#f3f1eb;padding:2px 6px;border-radius:3px;font-size:10.5px}
</style></head>
<body>
  <h1>brasa-favicon · responsive thickness</h1>
  <div class="sub">PNG icon-16 e icon-32 com wisps ×3.5 (chunky · legível) · PNG icon-48+ com canon ×1.0 (igual motion + refs)</div>

  <section>
    <h2>Tamanho nativo (1:1)</h2>
    <div class="row">
      ${tile(16, ICONS[16])}
      ${tile(32, ICONS[32])}
      ${tile(48, ICONS[48])}
      ${tile(64, ICONS[64])}
      ${tile(192, ICONS[192])}
    </div>
  </section>

  <section>
    <h2>Zoom 8× nos pequenos (pra você ver pixel por pixel o que o browser renderiza)</h2>
    <div class="row">
      ${tile(16, ICONS[16], 8)}
      ${tile(32, ICONS[32], 6)}
    </div>
    <div class="legend">
      <b>16px @ 8×</b> → ember vermelho com halo + wisps grossas Bone (×3.5 da espessura canon).<br/>
      <b>32px @ 6×</b> → mesma composição, wisps mais finas mas ainda chunky pra leitura.
    </div>
  </section>

  <section>
    <h2>Esses são os PNGs servidos como favicon (icon-16.png e icon-32.png ao vivo)</h2>
    <div class="legend">
      No HTML: <code>&lt;link rel="icon" sizes="16x16" href="icon-16.png?v=5"&gt;</code><br/>
      Browser usa o PNG correspondente ao tamanho que precisa. SVG (canon) fica como fallback pra browsers que preferem SVG.
    </div>
  </section>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1100, height: 1200 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: 'png', fullPage: true });
writeFileSync('/tmp/favicon-final.png', buf);
await browser.close();
console.log('✓ /tmp/favicon-final.png');
