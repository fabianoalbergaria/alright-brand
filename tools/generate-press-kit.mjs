// Generate Alright Press Kit — palette card + bios + curated assets
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'assets/downloads/press-kit');
await fs.mkdir(OUT, { recursive: true });
await fs.mkdir(path.join(OUT, 'logos'), { recursive: true });
await fs.mkdir(path.join(OUT, 'palette'), { recursive: true });
await fs.mkdir(path.join(OUT, 'bio'), { recursive: true });
await fs.mkdir(path.join(OUT, 'stills'), { recursive: true });

const DARK = '#141413';
const BONE = '#faf9f5';
const ORANGE = '#ed1c24';
const STONE = '#3d3a35';
const SLATE = '#5b5750';
const MIST = '#ece8dc';
const CLAY_DEEP = '#a6192e';

const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500;600&display=block" rel="stylesheet">
`;

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 2 });
const page = await ctx.newPage();

// ---------- Palette card 1080×1350 PNG ----------
const paletteHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1350px;background:${BONE};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden;color:${DARK}}
.frame{width:100%;height:100%;display:flex;flex-direction:column;padding:80px 80px 60px}
.head{margin-bottom:48px}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:14px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:${SLATE}}
.title{font-size:84px;font-weight:300;line-height:.95;letter-spacing:-0.025em;margin-top:16px}
.title b{font-weight:700;color:${ORANGE}}
.grid{display:grid;grid-template-columns:1fr 1fr;gap:24px;flex:1}
.sw{display:flex;flex-direction:column;border-radius:18px;overflow:hidden;border:1px solid rgba(20,20,19,0.08)}
.sw__chip{flex:1;display:flex;align-items:flex-end;padding:24px;min-height:140px}
.sw__chip .hex{font-family:'JetBrains Mono',monospace;font-size:18px;font-weight:600;letter-spacing:.06em}
.sw__meta{background:${BONE};padding:18px 24px}
.sw__name{font-family:'Bricolage Grotesque',sans-serif;font-size:22px;font-weight:500;line-height:1;letter-spacing:-0.015em;color:${DARK}}
.sw__role{font-family:'JetBrains Mono',monospace;font-size:11px;font-weight:500;letter-spacing:.14em;text-transform:uppercase;color:${SLATE};margin-top:8px}
.foot{display:flex;justify-content:space-between;align-items:flex-end;font-family:'JetBrains Mono',monospace;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:${SLATE};margin-top:36px}
</style></head><body>
<div class="frame">
  <div class="head">
    <span class="eyebrow">Press kit · 01 / 03</span>
    <h1 class="title">A<b>l</b>right.<br/>Brand palette.</h1>
  </div>
  <div class="grid">
    <div class="sw"><div class="sw__chip" style="background:${DARK};color:${BONE}"><span class="hex">#141413</span></div><div class="sw__meta"><div class="sw__name">Dark</div><div class="sw__role">Texto · wordmark</div></div></div>
    <div class="sw"><div class="sw__chip" style="background:${BONE};color:${DARK};border-bottom:1px solid rgba(20,20,19,0.08)"><span class="hex">#FAF9F5</span></div><div class="sw__meta" style="background:${MIST}"><div class="sw__name">Bone</div><div class="sw__role">Background default</div></div></div>
    <div class="sw"><div class="sw__chip" style="background:${ORANGE};color:${DARK}"><span class="hex">#ed1c24</span></div><div class="sw__meta"><div class="sw__name">Kodak Red</div><div class="sw__role">Accent · l central</div></div></div>
    <div class="sw"><div class="sw__chip" style="background:${MIST};color:${DARK}"><span class="hex">#ECE8DC</span></div><div class="sw__meta"><div class="sw__name">Mist</div><div class="sw__role">Warm subtle bg</div></div></div>
    <div class="sw"><div class="sw__chip" style="background:${STONE};color:${BONE}"><span class="hex">#3D3A35</span></div><div class="sw__meta"><div class="sw__name">Stone</div><div class="sw__role">Texto secundário</div></div></div>
    <div class="sw"><div class="sw__chip" style="background:${SLATE};color:${BONE}"><span class="hex">#5B5750</span></div><div class="sw__meta"><div class="sw__name">Slate Warm</div><div class="sw__role">Texto faded</div></div></div>
  </div>
  <div class="foot">
    <span>wearealright.cc</span>
    <span>((Look again.))</span>
  </div>
</div>
</body></html>`;

await page.setViewportSize({ width: 1080, height: 1350 });
await page.setContent(paletteHtml, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const paletteBuf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1080, height: 1350 } });
await fs.writeFile(path.join(OUT, 'palette/alright-palette.png'), paletteBuf);
console.log('✓ palette/alright-palette.png');

// ---------- Palette card PDF (A4) ----------
const paletteA4Html = paletteHtml.replace('width:1080px;height:1350px', 'width:210mm;height:297mm');
await page.setContent(paletteA4Html, { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts.ready);
const pdfBuf = await page.pdf({
  format: 'A4',
  printBackground: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 }
});
await fs.writeFile(path.join(OUT, 'palette/alright-palette.pdf'), pdfBuf);
console.log('✓ palette/alright-palette.pdf');

await browser.close();

// ---------- Bios ----------
const bioPt = `Alright · A.I. first Production Company
São Paulo / Brasil

Sobre

A Alright é uma produtora audiovisual A.I.-first sediada em São Paulo. Combinamos craft
cinematográfico com pipeline de inteligência artificial generativa para entregar filmes
publicitários, conteúdo de marca e séries surreais — sem câmera, sem set, sem high costs.

Cada filme é um filme. ((Look again.))

Fundada por Fabiano Albergaria, a Alright trabalha com marcas como HBO Max, PUMA,
Olympikus, Mizuno, Chupa Chups, Negra Li, Brime, Instituto Caldeira, BK e Claro. Cada projeto
é um filme, tratado com a mesma atenção editorial — independente de durar 30 segundos ou
30 minutos.

Toolkit

— A.I. generativa de ponta (modelos de imagem, vídeo, áudio)
— Edição e finalização craft tradicional
— Direção e creative direction brasileira

Contato

Fabiano Albergaria · Founder
albergaria@wearealright.cc
+55 11 92353-8110 · WhatsApp
www.wearealright.cc · @wearealright.cc
`;

const bioEn = `Alright · A.I. first Production Company
São Paulo / Brazil

About

Alright is an A.I.-first production company based in São Paulo. We combine cinematic craft
with a generative AI pipeline to deliver commercial films, brand content and surreal series
— no camera, no set, no high costs.

Each film is its own film. ((Look again.))

Founded by Fabiano Albergaria, Alright has worked with brands like HBO Max, PUMA,
Olympikus, Mizuno, Chupa Chups, Negra Li, Brime, Instituto Caldeira, BK and Claro. Every
project is a film, treated with the same editorial attention — whether 30 seconds or 30
minutes.

Toolkit

— Cutting-edge generative A.I. (image, video, audio models)
— Traditional craft editing and finishing
— Brazilian direction and creative direction

Contact

Fabiano Albergaria · Founder
albergaria@wearealright.cc
+55 11 92353-8110 · WhatsApp
www.wearealright.cc · @wearealright.cc
`;

await fs.writeFile(path.join(OUT, 'bio/alright-bio-pt.txt'), bioPt);
await fs.writeFile(path.join(OUT, 'bio/alright-bio-en.txt'), bioEn);
console.log('✓ bio/alright-bio-pt.txt');
console.log('✓ bio/alright-bio-en.txt');

// ---------- Logos (curated 5 SVG + 2 PNG) ----------
const logoSrcDir = path.join(ROOT, 'assets/logo');
const logoCopies = [
  ['svg/alright-expressivo-dark-transparent.svg', 'logos/alright-default-on-bone.svg'],
  ['svg/alright-expressivo-bone-transparent.svg', 'logos/alright-default-on-dark.svg'],
  ['svg/alright-default-dark-transparent.svg',    'logos/alright-mono-on-bone.svg'],
  ['svg/alright-default-bone-transparent.svg',    'logos/alright-mono-on-dark.svg'],
  ['svg/lockup-we-are-alright-dark-transparent.svg', 'logos/lockup-we-are-alright.svg'],
  ['png/alright-expressivo-dark@2x.png',          'logos/alright-default-on-bone@2x.png'],
  ['png/alright-expressivo-bone@2x.png',          'logos/alright-default-on-dark@2x.png'],
];
for (const [src, dst] of logoCopies) {
  await fs.copyFile(path.join(logoSrcDir, src), path.join(OUT, dst));
  console.log(`✓ ${dst}`);
}

// ---------- Case stills (3 representative) ----------
const stillSrcDir = path.join(ROOT, 'assets/work/web');
const stillCopies = [
  ['hbo-max-paulistao-poster.jpg', 'stills/alright-hbo-max-paulistao.jpg'],
  ['olympikus-corre5-full-poster.jpg', 'stills/alright-olympikus-corre5.jpg'],
  ['negra-li-visual-poster.jpg', 'stills/alright-negra-li-lollapalooza.jpg'],
];
for (const [src, dst] of stillCopies) {
  await fs.copyFile(path.join(stillSrcDir, src), path.join(OUT, dst));
  console.log(`✓ ${dst}`);
}

// ---------- Contact + README ----------
const contact = `Alright · A.I. first Production Company

Web        wearealright.cc
Brand book book.wearealright.cc
Deck       deck.wearealright.cc

Founder    Fabiano Albergaria
Email      albergaria@wearealright.cc
Phone      +55 11 92353-8110
WhatsApp   https://wa.me/5511923538110
Instagram  @wearealright.cc

Location   São Paulo / Brasil
`;
await fs.writeFile(path.join(OUT, 'contact.txt'), contact);
console.log('✓ contact.txt');

const readme = `Alright · Press Kit
Generated: ${new Date().toISOString().slice(0, 10)}

What's inside
─────────────
logos/         5 SVGs (default + mono fallback + lockup) + 2 PNGs @2x
palette/       Brand palette card · PNG (social) + PDF (A4 print)
bio/           Company bio · PT and EN
stills/        3 representative case stills · HBO Max, Olympikus, Negra Li
contact.txt    Contact info + URLs

Brand essentials
────────────────
Name           Alright
Tagline        A.I. first Production Company.
Big idea       ((Look again.))

Brand device   (( )) — parentheses with one space, never glued to the letters

Palette        Dark #141413 · Bone #FAF9F5 · Kodak Red #ed1c24
               Stone #3D3A35 · Slate Warm #5B5750 · Mist #ECE8DC

Type           Bricolage Grotesque (OFL) + JetBrains Mono (Apache 2.0)

Logo           The default wordmark has the central 'l' in Kodak Red.
               Use the mono fallback only when Kodak Red can't reproduce
               (B&W print, fax, mono engraving, conflicting co-brand palettes).

For more       wearealright.cc/brand-book.html (full brand book)
               wearealright.cc/brand-book/print/ (25-page A4 PDF version)

Questions      albergaria@wearealright.cc
`;
await fs.writeFile(path.join(OUT, 'README.txt'), readme);
console.log('✓ README.txt');

console.log('\nDone. Press kit in assets/downloads/press-kit/');
