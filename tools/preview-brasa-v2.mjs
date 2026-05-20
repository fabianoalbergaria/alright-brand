#!/usr/bin/env node
// Preview: render brasa-mark (new geometry, matching motion canon) +
// brasa-favicon at 16/32/64/256/512 sizes — for owner approval.
import { chromium } from 'playwright';
import { writeFileSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const out = '/tmp/brasa-v2-preview.png';

const markSvg = readFileSync(resolve(ROOT, 'assets/logo/svg/brasa-mark-on-dark.svg'), 'utf8');
const lockupSvg = readFileSync(resolve(ROOT, 'assets/logo/svg/brasa-lockup-on-dark.svg'), 'utf8');
const faviconSvg = readFileSync(resolve(ROOT, 'assets/logo/svg/brasa-favicon.svg'), 'utf8');

function faviconAt(size) {
  return `<div style="display:flex;flex-direction:column;align-items:center;gap:8px">
    <div style="width:${size}px;height:${size}px;line-height:0">${faviconSvg.replace(/width="[^"]+"/, `width="${size}"`).replace(/height="[^"]+"/, `height="${size}"`)}</div>
    <span style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#5b5750;letter-spacing:0.1em">${size}px</span>
  </div>`;
}

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  *{margin:0;padding:0;box-sizing:border-box}
  body{width:1400px;padding:48px;background:#f3f1eb;font-family:'Bricolage Grotesque',sans-serif;color:#141413}
  h1{font-size:32px;font-weight:400;letter-spacing:-0.02em;margin-bottom:6px}
  .sub{font-family:'JetBrains Mono',monospace;font-size:11px;color:#5b5750;letter-spacing:0.06em;margin-bottom:32px}
  section{margin-bottom:48px}
  .row{display:grid;grid-template-columns:1fr 1fr;gap:32px;margin-top:16px}
  .card{background:#fff;padding:0;border-radius:6px;overflow:hidden}
  .card h3{font-size:13px;font-weight:500;padding:14px 18px;background:#f0eee6;font-family:'JetBrains Mono',monospace;letter-spacing:0.14em;text-transform:uppercase;color:#5b5750}
  .card .vis{padding:0}
  .vis svg{display:block;width:100%;height:auto}

  .fav-row{display:flex;gap:36px;align-items:flex-end;padding:32px;background:#fff;border-radius:6px;margin-top:16px}
</style></head>
<body>
  <section>
    <h1>brasa-mark · geometria do motion canon</h1>
    <div class="sub">3 wisps em cubic Bezier (do brasa-motion-reveal.html linhas 198–226) · base 8.5/7/5.5 → tip 0.8 · ember Kodak Red embaixo · halo tight</div>
    <div class="row">
      <div class="card">
        <h3>brasa-mark-on-dark · 480px</h3>
        <div class="vis" style="width:480px;height:600px">${markSvg}</div>
      </div>
      <div class="card">
        <h3>brasa-lockup-on-dark · 480px</h3>
        <div class="vis" style="width:480px;height:784px">${lockupSvg}</div>
      </div>
    </div>
  </section>

  <section>
    <h1>brasa-favicon · viewBox 600×600 quadrado</h1>
    <div class="sub">mesma geometria mas em quadrado (ember 78% from top) + wisps com largura ×1.6 pra sobreviver rasterização em 16/32px</div>
    <div class="fav-row">
      ${faviconAt(16)}
      ${faviconAt(32)}
      ${faviconAt(48)}
      ${faviconAt(64)}
      ${faviconAt(128)}
      ${faviconAt(256)}
    </div>
  </section>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1800 } });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ type: 'png', fullPage: true });
writeFileSync(out, buf);
await browser.close();
console.log(`✓ ${out} (${Math.round(buf.byteLength/1024)} KB)`);
