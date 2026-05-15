# Resume — onde paramos (2026-05-14)

> Hand-off pra próxima sessão. Leia este arquivo + `CLAUDE.md` + `STATUS.md` antes de começar.

---

## URLs ao vivo

- **Portfolio**: https://wearealright.pages.dev/
- **Brand Book**: https://wearealright.pages.dev/brand-book.html
- **Deck**: https://wearealright.pages.dev/deck/
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

- **Paleta**: Orange Clay `#d97757`, Bone `#faf9f5`, Dark `#141413`, Stone `#3d3a35`, Slate Warm `#5b5750`, Mist `#ece8dc`, Clay Deep `#8c4a32`
- **Fontes**: Bricolage Grotesque (200-800 var) + JetBrains Mono
- **Logo** *(hierarquia atualizada 2026-05-14)*: Direção C dual-state — **Default = l Bold 700 Orange Clay** (90% usos, era C.1 Expressivo, promovido). **Mono fallback** = l Bold 700 Dark (era C.2 Default, agora só pra reprodução B&W). Reveal `((A I r i g h t))` inalterado.
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

## Domínio

- **Registrar**: GoDaddy (acesso recuperado em 2026-05-14)
- **DNS atual**: ainda em `domaincontrol.com` (GoDaddy)
- **Email ativo (NÃO PODE QUEBRAR)**: Google Workspace via 5 MX records `aspmx.l.google.com` + alts. TXT SPF `v=spf1 include:dc-aa8e722993._spfm.wearealright.cc ~all` + `google-site-verification=mHJsxF912JuJ-...` — também preservar.
- **Apex aponta hoje** (parking): A `15.197.148.33` + A `3.33.130.190` (a remover quando migrar).

### Estado da configuração (2026-05-14)

**Cloudflare Pages — 4 custom domains registrados** (todos status `pending`, SSL provider: Google):

| Domain | ID |
|---|---|
| `wearealright.cc` (apex) | `e08198dc-070c-4e60-9d99-b8d6414aa66a` |
| `www.wearealright.cc` | `85955d23-32ae-40e1-a7ed-a326a6d11d74` |
| `book.wearealright.cc` (vai redirect → `/brand-book.html`) | `ad53a2ae-2563-44c8-92f0-7d6340713351` |
| `deck.wearealright.cc` (vai redirect → `/deck/`) | `c5b1a14f-7572-44b8-93e0-8053224e8dbb` |

### Passos restantes (faltam ações manuais)

1. **Adicionar wearealright.cc como zona no Cloudflare DNS** (dash.cloudflare.com → "Add a site" → Free plan). Cloudflare faz scan do GoDaddy e mostra registros pra importar. **Conferir** que importou os 5 MX + 2 TXT (SPF + google-verification). Os 2 A de parking podem ser deletados/ignorados.
2. **Trocar nameservers no GoDaddy** dos `ns61/ns62.domaincontrol.com` pros 2 que o Cloudflare entregar. Propagação geralmente <1h, máximo 48h.
3. **Configurar CNAMEs no Cloudflare DNS** (proxied 🟠) depois da migração:
   - `@` → `wearealright.pages.dev` (apex via flattening do CF)
   - `www` → `wearealright.pages.dev`
   - `book` → `wearealright.pages.dev`
   - `deck` → `wearealright.pages.dev`
4. **Configurar 2 Redirect Rules** (Cloudflare → Rules → Redirect Rules):
   - `hostname eq "book.wearealright.cc"` → 301 → `https://wearealright.cc/brand-book.html`
   - `hostname eq "deck.wearealright.cc"` → 301 → `https://wearealright.cc/deck/`
5. **SSL provisiona automático** ~15min depois que DNS verificar.

## Vídeos no portfolio (com Vimeo lightbox)

| Case | Preview R2 | Vimeo (com som) |
|---|---|---|
| Chupa Chups Art Gallery | `chupa-chups-art-gallery.mp4` | 1191600944 |
| Chupa Chups Surreal Dream | `chupa-chups-surreal-dream.mp4` | 1191600943 |
| Chupa Chups Surreal Unboxing | `chupa-chups-surreal-unboxing.mp4` | 1191600942 |
| Chupa Chups Forever Fun | `chupa-chups-forever-fun.mp4` | 1191599456 |
| Olympikus Corre 5 | `olympikus-corre5-full.mp4` | 1191598803 |
| PUMA Portugal | `puma-portugal.mp4` | 1191599038 |
| Mizuno x Botafogo | `mizuno-botafogo.mp4` | 1191597286 |
| Negra Li Lollapalooza | `negra-li-visual.mp4` | 1192041713 |
| Brime · Tem uma sexta | `brime-sexta-na-quarta.mp4` | 1192047832 |
| Claro · Animatic (deck slide 04) | `claro.mp4` (preview) + `claro-full.mp4` (com áudio, sem Vimeo) | — |

## Pendente

1. **Domínio custom** `wearealright.cc` — Cloudflare side já pronto (4 custom domains registrados: apex, www, book, deck). Falta ação manual no dashboard Cloudflare (criar zona + import DNS) e GoDaddy (trocar nameservers). Passo a passo cravado na seção *Domínio* acima.
2. **Reels de venda** *(pedido em 2026-05-15)* — produzir reel/sizzle pra vender o trabalho. Bruto: vídeo curto (60–90s típico) combinando cases já existentes em R2 (Chupa Chups, PUMA, Olympikus, Mizuno, Negra Li, Brime, Claro) com a ID visual da marca (Bricolage Grotesque + `(( ))` + Orange Clay accent + motion `cubic-bezier(0.16,1.0,0.3,1.0)`). Decisões a cravar com o owner antes de produzir: duração final, plataformas alvo (Instagram Reels / YouTube Shorts / LinkedIn / TikTok), narrativa (cases por categoria? ordem cronológica? climax + reveal?), trilha, presença ou não de voiceover, e se tem CTA final (link, contato, ou só lockup).

## Deck — composição final

11 slides (House Look removido em 2026-05-14): Cover · The Process · Storyboard→Imageboard · Animatic (Claro) · O que fazemos · PUMA · Negra Li · Chupa Chups · Olympikus · Como trabalhamos · Contato.

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

- **Logo hierarchy revisada** (2026-05-14): C.1 Expressivo (l Orange Clay) promovido a Default. C.2 (l Bold dark) virou Mono fallback (B&W only). Reveal e Lockup inalterados.
- **Nomenclatura stale removida + redeploy** (2026-05-14): refs residuais a "C.1"/"C.2"/"expressivo" como labels de variante em `brand-book.html` (do/don't list) e `brand-book-print.html` (TOC + comment) atualizadas para a nova hierarquia (default · mono · reveal · lockup). Publicado em https://wearealright.pages.dev/ (deploy 3b9149ad).
- **Meta-docs alinhados ao owner Alright** (2026-05-14): `CLAUDE.md` (typo "Zuza substituiu Zuza" reescrito + refs operacionais → "o owner") + `STATUS.md` (rodapé e cabeçalho) + memória `project_owner_change.md` agora refletem o histórico Bera → Zuza (2026-05-10) → Alright (2026-05-14). Regras operacionais ficam estáveis a futuras rotações de owner.
- **Microsite legado deletado** (2026-05-14): `04-applications-microsite/site/` removido (era versão antiga não-deployada, superseded pelo brand book web v2 `brand-book.html` live). Refs stale atualizadas em `STATUS.md`, `governance/README.md` (também alinhada ao novo owner) e `02-microsite-specs.md` (marcado como deprecated).
- **Shake to reveal** (2026-05-14): no mobile, balançar o telefone agora dispara uma sequência cinematográfica em ~7.9s — overlay fade to Dark → wordmark Alright (l Orange Clay) sobe de baixo, escala, volta → `(( Look again. ))` (brackets em Orange Clay) sobe de baixo, hold no climax, lift off → site volta. iOS 13+ gated via tap-to-enable. Deploy `b0130276`. Implementação em `index.html` (CSS `.reveal-overlay*` + JS `playReveal()`).
- **Domínio em andamento** (2026-05-14): 4 custom domains registrados no Cloudflare Pages via API (apex + www + book + deck). Faltam ações manuais: criar zona DNS no Cloudflare (importa MX/SPF do GoDaddy), trocar nameservers no GoDaddy, configurar 2 Redirect Rules (book/deck). Email Google Workspace preservado durante a migração. Passo a passo em seção *Domínio*.
- **Brand book print v2** entregue (25 páginas A4, `05-deliverables/brand-book-print.html`, online em `/brand-book/print/`)
- **Deck v3 finalizado** com 11 slides (House Look removido), lightbox Vimeo em todos os cases, Animatic Claro como slide 04
- **Portfolio v3**: case Brime adicionado, todas as descrições nos cases, Mizuno/Olympikus com vídeos full sem corte, Negra Li com novo trecho (CORTE_NEGRA_LI)
- OG image + favicons + meta tags em todas as páginas (preview WhatsApp/social)
- Meta description simplificada pra `((Look again.))`
- Lockups centralizados (SVG transparente com text-anchor middle)
- AI disclosure revogada em 2026-05-13 (removida de todos os entregáveis)

## Estrutura final do deploy

```
wearealright.pages.dev/
├── /                              → portfolio (index.html)
├── /brand-book.html               → brand book web v2
├── /brand-book/print/             → brand book print v2 (Cmd+P → PDF)
├── /deck/                         → deck v3 (11 slides)
└── /assets/                       → todos os assets compartilhados
```

---

*Última atualização: 2026-05-14. Owner: Alright. Orquestrador: Claude Code.*
