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

- **Registrar**: GoDaddy (Zuza/Fabiano não consegue acessar atualmente)
- **DNS**: domaincontrol.com (nameservers GoDaddy)
- **Quando recuperar acesso**:
  1. Adicionar custom domain `wearealright.cc` no projeto Cloudflare Pages `wearealright`
  2. Adicionar registro CNAME no GoDaddy: `wearealright.cc` → `wearealright.pages.dev` (ou `@` apex via ALIAS/A record que o Cloudflare instrui)
  3. SSL automático

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

1. **Domínio custom** `wearealright.cc` — bloqueado pelo acesso GoDaddy (ver seção *Domínio* acima).
2. **Microsite legado** (`04-applications-microsite/site/index.html`) — versão antiga não-deployada (~3k linhas, sozinha na pasta `site/`). Decisão pendente: deletar, mover pra `archive/`, ou deixar como está.

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
