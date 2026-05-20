# Resume — onde paramos (2026-05-14)

> Hand-off pra próxima sessão. Leia este arquivo + `CLAUDE.md` + `STATUS.md` antes de começar.

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

- **Paleta**: Kodak Red `#ed1c24`, Bone `#faf9f5`, Dark `#141413`, Stone `#3d3a35`, Slate Warm `#5b5750`, Mist `#ece8dc`, Kodak Deep `#a6192e`
- **Fontes**: Bricolage Grotesque (200-800 var) + JetBrains Mono
- **Logo** *(hierarquia 2026-05-14 · paleta v2 2026-05-20)*: Direção C dual-state — **Default = l Bold 700 Kodak Red** (90% usos, era C.1 Expressivo, promovido; cor evoluiu de Orange Clay → Kodak Red em 2026-05-20). **Mono fallback** = l Bold 700 Dark (era C.2 Default, agora só pra reprodução B&W). Reveal `((A I r i g h t))` inalterado.
- **Brand device**: `(( ))` com espaçamento
- **Big idea**: `((Look again.))`
- **Manifestos canon**: `We are alright.` · `Craft. Craft. And. More. Craft.` · `Cada filme é um filme.` · `No camera or set. No high costs.`
- **Motion**: `cubic-bezier(0.16, 1.0, 0.3, 1.0)` cinematic
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

## Mudanças recentes (últimas 24h)

- **Paleta v2 · Orange Clay → Kodak Red** (2026-05-20): brand evolution cravada pelo owner. Accent primário substituído: Orange Clay `#d97757` (PMS 7578 C, Anthropic-aligned) → **Kodak Red `#ed1c24`** (Pantone 185 C, cinematic-film vibe). Text-safe variant: Clay Deep `#8c4a32` (PMS 7595 C, 6.35:1 sobre Bone) → **Kodak Deep `#a6192e`** (Pantone 187 C, ~7:1 sobre Bone). Refator cascateou em: `tokens/color.tokens.json` v2 ($description marca evolução + components/hex/nomes atualizados), CSS vars `--orange-clay` → `--kodak-red` + `--clay-deep` → `--kodak-deep` em todos HTMLs live, RGB inline `(217,119,87)` → `(237,28,36)`, 4 SVGs de logo + 2 SVGs press kit regenerados, favicon SVG + 7 PNGs regenerados, OG image regenerado, palette card do press kit regenerado, 5 PNGs do IG kit static regenerados, 11 PSDs do IG editor regenerados, swatches `.aco`/`.ase` regenerados com nomes "Alright · Kodak Red" + "Alright · Kodak Deep", todos 4 zips (favicon, logo pack, press kit, IG kit) rebuilds, tokens zip rebuilt. Editor `instagram-kit/index.html` mantém CSS var `--orange` local mas value já é o vermelho. Docs `CLAUDE.md`, `STATUS.md`, `RESUME.md`, `governance/README.md`, `assets/logo/README.md` atualizados. Phase docs históricas (`02-visual-core/logo/02-direction-C-detailed.md`, `03-color-aihouse-motion/color/01-color-system.md`) mantêm registro original + banner indicando v2 evolution. Anthropic-alignment narrative removida — Kodak Red carrega vibe filmica/cinematic (Kodak 2383 LUT) consistente com "Cada filme é um filme".
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
├── /                              → portfolio (index.html, 9 cases incl. 3 novos)
├── /brand-book.html               → brand book web v2 com Downloads section
├── /brand-book/print/             → brand book print v2 (Cmd+P → PDF)
├── /deck/                         → deck v3 (14 slides)
├── /assets/                       → todos os assets compartilhados
└── /assets/downloads/             → 5 zips (press kit, logo, tokens, favicon, IG kit)

www.wearealright.cc/              ← alias do apex (Cloudflare CNAME proxied)
book.wearealright.cc/             ← 301 → wearealright.cc/brand-book.html
deck.wearealright.cc/             ← 301 → wearealright.cc/deck/

PROJETO Pages wearealright-kit (interno · gated)
kit.wearealright.cc/              ← editor direto (após Cloudflare Access)
├── /                              → instagram-kit/index.html (editor)
└── /assets/social/instagram/      → avatars + 1 PSD master

Canonical Pages URLs (sempre acessíveis):
- wearealright.pages.dev/         ← main project origem
- wearealright-kit.pages.dev/     ← kit project origem (TAMBÉM gated via Access)
```

## Scripts de deploy

| Comando | O que faz |
|---|---|
| `./deploy.sh` | Deploy do project `wearealright` (portfolio, brand book, deck, print). Usa `.deploy-dist/` |
| `./deploy-kit.sh` | Deploy do project `wearealright-kit` (Instagram editor). Usa `.kit-dist/` |
| `tools/generate-meta-assets.mjs` | Regenera favicon SVG + 7 PNG sizes + OG image |
| `tools/generate-instagram-kit.mjs` | Regenera os 5 templates PNG do Instagram kit zip estático |
| `tools/generate-instagram-psd.mjs` | Regenera as 11 PSDs do editor (Background raster + uma text layer vetorial por elemento editável). `--only=<id1,id2>` pra subset. PostScript font names mapeados via `fontPostScriptName()` |
| `tools/generate-swatches.mjs` | Gera `assets/downloads/alright.aco` (Photoshop) + `alright.ase` (Illustrator/InDesign/Affinity) com as 7 cores nomeadas |
| `tools/generate-press-kit.mjs` | Regenera palette card PNG + PDF + bundle do press kit |
| `tools/compress-work-assets.mjs` | Compressa originais em assets/work/real/ → web/ |

---

*Última atualização: 2026-05-18. Owner: Alright. Orquestrador: Claude Code.*
