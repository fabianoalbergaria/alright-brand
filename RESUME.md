# Resume — onde paramos (2026-05-20 · sessão Brasa+v2 cravada)

> Hand-off pra próxima sessão. Leia este arquivo + `CLAUDE.md` + `STATUS.md` antes de começar. Owner pediu sair daqui porque a janela de contexto da sessão atual encheu — este resume captura tudo que rolou.

---

## URLs ao vivo (domínio próprio — 2026-05-15)

- **Portfolio**: https://wearealright.cc/
- **Brand Book**: https://wearealright.cc/brand-book.html · alias curto: https://book.wearealright.cc/
- **Brand Book print**: https://wearealright.cc/brand-book/print/
- **Deck**: https://wearealright.cc/deck/ · alias curto: https://deck.wearealright.cc/
- **Cloudflare Pages canon (sem domínio próprio)**: https://wearealright.pages.dev/
- **GitHub repo**: https://github.com/fabianoalbergaria/alright-brand

## Infra

- **Hospedagem**: Cloudflare Pages (project `wearealright`, account `3aa862deb82c78275ba96d332f8b9db3`)
- **CDN vídeos/imagens**: Cloudflare R2 bucket `alright-media` em `https://pub-cbe2e8273b054c8bb52e5dec0dc1e3a7.r2.dev/`
- **Deploy**: `CLOUDFLARE_API_TOKEN=<token> ./deploy.sh` (token precisa permissões: Pages Edit, R2 Edit, Account Read, User Read)
- **Git**: branch `main`, push automático não tem CI — deploy é manual via `deploy.sh`

## Estrutura do repo

```
alright-brand/
├── index.html                    ← Portfolio (live em /)
├── brand-book.html               ← Brand book (live em /brand-book.html)
├── 05-deliverables/
│   └── deck-alright-v3.html      ← Deck (live em /deck/, copiado pelo deploy)
├── assets/
│   ├── logo/                     ← SVG transparente + PNG dos logos
│   ├── meta/                     ← OG image, favicon, manifest
│   └── work/
│       ├── real/                 ← Originais (gitignored, NÃO entram no repo nem no deploy)
│       └── web/                  ← Versões comprimidas (.jpg vão pro deploy, .mp4 ficam local)
├── tools/
│   ├── compress-work-assets.mjs  ← Compressa originais pra web/
│   ├── generate-logos-v2.mjs     ← Gera logos via Playwright
│   ├── generate-meta-assets.mjs  ← Gera OG image + favicons
│   └── node_modules/             ← gitignored
├── deploy.sh                     ← Deploy pro Cloudflare Pages
└── CLAUDE.md / STATUS.md / RESUME.md
```

## Estado das fases (entregáveis)

- ✅ **Fase 0**: Discovery
- ✅ **Fase 1**: Estratégia + verbal + big idea (`((Look again.))`)
- ✅ **Fase 2**: Logo + tipografia (Direção C dual-state, Bricolage Grotesque)
- ✅ **Fase 3**: Paleta + house look + motion (AI disclosure **revogada 2026-05-13**)
- ✅ **Fase 4**: Aplicações + microsite + portfolio + brand book v2
- ✅ **Fase 5**: Deck v3 + brand book print (desatualizado) + logo pack

## Cravado na ID visual (intocável)

- **Paleta v2 (2026-05-20)**: **Kodak Red `#ed1c24`** (Pantone 185 C), Bone `#faf9f5`, Dark `#141413`, Stone `#3d3a35`, Slate Warm `#5b5750`, Mist `#ece8dc`, **Kodak Deep `#a6192e`** (Pantone 187 C). v1 deprecada: Orange Clay `#d97757` (PMS 7578 C) + Clay Deep `#8c4a32` (PMS 7595 C) — não usar em entregáveis novos. Spec viva em `tokens/color.tokens.json` v2.0 + `CLAUDE.md` (seção Paleta detalhada).
- **Fontes**: Bricolage Grotesque (200-800 var) + JetBrains Mono
- **Logo principal** *(Direção C dual-state)*: **Default = `l` Bold 700 Kodak Red** (90% usos). **Mono fallback** = `l` Bold 700 Dark (só B&W). Reveal `((A I r i g h t))` espaçado = ato editorial.
- **Logo companion (2026-05-20)**: **Brasa** — ember Kodak Red + halo radial + 3 wisps Bone cruzando (geometria do motion canon, mark thickness ×1.4). Usada onde a marca cabe em quadrado (avatar IG, favicon, perfil) ou onde o motion congelado conta mais que o nome escrito. **Wordmark = voz, Brasa = gesto.** Variantes em `assets/logo/svg/brasa-{mark,lockup,square,favicon}-*.svg`. Documentada no brand book seção 04.1.
- **Brand device**: `(( ))` com espaçamento
- **Big idea**: `((Look again.))`
- **Signature motion (Feel Alright)**: `assets/motion/brasa-reveal.html` (530KB self-contained, audio + Bricolage em base64). Tela preta → ember acende com som do isqueiro → 3 wisps fumaça desenham cruzando → wordmark `Alright` fade-in (mono Bone, l Bold sem accent — reveal moment cinematic monochrome). Geometria em 3 cubic Beziers (base 8.5/7/5.5 → tip 0.8 logical px, ember a 78% from top). Master em `02-visual-core/logo/studies/brasa-motion-reveal.html`.
- **Manifestos canon**: `We are alright.` · `Craft. Craft. And. More. Craft.` · `Cada filme é um filme.` · `No camera or set. No high costs.`
- **Motion easing**: `cubic-bezier(0.16, 1.0, 0.3, 1.0)` cinematic
- **Owner**: Alright (era Zuza → mudou em 2026-05-14)

## Contato / signature

- Fabiano Albergaria · Founder, Alright
- albergaria@wearealright.cc
- +55 11 92353-8110 (Clique WhatsApp → https://wa.me/5511923538110)
- www.wearealright.cc · @wearealright.cc
- São Paulo / BR

## Domínio · LIVE em 2026-05-15 ✅

- **Registrar**: GoDaddy (mantido — só os nameservers foram trocados)
- **DNS**: Cloudflare DNS via nameservers `karsyn.ns.cloudflare.com` + `mike.ns.cloudflare.com`
- **Email Google Workspace**: preservado (5 MX + 2 TXT importados intactos)
- **SSL**: Cloudflare/Google automático (certificate authority: `google`)

### URLs em produção

| URL | Comportamento | Status |
|---|---|---|
| `https://wearealright.cc/` | Portfolio direto | 200 ✅ |
| `https://www.wearealright.cc/` | Portfolio direto (mesma origem) | 200 ✅ |
| `https://book.wearealright.cc/` | 301 → `wearealright.cc/brand-book.html` | ✅ |
| `https://deck.wearealright.cc/` | 301 → `wearealright.cc/deck/` | ✅ |

### Cloudflare Pages — 2 projects

**Project `wearealright`** (main public site) · 4 custom domains:

| Domain | Pages domain ID | Access |
|---|---|---|
| `wearealright.cc` (apex) | `e08198dc-070c-4e60-9d99-b8d6414aa66a` | Public |
| `www.wearealright.cc` | `85955d23-32ae-40e1-a7ed-a326a6d11d74` | Public |
| `book.wearealright.cc` (redirect → `/brand-book.html`) | `ad53a2ae-2563-44c8-92f0-7d6340713351` | Public |
| `deck.wearealright.cc` (redirect → `/deck/`) | `c5b1a14f-7572-44b8-93e0-8053224e8dbb` | Public |

**Project `wearealright-kit`** (internal tools — Instagram editor) · 1 custom domain:

| Domain | Access |
|---|---|
| `kit.wearealright.cc` (editor at root) | 🔒 Cloudflare Access · `@wearealright.cc` only |

Each project has its own deploy: `./deploy.sh` for `wearealright`, `./deploy-kit.sh` for `wearealright-kit`. The kit project's source lives at `instagram-kit/index.html` + `assets/social/instagram/*` in this repo.

### Cloudflare DNS records ativos

| Tipo | Nome | Target | Proxy |
|---|---|---|---|
| CNAME | `@` | `wearealright.pages.dev` | 🟠 |
| CNAME | `www` | `wearealright.pages.dev` | 🟠 |
| CNAME | `book` | `wearealright.pages.dev` | 🟠 |
| CNAME | `deck` | `wearealright.pages.dev` | 🟠 |
| CNAME | `kit` | `wearealright.pages.dev` | 🟠 |
| MX × 5 | `@` | Google Workspace (aspmx.l.google.com + alts) | DNS only |
| TXT × 2 | `@` | SPF + google-site-verification | DNS only |

### Redirect Rules ativas

- `hostname eq "book.wearealright.cc"` → 301 → `https://wearealright.cc/brand-book.html` (preserve query)
- `hostname eq "deck.wearealright.cc"` → 301 → `https://wearealright.cc/deck/` (preserve query)

### Cloudflare Access (Zero Trust) — `Alright Kit` app

- Team URL backstage: `autumn-pond-de74.cloudflareaccess.com` (auto-named)
- Application: `Alright Kit` · Self-hosted
- **Destinations** (paths protegidos):
  - `kit.wearealright.cc/*` (todo o subdomínio do kit, serve editor)
  - `wearealright.cc/instagram-kit/*` (apex/path antigo, gated por defesa em profundidade — Pages project não tem mais conteúdo aqui)
- Policy: `Wearealright team` · Allow · Include: emails ending in `@wearealright.cc`
- Session duration: 24h
- Identity provider: One-time PIN (email) por default. Pode trocar pra Google Workspace SSO no dashboard.
- Pra acessar: abre https://kit.wearealright.cc/ → tela login → email `@wearealright.cc` → recebe PIN → entra. Editor abre direto.

### Instagram kit editor

- Source: `instagram-kit/index.html` (~1750 linhas, html-to-image + jspdf via CDN)
- Assets: `assets/social/instagram/avatar-{a,b,c}.png` + 11 PSDs em `assets/social/instagram/psd/`
- 11 peças editáveis inline: 3 avatars + 6 feed posts (1080×1350) + 2 vertical (1080×1920)
- Cada peça tem 3 botões de download:
  - **PNG / PDF** (com edições inline) — via html-to-image + jspdf no client
  - **PSD · camadas** — 3 camadas base separadas + N text layers vetoriais:
    - **Background** = só a cor sólida (ou split panes pra feed-split) — gerada no Node, troca livre
    - **Brand · wordmark** = wordmark Alright + decorações canon (accent bars etc) sobre transparente — captura com editáveis hidden + bg transparente
    - **Text layers** = uma por elemento editável (double-click no PS pra mudar texto, fonte/cor/posição preservados via PostScript name match)
    - Trocar bg color não afeta wordmark; esconder wordmark deixa só cor + texto.
    - Avatares (sem texto editável) caem pra 2-layer Background+Content raster.
- Geração de PSDs: `node tools/generate-instagram-psd.mjs` (Playwright detacha cada peça num holder isolado, hide nos selectors editáveis pra capturar Background, extrai font/size/cor/baseline computados → ag-psd empacota como text layers vetoriais). `--only=<id1,id2>` pra regenerar subset.
- Deploy: `./deploy-kit.sh` (build em `.kit-dist/` + wrangler pages deploy)
- Recuperado de edge cache em 2026-05-18 antes do TTL expirar — outra sessão tinha feito o source mas não commitou.

## Vídeos no portfolio (com Vimeo lightbox)

| Case | Preview R2 | Vimeo (com som) |
|---|---|---|
| Chupa Chups Art Gallery | `chupa-chups-art-gallery.mp4` | 1191600944 |
| Chupa Chups Surreal Dream | `chupa-chups-surreal-dream.mp4` | 1191600943 |
| Chupa Chups Surreal Unboxing | `chupa-chups-surreal-unboxing.mp4` | 1191600942 |
| Chupa Chups Forever Fun | `chupa-chups-forever-fun.mp4` | 1191599456 |
| Olympikus Corre 5 | `olympikus-corre5-full.mp4` (CORRE5_16X9 cut, 19.5MB) | 1192635125 |
| PUMA Portugal | `puma-portugal.mp4` | 1191599038 |
| Mizuno x Botafogo | `mizuno-botafogo.mp4` | 1191597286 |
| Negra Li Lollapalooza | `negra-li-visual.mp4` | 1192041713 |
| Brime · Tem uma sexta | `brime-sexta-na-quarta.mp4` | 1192047832 |
| Claro · Animatic (deck slide 04) | `claro.mp4` (preview) + `claro-full.mp4` (com áudio, sem Vimeo) | — |
| HBO Max · Paulistão | `hbo-max-paulistao.mp4` (10.5MB) | 1193297749 |
| Instituto Caldeira | `instituto-caldeira.mp4` (28MB) | 1193297752 |
| BK · Visuals | `bk-visuals.mp4` (11MB) | 1193297750 |

## Pendente

1. **Reels de venda** *(pedido em 2026-05-15)* — produzir reel/sizzle pra vender o trabalho. Bruto: vídeo curto (60–90s típico) combinando cases já existentes em R2 (HBO Max, Chupa Chups, PUMA, Olympikus, Mizuno, Negra Li, Brime, Instituto Caldeira, BK, Claro) com a ID visual da marca (Bricolage Grotesque + `(( ))` + Kodak Red accent + motion `cubic-bezier(0.16,1.0,0.3,1.0)`). Decisões a cravar com o owner antes de produzir: duração final, plataformas alvo (Instagram Reels / YouTube Shorts / LinkedIn / TikTok), narrativa (cases por categoria? ordem cronológica? climax + reveal?), trilha, presença ou não de voiceover, e CTA final (link, contato, ou só lockup).
2. **Brand book print v2** — gallery não inclui os 3 cases novos (HBO Max, Instituto Caldeira, BK). Página 23 (House look · stills) tem 8 tiles fixos no grid A4 — adicionar 3 daria overflow. Pra incluir, ou reorganiza tiles existentes (alguns col-3 → col-2) ou cria uma página 26 nova. Não-bloqueante: brand book web já tem os 3 novos.

## Deck — composição final

14 slides (após adição dos 3 cases novos em 2026-05-18): Cover · The Process · Storyboard→Imageboard · Animatic (Claro) · O que fazemos · PUMA · **HBO Max · Instituto Caldeira · BK** · Negra Li · Chupa Chups · Olympikus · Como trabalhamos · Contato.

## Como retomar em nova sessão

1. Abrir o repo: `cd /Users/fabianoalbergaria/Desktop/alright-brand`
2. Cole no Claude: `Leia RESUME.md, CLAUDE.md e STATUS.md pra entender onde paramos. Auto mode ativo. Continuamos de onde a sessão anterior parou.`
3. Token Cloudflare ativo (precisa de Pages + R2 Edit): se perdeu, criar novo em https://dash.cloudflare.com/profile/api-tokens com permissões:
   - Account → Cloudflare Pages → Edit
   - Account → R2 Storage → Edit
   - Account → Account Settings → Read
   - User → User Details → Read
4. Deploy: `CLOUDFLARE_API_TOKEN=<token> ./deploy.sh`
5. Os arquivos originais pesados (`assets/work/real/`) não estão no Git — se mudou de PC, vai precisar do backup local pra recomprimir/regerar.

## Mudanças recentes (sessão 2026-05-20)

> Sessão cravou 2 grandes evoluções: **Paleta v2** (Orange Clay → Kodak Red) e **Brasa motion + companion mark**. Tudo deployado em main + kit.

### Brasa motion + companion mark (2026-05-20)

- **Motion asset `assets/motion/brasa-reveal.html`** (cópia mestra em `02-visual-core/logo/studies/brasa-motion-reveal.html`, 530KB self-contained com Bricolage + audio em base64). Animação: tela preta → ember acende sincado ao som do isqueiro → 3 wisps de fumaça desenham + cruzam → wordmark Alright fade-in. Edits feitos nesta sessão:
  - Color: `--orange-clay: #d97757` → `--kodak-red: #ed1c24`. Halo gradient RGB `rgba(217,119,87,...)` → `rgba(237,28,36,...)` (era hardcoded no canvas, escapou da v2 inicial — bug fix).
  - Label: botão "Acender" → **"Feel Alright"**.
  - Tempo: `audio.currentTime > 0 ? audio.currentTime : (Date.now() - startTimestamp) / 1000` — **virtual clock fallback** pra visual rodar mesmo se audio for bloqueado por autoplay policy.
  - postMessage: ao completar reveal + hold 3s, posta `{type: 'feel-alright-done'}` pro parent (overlay fecha sozinho).
  - URL param `?autoplay=1`: detecta via URLSearchParams, esconde start-overlay, dispara begin() em setTimeout 60ms. Sem param → start button fica visível (modo standalone OU shake mobile).
  - **Embed mode (2026-05-20)**: JS detecta `window.parent !== window` e adiciona classe `.embed` no body. CSS `.embed` esconde `.meta` chrome (labels "Studies · Brasa reveal") + maximiza `.stage` (width: min(100vw, 100vh×0.8), max-width 100vw, max-height 100vh) — símbolo Brasa pega quase toda a tela do celular.

- **Brasa logo system** (`tools/generate-brasa-logo.mjs`): 7 SVG variants + 18 PNGs:
  - `brasa-mark-{transparent,on-bone,on-dark}.svg` — 600×750 (4:5), wisps mark thickness ×1.4
  - `brasa-lockup-{on-bone,on-dark}.svg` — 600×980, brasa + Alright wordmark mono Bone (l Bold sem accent — reveal moment cinematic monochrome)
  - `brasa-square-transparent.svg` — 600×600, ember a 78% from top, mark thickness, sem bg (pra embedar sobre dark)
  - `brasa-favicon.svg` — 600×600, motion canon thickness ×1.0 (igual references)
  - Geometria: 3 cubic Beziers do motion canon (p0=ember, p1/p2/p3 control), base 8.5/7/5.5 → tip 0.8 logical px, ribbon outline gerado via offset polyline (Bezier sampling 80 pontos)
  - Mark wisps usam `MARK_BASEW_SCALE = 1.4` (frozen graphic chunkier que canvas frame-by-frame). Favicon usa CANON_WISPS direto (×1.0 — fidelidade total ao motion).

- **Favicon Brasa responsive** (`tools/generate-meta-assets.mjs`):
  - SVG favicon: motion canon ×1.0
  - PNG icon-16/32: wisps **×3.5** (chunky, legível em aba do browser — wisps sub-pixel a 16/32 sem isso)
  - PNG icon-48/64/180/192/512: canon ×1.0 (igual ao motion + refs)
  - Browser pega o PNG correto via `<link rel="icon" sizes="...">` — Safari prefere PNG, Chrome/Firefox podem usar SVG (que é canon, vai aparecer thin no 16/32 nesses casos mas o PNG-sizes-attr é o primário)
  - Cache-bust `?v=4 → ?v=5` em todos HTMLs (24 refs em 4 arquivos)

- **Brand book #logo section ganhou bloco 04.1 "Brasa · símbolo motion"**:
  - 4 tiles no grid: Mark on Dark, Mark on Bone, Lockup com Alright, Square 1080² (avatar/favicon)
  - Narrative: "wordmark é a voz, Brasa é o gesto"
  - Dodont expandido com 2 regras Brasa
  - Footnote técnica explicando geometria do motion canon

- **IG kit editor avatars trocados pra Brasa**:
  - Avatar A: `((l))` → **Brasa symbol** (ember + halo + 3 wisps cruzando). Inline `<img src="../assets/logo/svg/brasa-square-transparent.svg?v=brasa1">` sobre `.frame.bg-dark`.
  - Avatar B: `Al` → **Brasa lockup** (símbolo em cima + wordmark Alright em baixo com l Bold mono Bone, "l mais grosso" via weight 700, sem accent vermelho).
  - Avatar C: mantido wordmark `Alright` completo MAS com padding 80×100px adicionado (estava colado nas bordas) + font 400→260px com letter-spacing -0.02em (respiro nas bordas).
  - CSS `.avatar-symbol`/`.avatar-favicon` REMOVIDA, substituída por `.avatar-brasa-mark` + `.avatar-brasa-lockup`.
  - 3 avatar PNGs regerados via `tools/generate-instagram-avatars.mjs` (Playwright detacha cada frame, captura 1080×1080).
  - 11 PSDs do IG regerados — Background layer agora captura a brasa visual; text layers vetoriais mantidas pras peças com texto editável.
  - Editor hint + tooltip do botão PSD atualizados pra explicar o novo layer model.

- **IG kit estático (alright-instagram-kit.zip)**: profile-1080.png trocado de `((l))` por Brasa (símbolo motion). Editor: `tools/generate-instagram-kit.mjs` agora `import { readFileSync }` e inline-loads `brasa-square-transparent.svg`.

- **`deploy-kit.sh` fix**: estava copiando só `index.html` + `assets/social/instagram/*.png` + PSDs. Adicionei `cp "$ROOT/assets/logo/svg/"*.svg "$DIST/assets/logo/svg/"` — necessário pra resolver `<img src="../assets/logo/svg/brasa-square-transparent.svg">` no editor que tava retornando 404 antes.

- **Portfolio (index.html) ganhou "Feel Alright" no menu**:
  - Posicionado entre Cases e Contato no nav__links
  - Estilo: cor Kodak Red + ember pulsante (animação 2.4s cinematic, halo radial) antes do texto · hover inverte (bg Kodak Red, ember Bone)
  - Click → abre overlay in-page (`.feel-overlay` fixed inset:0 z-index 9999, bg dark, opacity 0→1 cinematic 0.9s) com iframe do motion + autoplay=1
  - Motion auto-toca (clique do menu É user gesture pra audio)
  - Após reveal completar + 3s, postMessage `feel-alright-done` → overlay fade-out → site volta no exato ponto
  - ESC ou botão "(( back )) · esc" (top-right, aparece 2.4s após overlay abrir) também fecham
  - Cmd/Ctrl/Shift/middle-click preservam fluxo nova-aba normal

- **Shake mobile aciona motion Brasa**:
  - `playReveal()` refatorada — agora chama `window.openFeel('assets/motion/brasa-reveal.html', { autoplay: false })` reusando 100% da infra do feel-overlay do menu
  - `autoplay: false` no shake porque devicemotion NÃO é user gesture estrito pra audio policy → motion abre com start-overlay "Feel Alright" visível, user precisa **tapar uma vez** pra audio tocar garantido
  - 1 tap extra é o preço explícito pra entregar audio confiável no mobile (owner: "muito importante")
  - openFeel + closeFeel expostos em `window.` pro shake handler (em IIFE separado) chamar
  - Reel video antigo de 32s fica como fallback defensivo (se feel-overlay não inicializou) — em prática nunca dispara

### Paleta v2 · Orange Clay → Kodak Red (2026-05-20)

- Accent primário substituído: Orange Clay `#d97757` (PMS 7578 C, Anthropic-aligned) → **Kodak Red `#ed1c24`** (Pantone 185 C, cinematic-film vibe alinhada com "Cada filme é um filme" + Kodak 2383 D55 LUT). Text-safe variant: Clay Deep `#8c4a32` (PMS 7595 C, 6.35:1 sobre Bone) → **Kodak Deep `#a6192e`** (Pantone 187 C, ~7:1 sobre Bone).
- Refator cascateou em ~70 arquivos: `tokens/color.tokens.json` v2 ($description marca evolução + components/hex/nomes), CSS vars `--orange-clay` → `--kodak-red` + `--clay-deep` → `--kodak-deep` em todos HTMLs live, RGB inline `(217,119,87)` → `(237,28,36)`, 4 SVGs logo + 2 SVGs press kit, favicon SVG + 7 PNGs, OG image, palette card press kit, 5 PNGs IG kit static, 11 PSDs IG editor, swatches `.aco`/`.ase` ("Alright · Kodak Red" + "Alright · Kodak Deep"), todos 4 zips (favicon, logo pack, press kit, IG kit) rebuilds, tokens zip rebuilt.
- Editor `instagram-kit/index.html` mantém CSS var `--orange` local mas value já é o vermelho (semantic debt aceita).
- Docs `CLAUDE.md`, `STATUS.md`, `RESUME.md`, `governance/README.md`, `assets/logo/README.md` atualizados. Phase docs históricas (`02-visual-core/logo/02-direction-C-detailed.md`, `03-color-aihouse-motion/color/01-color-system.md`) mantêm registro original + banner v2 no topo.
- Photoshop swatches `.aco` instalado em `~/Library/Application Support/Adobe/Adobe Photoshop {2024,2025,2026,(Beta)}/Presets/Color Swatches/Alright.aco` — preset disponível em todas as versões do PS instaladas.
- Fontes Bricolage Grotesque + JetBrains Mono (15 PNGs static) instaladas em `~/Library/Fonts/` pra Photoshop renderizar text layers das PSDs corretamente (PostScript names `BricolageGrotesque-Regular`, `JetBrainsMono-Medium` etc batem com o que o `tools/generate-instagram-psd.mjs` escreve no FontSet).

### Histórico anterior (referência)
- **Logo hierarchy revisada** (2026-05-14): C.1 Expressivo (l Orange Clay) promovido a Default. C.2 (l Bold dark) virou Mono fallback (B&W only). Reveal e Lockup inalterados.
- **Nomenclatura stale removida + redeploy** (2026-05-14): refs residuais a "C.1"/"C.2"/"expressivo" como labels de variante em `brand-book.html` (do/don't list) e `brand-book-print.html` (TOC + comment) atualizadas para a nova hierarquia (default · mono · reveal · lockup). Publicado em https://wearealright.pages.dev/ (deploy 3b9149ad).
- **Meta-docs alinhados ao owner Alright** (2026-05-14): `CLAUDE.md` (typo "Zuza substituiu Zuza" reescrito + refs operacionais → "o owner") + `STATUS.md` (rodapé e cabeçalho) + memória `project_owner_change.md` agora refletem o histórico Bera → Zuza (2026-05-10) → Alright (2026-05-14). Regras operacionais ficam estáveis a futuras rotações de owner.
- **Microsite legado deletado** (2026-05-14): `04-applications-microsite/site/` removido (era versão antiga não-deployada, superseded pelo brand book web v2 `brand-book.html` live). Refs stale atualizadas em `STATUS.md`, `governance/README.md` (também alinhada ao novo owner) e `02-microsite-specs.md` (marcado como deprecated).
- **Shake to reveal** (2026-05-14): no mobile, balançar o telefone agora dispara uma sequência cinematográfica em ~7.9s — overlay fade to Dark → wordmark Alright (l Orange Clay) sobe de baixo, escala, volta → `(( Look again. ))` (brackets em Orange Clay) sobe de baixo, hold no climax, lift off → site volta. iOS 13+ gated via tap-to-enable. Deploy `b0130276`. Implementação em `index.html` (CSS `.reveal-overlay*` + JS `playReveal()`).
- **Domínio em andamento** (2026-05-14): 4 custom domains registrados no Cloudflare Pages via API (apex + www + book + deck). Faltam ações manuais: criar zona DNS no Cloudflare (importa MX/SPF do GoDaddy), trocar nameservers no GoDaddy, configurar 2 Redirect Rules (book/deck). Email Google Workspace preservado durante a migração. Passo a passo em seção *Domínio*.
- **Domínio LIVE** (2026-05-15): migração completa. Nameservers flipados pra `karsyn.ns.cloudflare.com` + `mike.ns.cloudflare.com` no GoDaddy, zona DNS importou os 5 MX + 2 TXT do Google Workspace (email preservado), 4 CNAMEs proxied criados (apex + www + book + deck → wearealright.pages.dev), 2 Redirect Rules configuradas (book → /brand-book.html, deck → /deck/). Site servindo em https://wearealright.cc com SSL Google. Smoke test passou em todas as URLs.
- **Olympikus video swap** (2026-05-15): preview no R2 substituído pelo CORRE5_16X9 cut (1m15s, 19.5MB, sem áudio). Vimeo lightbox apontando pro novo upload com áudio: id `1192635125` (era `1191598803`).
- **Shake → reel** (2026-05-15): no mobile, balançar o telefone agora toca o reel vertical `alright-reel-vertical-30s` em fullscreen (32s, mute, R2). iOS autoplay block resolvido com tap-to-play fallback. Skip pill `(( skip ))` aparece após 0.8s. object-fit:contain pra não cortar `(( ))` nas laterais. 44px tap target + touch-action:manipulation pra resolver button-fica-lento. Implementação substituiu a sequência editorial logo+text anterior.
- **Favicon redesign `((l))`** (2026-05-16): novo design — brackets bone em volta do `l` Bold 700 Orange Clay sobre Dark. Substituiu o antigo `Al`. SVG + 7 PNG tamanhos (16/32/48/64/180/192/512). Cache-bust `?v=2` em todas as 4 superfícies (index, brand-book, brand-book-print, deck) pra forçar refresh nas abas. `l` centralizado vertical via tspan dy="4" no SVG e font-size 0.88em + translateY 0.07em nos PNGs (Bricolage `l` ascender é mais alto que cap-height dos brackets — sem compensação o l estoura por cima).
- **Business card · l Orange Clay** (2026-05-16): brand book web e print tinham CSS `b { font-weight: 700 }` sem cor — l aparecia dark. Adicionado `color: var(--kodak-red)` em `.app-tile--card .name b`, `.app-tile--email .sig b`, `.app-card__wordmark b`, `.app-card__sig-name b`.
- **3 cases novos no portfolio + deck + brand book web** (2026-05-18): HBO Max · Paulistão (vimeo `1193297749`), Instituto Caldeira (`1193297752`), BK · Visuals (`1193297750`). Inseridos depois do PUMA com alternação flip/no-flip preservada (cascade em Mizuno/Negra Li/Brime). Deck cresceu pra 14 slides com data-index e eyebrow renumerados. Brand book web ganhou Row 10 na House Look gallery. Brand book print NÃO atualizado (gallery A4 fixa, overflow risk — item 2 do Pendente).
- **Downloads section no brand book web** (2026-05-18): nova seção 10 com 6 cards: Press kit (hero dark span-12), Logo pack, Design tokens, Favicon kit, Brand book PDF, Instagram kit. Nav ganhou link `↓ Downloads` accent. 5 zips servidos em `assets/downloads/`: `alright-press-kit.zip` (740KB), `alright-logo-pack.zip` (2MB), `alright-tokens.zip` (7KB), `alright-favicon-kit.zip` (52KB), `alright-instagram-kit.zip` (199KB).
- **Press kit gerador** (2026-05-18): `tools/generate-press-kit.mjs` produz palette card 1080×1350 PNG + PDF A4 via Playwright. Press kit zip contém logos curados (5 SVG + 2 PNG), palette card (PNG + PDF), bio PT + EN, 3 stills (HBO Max, Olympikus, Negra Li), README com brand essentials, contact.txt.
- **Instagram kit editor — separate Pages project** (2026-05-18): editor HTML recuperado de edge cache (outra sessão tinha feito mas não commitado). Source em `instagram-kit/index.html`. Criado **NOVO Pages project `wearealright-kit`** (separado do main `wearealright`). Hostname `kit.wearealright.cc` movido pro novo project. CNAME atualizado pra `wearealright-kit.pages.dev`. Editor serve em `https://kit.wearealright.cc/` (root, sem `/instagram-kit/`). Cloudflare Access policy `Alright Kit` continua intacta com 2 destinations: `kit.wearealright.cc/*` (gated) + `wearealright.cc/instagram-kit/*` (defesa em profundidade, path não existe mais no main project). Deploys agora separados: `./deploy.sh` (main) + `./deploy-kit.sh` (kit).
- **Instagram kit · 10 PSDs gerados** (2026-05-18): novo `tools/generate-instagram-psd.mjs` (Playwright + ag-psd) renderiza cada peça do editor como PSD 2-camadas (`Background` solid raster + `Content` transparent overlay + composite flat). 10 PSDs novos em `assets/social/instagram/psd/`: 3 avatars (1080×1080) + 5 feed covers (1080×1350, exceto `feed-01-case` que continua hand-crafted com text layers vetoriais) + 2 vertical (1080×1920). `feed-06-split` ganhou bg split-62-bone-dark customizado. `PSD_AVAILABLE` flag no editor expandida pras 11 peças — botão "PSD · camadas ↓" agora renderiza pra todas.
- **Instagram kit · PSDs com text layers vetoriais** (2026-05-18, refactor): regra cravada pelo owner — wordmark Alright nunca muda (vai pro Background), todo OUTRO texto vira text layer editável (double-click no PS pra mudar). Generator refatorado: pra cada peça, hide nos selectors editáveis durante a captura do Background (preserva wordmark + decorações canon), depois extrai pra cada elemento editável `text` + `font` + `fontSize` + `color` + `baseline` + `lineHeight` + `tracking` via computed style, monta text layers vetoriais (`LayerTextData`) no ag-psd. Avatares (sem texto) caem pra 2-layer Background+Content. Loss aceito: spans inline com cor diferente (orange dot na quote, brk brackets) renderizam na cor dominante do elemento no PSD — composite flat (`psd.canvas`) ainda mostra fiel ao editor. Resultado: 11 PSDs com 2-6 layers cada (47 text layers totais), file size 267KB-4MB. Editor hint + tooltip atualizados explicando o novo modelo.
- **Brand book print v2** entregue (25 páginas A4, `05-deliverables/brand-book-print.html`, online em `/brand-book/print/`)
- **Deck v3 finalizado** com 11 slides (House Look removido), lightbox Vimeo em todos os cases, Animatic Claro como slide 04
- **Portfolio v3**: case Brime adicionado, todas as descrições nos cases, Mizuno/Olympikus com vídeos full sem corte, Negra Li com novo trecho (CORTE_NEGRA_LI)
- OG image + favicons + meta tags em todas as páginas (preview WhatsApp/social)
- Meta description simplificada pra `((Look again.))`
- Lockups centralizados (SVG transparente com text-anchor middle)
- AI disclosure revogada em 2026-05-13 (removida de todos os entregáveis)

## Estrutura final do deploy

```
PROJETO Pages wearealright (público)
wearealright.cc/                  ← LIVE (custom domain, SSL Google)
├── /                              → portfolio (index.html, 9 cases · menu Feel Alright · shake mobile dispara Brasa)
├── /brand-book.html               → brand book v2 (com seção 04.1 Brasa · símbolo motion)
├── /brand-book/print/             → brand book print v2 (Cmd+P → PDF)
├── /deck/                         → deck v3 (14 slides)
├── /assets/motion/brasa-reveal.html  → Feel Alright motion (embedded via overlay in-page)
├── /assets/logo/svg/brasa-*.svg   → Brasa companion mark variants
├── /assets/                       → todos os assets compartilhados
└── /assets/downloads/             → 5 zips (press kit, logo, tokens, favicon, IG kit) — v2 paleta + Brasa

www.wearealright.cc/              ← alias do apex (Cloudflare CNAME proxied)
book.wearealright.cc/             ← 301 → wearealright.cc/brand-book.html
deck.wearealright.cc/             ← 301 → wearealright.cc/deck/

PROJETO Pages wearealright-kit (interno · gated)
kit.wearealright.cc/              ← editor (Cloudflare Access · @wearealright.cc only)
├── /                              → instagram-kit/index.html (avatars Brasa)
├── /assets/logo/svg/              → SVGs do logo (necessário pro editor — deploy-kit.sh agora copia)
├── /assets/social/instagram/      → 3 avatar PNGs + 11 PSDs (Brasa + text layers vetoriais)

Canonical Pages URLs (sempre acessíveis):
- wearealright.pages.dev/         ← main project origem
- wearealright-kit.pages.dev/     ← kit project origem (TAMBÉM gated via Access)
```

## Scripts de deploy

| Comando | O que faz |
|---|---|
| `./deploy.sh` | Deploy do project `wearealright` (portfolio, brand book, deck, print, motion). Usa `.deploy-dist/` |
| `./deploy-kit.sh` | Deploy do project `wearealright-kit` (IG editor). Usa `.kit-dist/`. **Atualizado 2026-05-20**: agora copia `assets/logo/svg/*.svg` (necessário pro brasa-square-transparent.svg referenciado pelo editor) |
| `tools/generate-meta-assets.mjs` | Regenera favicon SVG + 7 PNG sizes + OG image. **v2 (2026-05-20)**: design Brasa (não mais `((l))`). Responsive thickness: PNG 16/32 com wisps ×3.5, PNG 48+ com canon ×1.0 |
| `tools/generate-brasa-logo.mjs` | **NEW 2026-05-20** · Gera as 7 variants Brasa (mark-{transparent,on-bone,on-dark} + lockup-{on-bone,on-dark} + square-transparent + favicon) + 18 PNGs. Geometria do motion canon (3 cubic Beziers) com ribbon outline via offset polyline. `MARK_BASEW_SCALE = 1.4` pras non-favicon variants |
| `tools/generate-instagram-avatars.mjs` | **NEW 2026-05-20** · Renderiza 3 avatars (a, b, c) a 1080×1080 via Playwright. Re-run depois de editar instagram-kit/index.html avatar markup |
| `tools/generate-instagram-kit.mjs` | Regenera os 5 templates PNG do IG kit zip estático. **v2 (2026-05-20)**: profile-1080.png agora é Brasa (inline-loads brasa-square-transparent.svg) |
| `tools/generate-instagram-psd.mjs` | Regenera as 11 PSDs do editor (Background raster + uma text layer vetorial por elemento editável). `--only=<id1,id2>` pra subset. PostScript font names mapeados via `fontPostScriptName()` |
| `tools/generate-swatches.mjs` | Gera `assets/downloads/alright.aco` (Photoshop) + `alright.ase` (Illustrator/InDesign/Affinity) com as 7 cores v2 nomeadas (Kodak Red, Kodak Deep, etc) |
| `tools/generate-press-kit.mjs` | Regenera palette card PNG + PDF + bundle do press kit (v2 paleta) |
| `tools/dump-font-names.mjs` | **NEW 2026-05-20** · Debug helper. Lê OpenType name table de TTF/OTF e dumpa Family / PostScript / Full name. Usado pra diagnosticar "missing fonts" no Photoshop |
| `tools/inspect-psd.mjs` · `preview-psd.mjs` · `extract-bg-layer.mjs` | Debug helpers pra PSDs do IG editor (inspeção de layers, render de composite, extract de bg layer) |
| `tools/screenshot-ig-editor.mjs` | **NEW 2026-05-20** · Captura screenshot do IG editor local em 1440×900 — útil pra mostrar pro owner sem precisar de Cloudflare Access auth |
| `tools/preview-brasa-favicon.mjs` · `preview-brasa-v2.mjs` · `preview-favicon-final.mjs` | Debug helpers de iteração — geram previews lado-a-lado das variantes Brasa (mantidos pra histórico do processo) |
| `tools/swatch-compare.mjs` · `swatch-mockup.mjs` | Debug helpers da paleta v2 — usados na escolha do Kodak Red |
| `tools/compress-work-assets.mjs` | Compressa originais em assets/work/real/ → web/ |

## Cache-bust state (2026-05-20)

| Asset | Param atual |
|---|---|
| Favicon (SVG + PNGs) | `?v=5` em todos 4 HTMLs (24 refs) |
| Logos SVG/PNG (alright-expressivo, default, reveal, lockup) | `?v=v2` |
| Brasa SVG (IG editor) | `?v=brasa1` |
| Tokens zip | (recriado, sem cache-bust no link) |

## Commits da sessão (cravados em main)

```
108033a Motion embed mode: hide chrome labels + maximize stage + audio no shake
56b9eab IG avatar-C padding + mobile shake aciona motion Brasa em vez do reel
73de2d8 IG editor cache-bust nas refs do brasa-square-transparent.svg
fb45df6 Fix: tela branca no Feel Alright + IG kit avatars 404
b64c788 Feel Alright autoplay: motion play imediato no overlay (botao menu = play)
dbf3319 Feel Alright in-page overlay + motion postMessage + halo color fix
ce391d7 Brasa · companion mark no brand book + Feel Alright nav + IG kit profile
0698d12 Brasa final: favicon responsive + IG avatars (((l))→brasa, Al→lockup)
fd84605 Brasa v2: ember Kodak Red, 'Feel Alright', favicon swap, logo variants, menu
1b8d12b Cache-bust: ?v=v2 nos logos SVG/PNG + ?v=3 favicons para v2 paleta
580c59c Paleta v2 · Orange Clay → Kodak Red (Pantone 185 C)
7ea7b5c CLAUDE.md + STATUS.md: paleta v2 spec auto-suficiente pra outros Claudes
5ae9c49 Brand: ship .aco + .ase swatches with the 7 named palette colors
f74a8e9 Brand book: embed Brasa motion reveal como signature motion (08.1)
632cedf Instagram kit PSDs: split base into Background (solid) + Brand (wordmark)
f7a0f22 Instagram kit PSDs: text layers per element, wordmark baked into bg
13bfc22 Instagram kit: generate 10 missing PSDs via Playwright + ag-psd
```

## Pra próxima sessão

**Acessos:**
- Token Cloudflare: owner tem o token em local seguro. Permissões necessárias: Pages Edit + R2 Edit + Account Read + User Read. Recriar em https://dash.cloudflare.com/profile/api-tokens se necessário.
- Cloudflare Access do `kit.wearealright.cc`: One-Time PIN via email `@wearealright.cc` (albergaria@wearealright.cc)

**Pendente conhecido:**

1. **Hero do `index.html` ainda em discussão** — owner instruiu antes que o formato do hero precisa ser discutido antes de adicionar Brasa lá. Atualmente o hero usa o vídeo `fundo-em-play.mp4` em loop. Possíveis caminhos: substituir vídeo por Brasa motion looped, ou adicionar Brasa como hero secundário, ou manter como está. **Aguardar decisão do owner.**
2. **Brand book print v2 com 3 cases novos** — gallery A4 da p.23 não inclui HBO Max + Instituto Caldeira + BK. Pra incluir, ou rearranja tiles (col-3 → col-2) ou cria p.26 nova. Não-bloqueante.
3. **Reels de venda** (pedido em 2026-05-15) — produzir sizzle 60-90s combinando cases já em R2 com ID visual v2 (Bricolage + `(( ))` + **Kodak Red** accent + cubic-bezier cinematic). Decisões pendentes: duração, plataformas, narrativa, trilha, voiceover, CTA.

**Como retomar:**
1. `cd /Users/fabianoalbergaria/Desktop/alright-brand/.claude/worktrees/sleepy-tu-58502b` (este worktree) OU criar novo a partir de main
2. `git pull origin main` (estamos sincronizados, último commit `108033a`)
3. Leia esse RESUME.md + CLAUDE.md (regras operacionais) + STATUS.md (fases)
4. Owner provavelmente vai dar próxima instrução — comum nessa fase pós-conclusão é manutenção, ajustes finos, ou novos deliverables pontuais

---

*Última atualização: 2026-05-20. Owner: Alright. Orquestrador: Claude Code.*
*Paleta v2 cravada nesta sessão · Brasa motion + companion mark integrados · Feel Alright menu + overlay in-page funcional · Mobile shake aciona Brasa.*
