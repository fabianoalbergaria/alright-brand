// Generate Instagram kit PNG templates for Alright
// Output: assets/downloads/instagram-kit/*.png + zips on demand
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { chromium } from 'playwright';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const ROOT = path.resolve(HERE, '..');
const OUT = path.join(ROOT, 'assets/downloads/instagram-kit');
await fs.mkdir(OUT, { recursive: true });

const DARK = '#141413';
const BONE = '#faf9f5';
const ORANGE = '#d97757';
const MIST = '#ece8dc';

const browser = await chromium.launch();
const ctx = await browser.newContext({ deviceScaleFactor: 1 });
const page = await ctx.newPage();

const fonts = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=JetBrains+Mono:wght@400;500;600&display=block" rel="stylesheet">
`;

async function shoot(width, height, html, file) {
  await page.setViewportSize({ width, height });
  await page.setContent(html, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width, height } });
  await fs.writeFile(path.join(OUT, file), buf);
  console.log(`✓ ${file}`);
}

// 1. Profile picture 1080×1080 — ((l)) brand mark, dark bg
const profileHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;background:${DARK};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden}
.icon{width:1080px;height:1080px;display:flex;align-items:center;justify-content:center;line-height:1;letter-spacing:-0.04em;color:${BONE};font-weight:400;font-size:680px}
.icon b{font-weight:700;color:${ORANGE};font-size:0.88em;display:inline-block;transform:translateY(0.07em);margin:0 -0.02em}
</style></head><body><div class="icon">((<b>l</b>))</div></body></html>`;
await shoot(1080, 1080, profileHtml, 'profile-1080.png');

// 2. Post quote square 1080×1080 — ((Look again.))
const postHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;background:${DARK};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden;color:${BONE}}
.frame{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:80px 100px}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:rgba(250,249,245,.6)}
.center{flex:1;display:flex;align-items:center;justify-content:center;text-align:center}
.title{font-size:180px;font-weight:300;line-height:.95;letter-spacing:-0.03em;margin:0}
.title .paren{color:${ORANGE};font-weight:300}
.bottom{display:flex;justify-content:space-between;align-items:flex-end;font-family:'JetBrains Mono',monospace;font-size:18px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,249,245,.5)}
</style></head><body>
<div class="frame">
  <div class="eyebrow">A.I. first Production Company</div>
  <div class="center"><h1 class="title"><span class="paren">((</span> Look again. <span class="paren">))</span></h1></div>
  <div class="bottom"><span>wearealright.cc</span><span>@wearealright.cc</span></div>
</div>
</body></html>`;
await shoot(1080, 1080, postHtml, 'post-look-again-1080.png');

// 3. Post manifesto square 1080×1080 — Craft. Craft. And. More. Craft.
const craftHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;background:${BONE};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden;color:${DARK}}
.frame{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:80px 100px}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:#5b5750}
.center{flex:1;display:flex;align-items:center;justify-content:center;text-align:center}
.title{font-size:140px;font-weight:300;line-height:.98;letter-spacing:-0.025em;margin:0}
.dot{color:${ORANGE};font-weight:700}
.bottom{display:flex;justify-content:space-between;align-items:flex-end;font-family:'JetBrains Mono',monospace;font-size:18px;letter-spacing:.18em;text-transform:uppercase;color:#5b5750}
</style></head><body>
<div class="frame">
  <div class="eyebrow">02 / Métier</div>
  <div class="center"><h1 class="title">Craft<span class="dot">.</span><br/>Craft<span class="dot">.</span> And<span class="dot">.</span><br/>More<span class="dot">.</span> Craft<span class="dot">.</span></h1></div>
  <div class="bottom"><span>wearealright.cc</span><span>@wearealright.cc</span></div>
</div>
</body></html>`;
await shoot(1080, 1080, craftHtml, 'post-craft-1080.png');

// 4. Story 1080×1920 — ((We Are Alright)) lockup
const storyHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;background:${DARK};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden;color:${BONE}}
.frame{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:200px 100px}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:rgba(250,249,245,.6);text-align:center}
.center{flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:64px}
.lockup{font-size:140px;font-weight:300;line-height:.95;letter-spacing:-0.025em;margin:0}
.lockup .paren{color:${ORANGE};font-weight:300}
.sub{font-size:46px;font-weight:300;line-height:1.2;letter-spacing:-0.02em;color:rgba(250,249,245,0.85);margin:0}
.bottom{text-align:center;font-family:'JetBrains Mono',monospace;font-size:24px;letter-spacing:.18em;text-transform:uppercase;color:rgba(250,249,245,.55)}
</style></head><body>
<div class="frame">
  <div class="eyebrow">São Paulo / BR</div>
  <div class="center">
    <h1 class="lockup"><span class="paren">((</span>We Are<br/>Alright<span class="paren">))</span></h1>
    <p class="sub">A.I. first<br/>Production Company.</p>
  </div>
  <div class="bottom">wearealright.cc</div>
</div>
</body></html>`;
await shoot(1080, 1920, storyHtml, 'story-lockup-1080x1920.png');

// 5. Story 1080×1920 — ((Look again.))
const storyLookHtml = `<!DOCTYPE html><html><head>${fonts}<style>
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1920px;background:${ORANGE};font-family:'Bricolage Grotesque',sans-serif;overflow:hidden;color:${DARK}}
.frame{width:100%;height:100%;display:flex;flex-direction:column;justify-content:space-between;padding:200px 100px}
.eyebrow{font-family:'JetBrains Mono',monospace;font-size:22px;font-weight:500;letter-spacing:.22em;text-transform:uppercase;color:#3d3a35;text-align:center}
.center{flex:1;display:flex;align-items:center;justify-content:center;text-align:center}
.title{font-size:200px;font-weight:300;line-height:.95;letter-spacing:-0.03em;margin:0}
.paren{font-weight:300}
.bottom{text-align:center;font-family:'JetBrains Mono',monospace;font-size:24px;letter-spacing:.18em;text-transform:uppercase;color:#3d3a35}
</style></head><body>
<div class="frame">
  <div class="eyebrow">((Look again.))</div>
  <div class="center"><h1 class="title"><span class="paren">((</span><br/>Look<br/>again.<br/><span class="paren">))</span></h1></div>
  <div class="bottom">wearealright.cc</div>
</div>
</body></html>`;
await shoot(1080, 1920, storyLookHtml, 'story-look-again-1080x1920.png');

await browser.close();

// README text
const readme = `Alright · Instagram kit
Generated: ${new Date().toISOString().slice(0, 10)}

Files
─────
profile-1080.png             Profile picture (1:1) — ((l)) brand mark, Dark bg
post-look-again-1080.png     Post (1:1) — ((Look again.)) on Dark
post-craft-1080.png          Post (1:1) — Craft. Craft. And. More. Craft. on Bone
story-lockup-1080x1920.png   Story (9:16) — ((We Are Alright)) lockup
story-look-again-1080x1920.png  Story (9:16) — ((Look again.)) on Orange Clay

Brand
─────
Dark         #141413
Bone         #faf9f5
Orange Clay  #d97757
Type         Bricolage Grotesque (OFL) + JetBrains Mono (Apache 2.0)
Brand device (( )) — always with one space inside

Use
───
Open the PNG in any editor (Figma, Canva, Photoshop) and drop your asset on top.
The templates respect Instagram safe areas. Don't add a 5th color to the palette.

((Look again.)) — wearealright.cc
`;
await fs.writeFile(path.join(OUT, 'README.txt'), readme);
console.log('✓ README.txt');

console.log('\nDone. Instagram kit in assets/downloads/instagram-kit/');
