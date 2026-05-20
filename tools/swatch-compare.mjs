#!/usr/bin/env node
// Render a side-by-side swatch comparison PNG for color selection.
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve(process.argv[2] || '/tmp/swatch-compare.png');

const SWATCHES = [
  { hex: '#d97757', name: 'Orange Clay atual',      sub: 'PMS 7578 C · ref · NÃO mexer aqui' },
  { hex: '#c0afad', name: 'Suvinil Tempestade',     sub: 'D177 · Cor do Ano 2026 · rosa acinzentado' },
  { hex: '#ed1c24', name: 'Kodak Red clássico',     sub: 'Pantone 185 C · vermelho puro de máscara' },
  { hex: '#e8472a', name: 'Vermilion warm',          sub: 'mais alaranjado · entre Kodak Red e Orange Clay' },
  { hex: '#f04923', name: 'Hot vermilion',           sub: 'Pantone 172 C ish · vermelho-laranja forte' },
  { hex: '#dc4d24', name: 'Persimmon',               sub: 'mais sóbrio · ainda Kodak-vibe mas menos saturado' },
  { hex: '#e63946', name: 'Imperial red',            sub: 'Pantone 1797 C · vermelho clássico (referência)' },
];

function html() {
  const blocks = SWATCHES.map(s => `
    <div class="row">
      <div class="block" style="background:${s.hex}">
        <span class="onColor">${s.name}</span>
      </div>
      <div class="block bone" style="color:${s.hex}">
        <span class="onBone">${s.name}</span>
      </div>
      <div class="block dark" style="color:${s.hex}">
        <span class="onDark">${s.name}</span>
      </div>
      <div class="meta">
        <code>${s.hex.toUpperCase()}</code>
        <span>${s.sub}</span>
      </div>
    </div>
  `).join('');
  return `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1400px; padding: 64px; background: #faf9f5; font-family: 'Bricolage Grotesque', sans-serif; color: #141413; }
  h1 { font-size: 48px; font-weight: 400; letter-spacing: -0.02em; margin-bottom: 8px; }
  .lede { font-family: 'JetBrains Mono', monospace; font-size: 14px; color: #5b5750; margin-bottom: 48px; letter-spacing: 0.05em; }
  .row { display: grid; grid-template-columns: 1fr 1fr 1fr 320px; gap: 16px; margin-bottom: 16px; align-items: stretch; }
  .block { aspect-ratio: 3 / 1; display: flex; align-items: center; justify-content: center; border-radius: 8px; }
  .block.bone { background: #faf9f5; border: 1px solid rgba(20,20,19,0.08); }
  .block.dark { background: #141413; }
  .onColor { color: #faf9f5; font-size: 22px; font-weight: 500; mix-blend-mode: difference; opacity: 0.95; }
  .onBone { font-size: 22px; font-weight: 500; }
  .onDark { font-size: 22px; font-weight: 500; }
  .meta { display: flex; flex-direction: column; justify-content: center; padding-left: 16px; }
  .meta code { font-family: 'JetBrains Mono', monospace; font-size: 18px; font-weight: 500; color: #141413; margin-bottom: 4px; }
  .meta span { font-family: 'JetBrains Mono', monospace; font-size: 12px; color: #5b5750; line-height: 1.4; letter-spacing: 0.05em; }
  .headers { display: grid; grid-template-columns: 1fr 1fr 1fr 320px; gap: 16px; margin-bottom: 12px; font-family: 'JetBrains Mono', monospace; font-size: 11px; letter-spacing: 0.18em; text-transform: uppercase; color: #8c8478; }
</style></head><body>
  <h1>Alright · accent color candidates</h1>
  <div class="lede">Comparação · Orange Clay atual + Tempestade Suvinil 2026 + 5 vermelhos warm "tipo Kodak"</div>
  <div class="headers">
    <span>cor sólida</span>
    <span>sobre Bone (#FAF9F5)</span>
    <span>sobre Dark (#141413)</span>
    <span>HEX · referência</span>
  </div>
  ${blocks}
</body></html>`;
}

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 1800 }, deviceScaleFactor: 1 });
await page.setContent(html(), { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ fullPage: true, type: 'png' });
writeFileSync(out, buf);
await browser.close();
console.log(`✓ ${out}  (${Math.round(buf.byteLength / 1024)} KB)`);
