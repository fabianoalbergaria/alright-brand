#!/usr/bin/env node
// Render the brand assets (wordmark, bracketed phrase, feed cover mockup)
// in each candidate accent color side-by-side, so the owner can see the
// real impact of swapping Orange Clay for a red.
import { chromium } from 'playwright';
import { writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve(process.argv[2] || '/tmp/swatch-mockup.png');

const CANDIDATES = [
  { hex: '#d97757', name: 'Orange Clay (atual)',   tag: 'PMS 7578 C · ref' },
  { hex: '#e8472a', name: 'Vermilion warm',        tag: 'transição natural' },
  { hex: '#f04923', name: 'Hot vermilion',         tag: 'máx. yellow lean' },
  { hex: '#ed1c24', name: 'Kodak Red',             tag: 'Pantone 185 C' },
];

function col(c) {
  // Build a 4-column block showing: wordmark on bone · wordmark on dark · bracketed phrase · mini feed cover
  return `
  <div class="col">
    <div class="col-head">
      <span class="dot" style="background:${c.hex}"></span>
      <div>
        <strong>${c.name}</strong>
        <span class="meta">${c.hex.toUpperCase()} · ${c.tag}</span>
      </div>
    </div>

    <!-- Wordmark on bone -->
    <div class="card bone">
      <span class="wm">A<b style="color:${c.hex}">l</b>right</span>
    </div>

    <!-- Wordmark on dark -->
    <div class="card dark">
      <span class="wm on-dark">A<b style="color:${c.hex}">l</b>right</span>
    </div>

    <!-- ((Look again.)) -->
    <div class="card bone bigidea">
      <span class="brk" style="color:${c.hex}">((</span>Look<br/>again.<span class="brk" style="color:${c.hex}">))</span>
    </div>

    <!-- Mini feed cover (Case style) -->
    <div class="card bone feedmini">
      <div class="eyebrow">CASE · 2026 · OLYMPIKUS</div>
      <div class="accent-bar" style="background:${c.hex}"></div>
      <div class="title">Corre.</div>
      <div class="footer-row">
        <span class="wmsm">A<b style="color:${c.hex}">l</b>right</span>
        <span class="metasm">WEAREALRIGHT.CC</span>
      </div>
    </div>

    <!-- Manifesto dark with orange dot -->
    <div class="card dark feedmini">
      <div class="eyebrow-mono">MANIFESTO · 01</div>
      <div class="manifesto">Craft<span class="dot" style="color:${c.hex}">.</span></div>
      <div class="footer-row">
        <span class="wmsm on-dark">A<b style="color:${c.hex}">l</b>right</span>
        <span class="metasm dim">2026 · SP</span>
      </div>
    </div>
  </div>`;
}

const html = `<!doctype html><html><head>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { width: 1800px; padding: 56px 48px; background: #f3f1eb; font-family: 'Bricolage Grotesque', sans-serif; color: #141413; }
  .head { margin-bottom: 32px; }
  .head h1 { font-size: 40px; font-weight: 400; letter-spacing: -0.02em; }
  .head .sub { font-family: 'JetBrains Mono', monospace; font-size: 13px; color: #5b5750; letter-spacing: 0.06em; margin-top: 6px; }
  .grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
  .col { display: flex; flex-direction: column; gap: 12px; }
  .col-head { display: flex; gap: 12px; align-items: center; margin-bottom: 4px; padding: 12px 0; border-bottom: 1px solid rgba(20,20,19,0.08); }
  .col-head .dot { width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0; }
  .col-head strong { font-size: 18px; font-weight: 500; display: block; }
  .col-head .meta { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #5b5750; letter-spacing: 0.06em; }

  .card { border-radius: 10px; padding: 24px; min-height: 110px; display: flex; align-items: center; justify-content: center; flex-direction: column; }
  .card.bone { background: #faf9f5; }
  .card.dark { background: #141413; color: #faf9f5; }

  .wm { font-size: 52px; font-weight: 400; letter-spacing: -0.02em; }
  .wm b { font-weight: 700; }
  .wm.on-dark { color: #faf9f5; }

  .card.bigidea { font-size: 56px; font-weight: 300; line-height: 0.96; text-align: center; letter-spacing: -0.025em; min-height: 180px; }
  .card.bigidea .brk { font-weight: 300; }

  .card.feedmini { align-items: stretch; padding: 20px 22px; min-height: 220px; justify-content: space-between; }
  .eyebrow { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.22em; color: #5b5750; }
  .eyebrow-mono { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.22em; color: rgba(250,249,245,0.55); }
  .accent-bar { width: 64px; height: 3px; margin: 22px 0 8px; }
  .title { font-size: 44px; font-weight: 400; line-height: 0.96; letter-spacing: -0.03em; }
  .manifesto { font-size: 56px; font-weight: 400; letter-spacing: -0.025em; line-height: 1; text-align: center; flex: 1; display: flex; align-items: center; justify-content: center; }
  .manifesto .dot { font-weight: 700; }
  .footer-row { display: flex; justify-content: space-between; align-items: flex-end; margin-top: auto; }
  .wmsm { font-size: 18px; font-weight: 400; letter-spacing: -0.02em; }
  .wmsm b { font-weight: 700; }
  .wmsm.on-dark { color: #faf9f5; }
  .metasm { font-family: 'JetBrains Mono', monospace; font-size: 9px; letter-spacing: 0.22em; color: #5b5750; }
  .metasm.dim { color: rgba(250,249,245,0.5); }
</style></head><body>
  <div class="head">
    <h1>Alright · accent color · candidatos aplicados em assets reais</h1>
    <div class="sub">Cada coluna é a marca renderizada com 1 cor de accent. Compare visualmente o impacto no wordmark, no ((Look again.)) e em capas de feed.</div>
  </div>
  <div class="grid">
    ${CANDIDATES.map(col).join('')}
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1800, height: 1200 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const buf = await page.screenshot({ fullPage: true, type: 'png' });
writeFileSync(out, buf);
await browser.close();
console.log(`✓ ${out}  (${Math.round(buf.byteLength / 1024)} KB)`);
