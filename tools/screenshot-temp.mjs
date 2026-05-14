import { chromium } from 'playwright';
const b = await chromium.launch();
const ctx = await b.newContext({ viewport: { width: 1440, height: 900 } });
const p = await ctx.newPage();
await p.goto('https://wearealright.pages.dev/deck/', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(3000);
const dots = await p.$$('.hud__dot');
await dots[2].click();
await p.waitForTimeout(3000);
const r = await p.evaluate(() => {
  const slide = document.querySelector('[data-index="2"]');
  const cs = getComputedStyle(slide);
  const rect = slide.getBoundingClientRect();
  const inner = slide.querySelector('.s-board__inner');
  const innerRect = inner ? inner.getBoundingClientRect() : null;
  const img = slide.querySelector('img');
  const imgRect = img ? img.getBoundingClientRect() : null;
  const imgSrc = img ? img.src : null;
  const imgNatural = img ? `${img.naturalWidth}x${img.naturalHeight}` : null;
  return {
    bg: cs.backgroundColor,
    opacity: cs.opacity,
    zIndex: cs.zIndex,
    display: cs.display,
    rect: { x: rect.x, y: rect.y, w: rect.width, h: rect.height },
    innerRect: innerRect ? { x: innerRect.x, y: innerRect.y, w: innerRect.width, h: innerRect.height } : null,
    imgRect: imgRect ? { x: imgRect.x, y: imgRect.y, w: imgRect.width, h: imgRect.height } : null,
    imgSrc, imgNatural,
    innerHTMLLen: slide.innerHTML.length,
  };
});
console.log(JSON.stringify(r, null, 2));
await p.screenshot({ path: '/tmp/deck-slide3.png' });
await b.close();
