// Gera index.html a partir de tools/site/template.html + tools/site/content.mjs (sem dependências).
// Uso: node tools/build-site.mjs
import { promises as fs } from 'node:fs';
import path from 'node:path';
import { R2, FILMS, PROJECTS, HOME, HOME_COMPACT, AUTORAIS, STILLS, STILLS_PAGE } from './site/content.mjs';

import { fileURLToPath } from 'node:url';
import { existsSync } from 'node:fs';
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const pad = (n) => String(n).padStart(2, '0');
const ratio = (f) => +(f.w / f.h).toFixed(4);
const teaserUrl = (slug, w) => `${R2}teaser/${slug}-${w}.mp4`;
const posterUrl = (slug, w) => `assets/work/grid/${slug}-${w}.jpg`;

const projectOf = {};
for (const p of PROJECTS) for (const id of p.films) projectOf[id] ??= p.slug;

function sources(slug) {
  const f = FILMS[slug];
  if (!f.teaser.length) {
    const ps = [...(f.poster || [])].sort((a, b) => a - b);
    return { ws: ps, sm: ps[0], md: ps[ps.length - 1], lg: null, still: true };
  }
  const ws = [...f.teaser].sort((a, b) => a - b);
  const sm = ws[0], lg = ws.length > 2 ? ws[ws.length - 1] : null;
  const md = ws.length > 1 ? ws.filter((w) => w !== lg).pop() : ws[0];
  return { ws, sm, md, lg };
}

function cell(slug, { mo, sizes, eager }) {
  const f = FILMS[slug];
  if (!f) throw new Error(`Filme desconhecido: ${slug}`);
  const { ws, sm, md, lg, still } = sources(slug);
  const vertical = f.h > f.w;
  const srcset = ws.map((w) => `${posterUrl(slug, w)} ${w}w`).join(', ');
  const ph = Math.round(sm * f.h / f.w);
  return `      <figure class="cell${vertical ? ' cell--v' : ''}" style="--r:${ratio(f)};--mo:${mo}">
        <button class="tile" type="button" data-film="${slug}" aria-label="${esc(f.client)} — ${esc(f.title)}. Assistir">
          <img src="${posterUrl(slug, sm)}" srcset="${srcset}" sizes="${sizes}" width="${sm}" height="${ph}" alt=""${eager ? ' fetchpriority="high"' : ' loading="lazy"'} decoding="async" />
${still ? '' : `          <video class="loop" muted loop playsinline preload="none" aria-hidden="true" data-src-sm="${teaserUrl(slug, sm)}" data-src="${teaserUrl(slug, md)}"${lg ? ` data-src-lg="${teaserUrl(slug, lg)}"` : ''}></video>
`}
        </button>
${still ? `        <span class="live" data-film-live="${slug}" aria-hidden="true"></span>\n` : ''}        <figcaption class="cap"><b>${esc(f.client)}</b><span>${esc(f.title)}</span></figcaption>
      </figure>`;
}

// Mosaico: no computador, linhas de colunas; no celular, sequência com verticais em pares (--mo = ordem)
function mosaic(rows, { eager = false, cls = '' } = {}) {
  let order = 0;
  const pending = [];
  const mobileOrder = {};
  for (const row of rows) for (const col of row) for (const id of col) {
    const v = FILMS[id].h > FILMS[id].w;
    if (v) { pending.push(id); if (pending.length === 2) pending.splice(0).forEach((x) => (mobileOrder[x] = order++)); }
    else mobileOrder[id] = order++;
  }
  pending.forEach((x) => (mobileOrder[x] = order++));
  let first = eager;
  const out = rows.map((row) => {
    const share = row.map((col) => 1 / col.reduce((a, id) => a + 1 / ratio(FILMS[id]), 0));
    const total = share.reduce((a, b) => a + b, 0);
    const cols = row.map((col, ci) => {
      const vw = Math.max(20, Math.round((share[ci] / total) * 100));
      const cells = col.map((id) => {
        const v = FILMS[id].h > FILMS[id].w;
        const html = cell(id, { mo: mobileOrder[id], sizes: `(max-width:899px) ${v ? 50 : 100}vw, ${vw}vw`, eager: first });
        first = false;
        return html;
      }).join('\n');
      return `    <div class="mcol" style="--g:${(share[ci] / total).toFixed(4)}">\n${cells}\n    </div>`;
    }).join('\n');
    return `  <div class="mrow">\n${cols}\n  </div>`;
  }).join('\n');
  return `<div class="mosaic${cls ? ' ' + cls : ''}">\n${out}\n</div>`;
}

function stillsGroup(id, prefix, { limit = 0, level = 2 } = {}) {
  const g = STILLS[id];
  const n = g.images.length;
  const imgs = limit ? g.images.slice(0, limit) : g.images;
  const items = imgs.map(([name, w, h], k) => `      <button class="still" type="button" style="--r:${(w / h).toFixed(4)}" data-full="assets/work/web/stills/${name}-1800.jpg" aria-label="${esc(g.name)} · imagem ${k + 1} de ${n}">
        <img src="assets/work/web/stills/${name}-900.jpg" srcset="assets/work/web/stills/${name}-900.jpg 900w, assets/work/web/stills/${name}-1800.jpg 1800w" sizes="(max-width:768px) 60vw, 30vw" width="${w}" height="${h}" loading="lazy" decoding="async" alt="${esc(g.name)} · still ${pad(k + 1)}" />
      </button>`).join('\n');
  return `  <div class="stills__group" role="group" aria-labelledby="${prefix}-${id}">
    <div class="stills__client">
      <h${level} id="${prefix}-${id}" class="stills__name">${esc(g.name)}.</h${level}>
      <span class="stills__count mono">${pad(n)} imagens</span>
    </div>
    <div class="stills__grid">
${items}
    </div>
  </div>`;
}

const pills = [['projetos', 'Projetos'], ['stills', 'Stills'], ['autorais', 'Autorais'], ['contato', 'Contato']]
  .map(([k, label]) => `    <a class="pill" href="#${k}" data-nav="${k}">${label}</a>`).join('\n');

const projectList = PROJECTS.map((p, i) => `      <li><a href="#projeto=${p.slug}"><span class="plist__n">${pad(i + 1)}</span><span class="plist__c">${esc(p.client)}</span><span class="plist__t">${esc(p.sub)}</span><span class="plist__k">${pad(p.films.length)} ${p.films.length > 1 ? 'filmes' : 'filme'}</span></a></li>`).join('\n');

const projectPages = PROJECTS.map((p) => {
  const f0 = FILMS[p.films[0]];
  const multi = p.films.length > 1;
  const nav = multi ? `
      <button class="pplayer__nav pplayer__nav--prev" type="button" aria-label="Filme anterior">‹</button>
      <button class="pplayer__nav pplayer__nav--next" type="button" aria-label="Próximo filme">›</button>
      <span class="pplayer__count mono" aria-live="polite"></span>` : '';
  return `<!-- ===================== PROJETO · ${esc(p.client.toUpperCase())} ===================== -->
<section class="view" data-view="projeto" data-slug="${p.slug}" data-films="${p.films.join(',')}" data-title="${esc(p.client)} — Alright" aria-labelledby="p-${p.slug}">
  <div class="wrap">
    <a class="back" href="#projetos">← Projetos</a>
    <div class="pplayer" style="--r:${ratio(f0)}">
      <img src="${posterUrl(p.films[0], sources(p.films[0]).md)}" alt="" loading="lazy" decoding="async" />
      <video class="loop" muted loop playsinline preload="none" aria-hidden="true"></video>
      <span class="live" aria-hidden="true"></span>
      <button class="pplayer__open" type="button" aria-label="Assistir ${esc(f0.client)} — ${esc(f0.title)}"></button>${nav}
    </div>
    <div class="dhead">
      <div>
        <h1 id="p-${p.slug}" class="ptitle" tabindex="-1" data-focus>${esc(p.client)}.</h1>
        <p class="psub">${esc(p.sub)}</p>
      </div>
      <p class="pcopy">${esc(p.copy)}</p>
    </div>
    <a class="pall" href="#projetos">← Todos os projetos</a>
  </div>
</section>`;
}).join('\n\n');

const filmsJson = {};
for (const [slug, f] of Object.entries(FILMS)) {
  const { sm, md, lg, still } = sources(slug);
  filmsJson[slug] = {
    c: f.client, t: f.title, r: ratio(f), p: projectOf[slug] || null,
    ...(f.vimeo ? { v: f.vimeo, ...(f.vimeoHash ? { h: f.vimeoHash } : {}) } : f.youtube ? { yt: f.youtube } : { src: f.src }),
    ...(still ? {} : { sm: teaserUrl(slug, sm), md: teaserUrl(slug, md), ...(lg ? { lg: teaserUrl(slug, lg) } : {}) }),
    poster: posterUrl(slug, md),
  };
}

const flat = (rows) => rows.flat(2).sort().join(',');
if (flat(HOME) !== flat(HOME_COMPACT)) throw new Error('HOME e HOME_COMPACT precisam ter exatamente os mesmos vídeos');
for (const [slug, f] of Object.entries(FILMS)) for (const w of (f.teaser.length ? f.teaser : f.poster || [])) {
  if (!existsSync(path.join(ROOT, posterUrl(slug, w)))) throw new Error(`Capa não encontrada: ${posterUrl(slug, w)}`);
}
for (const id of STILLS_PAGE) for (const [name] of STILLS[id].images) for (const w of [900, 1800]) {
  if (!existsSync(path.join(ROOT, `assets/work/web/stills/${name}-${w}.jpg`))) throw new Error(`Foto não encontrada: ${name}-${w}.jpg`);
}

let html = await fs.readFile(path.join(ROOT, 'tools/site/template.html'), 'utf8');
const fill = {
  PILLS: pills,
  HOME_MOSAIC: mosaic(HOME, { eager: true, cls: 'mosaic--d' }) + '\n' + mosaic(HOME_COMPACT, { cls: 'mosaic--t' }),
  PROJECT_LIST: projectList,
  PROJECT_PAGES: projectPages,
  STILLS_PAGE: STILLS_PAGE.map((id) => stillsGroup(id, 'ps', { level: 2 })).join('\n'),
  AUTORAIS_MOSAIC: mosaic(AUTORAIS),
  FILMS_JSON: JSON.stringify(filmsJson).replace(/</g, '\\u003c'),
};
html = html.replace(/\{\{([A-Z_]+)\}\}/g, (m, k) => {
  if (!(k in fill)) throw new Error(`Placeholder sem conteúdo: ${k}`);
  return fill[k];
});
await fs.writeFile(path.join(ROOT, 'index.html'), html);
console.log(`index.html: ${(html.length / 1024).toFixed(1)} KB · ${Object.keys(FILMS).length} filmes · ${PROJECTS.length} projetos`);
