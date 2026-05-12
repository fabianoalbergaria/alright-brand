# assets/work — Imagens do brand book e microsite

Onde colocar os arquivos visuais. Tudo aqui é versionado no Git e servido pelo GitHub Pages.

## Estrutura

```
assets/work/
├── real/    ← Stills/frames de trabalhos reais produzidos pela Alright
├── ai/      ← Frames gerados com IA (Midjourney, Flux, Sora, etc.)
└── mood/    ← Mood board / referências de tom visual
```

## Como nomear os arquivos

Use kebab-case + numeração se houver série:

- `real/comercial-cliente-x-still-01.jpg`
- `real/clipe-banda-y-frame-02.jpg`
- `ai/editorial-portrait-warm-01.png`
- `ai/landscape-cinematic-bone-02.png`
- `mood/ref-a24-tone.jpg`

## Formato e tamanho recomendados

- **Formato**: JPG (fotos) ou PNG (com transparência). Evite WebP por enquanto.
- **Resolução**: 1920px de largura mínima para hero, 1200px para grid.
- **Peso**: até ~500KB por imagem (comprima antes — uso `tinypng.com` ou `squoosh.app`).
- **Aspect ratio livre**: 16:9 e 3:2 funcionam melhor em hero; 1:1 e 4:5 em grids.

## Onde cada pasta vai aparecer

- `real/` → portfolio hero + case studies + grid de trabalhos.
- `ai/` → mood board no brand book, divisores de seção no microsite, House Look gallery.
- `mood/` → referência interna, não publicado por padrão (mas pode ser usado se quiser).

## Depois de subir as imagens

Me avisa que estão aqui — eu integro nos lugares certos (portfolio, brand-book.html, microsite) e atualizo o deploy.
