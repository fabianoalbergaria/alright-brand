# Alright Brand Guide — Status do projeto

> **Status atual**: ✅ **CONCLUÍDO + REBRAND v3 COMPLETO** — 5/5 fases entregues + rebrand v3 100% propagado em portfolio, IG kit, **brand book HTML/print** e **deck v3** (2026-05-26).
> **Concluído em**: 2026-05-11. **Last major update**: 2026-05-26 (rebrand v3 — logo novo, paleta nova, fontes novas, Brasa arquivado, **brand book + deck refeitos**). **Owner atual**: Alright (histórico de ownership em `CLAUDE.md`).

---

## 🔥 Rebrand v3 (2026-05-26)

Owner cravou rebrand completo. Mudanças fundamentais:

- **Logo**: Direção C dual-state (Alright + l Bold) → wordmark **"alright" lowercase** rounded heavy (lettering feito na mão, sem fonte real) + `®` register
- **Símbolo**: Brasa (ember + halo + 3 wisps) → **3 figuras humanas correndo com laptops** em círculo orgânico/blob
- **Paleta**: Kodak Red `#ed1c24` → **Orange Alright `#FF5D36`** (laranja-coral vibrante) + NOVO **Green-lime `#EAEE59`** accent + Dark `#141413` → **Black puro `#000000`** + Bone mantido
- **Fontes**: Bricolage Grotesque + JetBrains Mono → **Monument Grotesk** (sans/mono) + **Neue Haas Display** (display Bold em titles)
- **Sistema Brasa**: ARQUIVADO em `assets/archive/v2-brasa/` (motion HTML + 7 SVGs + 24 PNGs). Feel Alright menu/overlay + shake mobile removidos do portfolio.
- **Regra cravada**: bone/preto padrão · laranja só pra accents pontuais (CTAs, plays sobre vídeos, brackets `(( ))` editoriais)

### Live em produção (após rebrand v3)
- **Portfolio** https://wearealright.cc — logo bone sobre vídeo, Neue Haas Bold display, sem Brasa
- **IG kit** https://kit.wearealright.cc — 16 PSDs v3 (wordmark = 3 image layers stacked Dark/Bone/Orange), avatars bone, swatches Photoshop atualizados
- **Tokens** `tokens/color.tokens.json` v3.0 + legacy v2 preservado em `tokens/legacy/`
- **Meta assets** (OG image + favicons): símbolo bone sobre Black puro, fontes Neue Haas + Monument Mono

### Fase 3 (Brand book) + Fase 5 (Deck) — ✅ CONCLUÍDOS em 2026-05-26
- **brand-book.html** (web) refeito em v3: nav com Wordmark_Black img · sections logo/type/color completamente reescritas · 2 sections novas (Illustrations 21 PNGs + Buttons 4 variants) · Brasa 04.1 removido · Brasa 08.1 motion removido · favicons em símbolo bone sobre Black · downloads/footer atualizados
- **brand-book-print.html** (A4 25 páginas) refeito em v3: tokens + fonts + type scale · cover com Logo_White v3 · TOC com refs v3 · pages 09-13 Logo (lockup principal + símbolo + brand device + Do/Don't) · pages 14-17 Type (Neue Haas Display + Monument Mono) · pages 18-21 Color (8 swatches incluindo Green-lime novo) · page 24 Apps (wordmark img v3) · page 25 Colophon v3.0
- **deck-alright-v3.html** (14 slides) refeito em v3: tokens + fonts + type scale · cover com Logo_White v3 · HUD wordmark v3 · CTA com lockup ((We Are Alright)) em texto display Bold · favicon section atualizado

---

## ✅ Fases concluídas (5 de 5)

### Fase 0 — Pré-produção / Discovery ✅
- 16 thumbnails do deck atual capturados via MCP Canva: `00-discovery/deck-thumbnails/page-01.png` a `page-16.png`.
- Dossiê de 25+ marcas de referência em 4 categorias (produtoras AI-first, produtoras tradicionais, tech AI, marcas contraculturais): `00-discovery/references/dossier-visual-references.md` (2.891 palavras).
- Insights consolidados + tese visual proposta: `00-discovery/insights.md`.
- **Tese visual cravada por Bera**: editorial-craft com tech sub-rosa (postura A24/Smuggler + paleta warm Anthropic + sistema Stink + fluidez Mschf).

### Fase 1 — Estratégia + Verbal + Big idea ✅
- Brand strategy formalizada (12 capítulos): `01-strategy-verbal/01-brand-strategy.md` (3.175 palavras).
- Sistema verbal completo + regra bilingüe + tom + vocabulário: `01-strategy-verbal/02-verbal-system.md` (3.923 palavras).
- 9 alternativas de Big idea geradas: `01-strategy-verbal/03-big-idea-options.md` (2.350 palavras).
- **Big idea cravada por Bera**: **`((Look again.))`** — a marca convida o público a fazer descobertas em vez de explicá-las.
- **5 decisões estratégicas cravadas**:
  1. Big idea = `((Look again.))`
  2. Tier-alvo = tier-1 internacional + mid-market BR secundário
  3. Lockup `((We Are Alright))` = EN-only sempre
  4. Naming de produtos futuros = nomes neutros sem prefixo "Alright" (modelo Mschf/A24)
  5. Bilíngue "por dentro" = PT/EN coexistem como pensamentos distintos, não traduções

### Fase 2 — Logo + Tipografia ✅
- Logo system (3 direções avaliadas): `02-visual-core/logo/01-logo-system.md`.
- Direção C detalhada com 3 variações de accent: `02-visual-core/logo/02-direction-C-detailed.md`.
- Sistema tipográfico cravado: `02-visual-core/typography/01-type-system.md`.
- **Logo cravado**: **Direção C dual-state** *(hierarquia atualizada 2026-05-14)*:
  - **Default (90% usos)**: `Alright` em Bricolage Regular 400, `l` central em **Bold 700 Kodak Red `#ed1c24`**. (Era C.1 Expressivo — promovido a default por codificar o uso real em portfolio/deck/site/OG/favicon.)
  - **Mono fallback**: `l` central em Bold 700 Dark `#141413`. Reservado a reprodução B&W obrigatória (jornal, fax, bordado, gravação laser, co-branding com paleta conflitante). (Era C.2 Default.)
  - **Reveal `((A I r i g h t))`** espaçado: ato editorial deliberado, não default.
- **Fonte primária cravada**: **Bricolage Grotesque** (Atelier Triay, OFL grátis) + **JetBrains Mono** companion (Apache 2.0).
- **Override**: Bold 700 banido em uso editorial geral, exceção restrita ao **l central do logo** (sempre Kodak Red no default, dark no mono fallback).
- **Decisões cravadas**:
  - "Alright Dings" → Fase 3+ futura (não agora)
  - Reveal `((A I r i g h t))` → ativo oficial codificado
  - Co-branding com cliente → só wordmark `Alright`, sem `(( ))`

### Fase 3 — Paleta + House Look + Motion ✅
- Color system cravado: `03-color-aihouse-motion/color/01-color-system.md` (3.435 palavras).
- Color tokens (W3C DTCG): `tokens/color.tokens.json` (52 tokens).
- AI House Look + Capítulo Brand & AI: `03-color-aihouse-motion/ai-house-look/01-house-look.md` (4.373 palavras).
- Motion principles + tokens: `03-color-aihouse-motion/motion/01-motion-principles.md` (~3.300 palavras) + `tokens/motion.tokens.json`.

**Decisões cravadas (auto mode)**:
- Accent primário **v2 (2026-05-20)**: Kodak Red HEX `#ed1c24` · Pantone **185 C**. Text-safe Kodak Deep `#a6192e` · Pantone **187 C**. Evoluiu da v1 cravada na Fase 3 (Orange Clay `#d97757` / PMS 7578 C, Anthropic-aligned). Mostruário físico para 185 C/187 C pendente.
- LUT: começar com Kodak 2383 D55 comercial + budget custom Alright Q3
- Prompts canônicos: publicar 3 dos 8 (#1, #4, #5)
- Biblioteca de mood refs: local com CSV
- Disclosure tipográfico: sentence case (não caps)
- Hover C.2→C.1: ON apenas em hero do microsite, OFF universalmente
- `((Look again.))` em hero: fade único 1.4s cinematic (não typewriter)

---

## ✅ Fase 4 — Aplicações + Microsite v0 ✅

- Specs de aplicações (site, social, email, deck): `04-applications-microsite/01-applications.md`
- Specs do microsite: `04-applications-microsite/02-microsite-specs.md`
- Brand book visual (aprovado por Zuza): `04-applications-microsite/brand-book.html`
- Preview de ID visual: `04-applications-microsite/id-visual-preview.html`
- **Brand book web v2 navegável** (sucessor do Microsite v0, que foi deletado em 2026-05-14): `brand-book.html` na raiz, deployado em `/brand-book.html` em https://wearealright.pages.dev/ — todas as seções da marca em uma página, light mode default, responsivo.

### Fase 5 — Deck + PDF + Hand-off ✅

- **Deck de proposta v2**: `05-deliverables/deck-alright-v2.html` — 7 slides navegáveis por setas, substitui o deck antigo.
- **Brand book PDF**: `05-deliverables/brand-book-print.html` — ~25 páginas A4, otimizado para Cmd+P.
- **Governança**: `governance/README.md` — owner, cadência semestral, processo de mudanças, changelog.

---

## ✅ Evoluções pós-conclusão (2026-05-20)

> Mudanças cravadas pelo owner após a entrega das 5 fases. Tudo deployado em main + kit. Detalhes operacionais em `RESUME.md` seção "Mudanças recentes".

### Paleta v2 · Kodak Red

- Accent primário: Orange Clay `#d97757` (PMS 7578 C) → **Kodak Red `#ed1c24`** (Pantone 185 C)
- Text-safe: Clay Deep `#8c4a32` (PMS 7595 C) → **Kodak Deep `#a6192e`** (Pantone 187 C)
- Narrative: cinematic film stock (Kodak 2383 D55 LUT) substitui "Anthropic-aligned warm clay"
- Refator cascateou em ~70 arquivos (tokens v2 + HTMLs + SVGs + 11 PSDs + favicons + zips + swatches `.aco`/`.ase`)
- Docs: `tokens/color.tokens.json` v2.0 + banner v2 em `03-color-aihouse-motion/color/01-color-system.md` + `02-visual-core/logo/02-direction-C-detailed.md`

### Brasa motion + companion mark

- **Motion asset**: `assets/motion/brasa-reveal.html` (master em `02-visual-core/logo/studies/brasa-motion-reveal.html`). 530KB self-contained com Bricolage + audio em base64. Geometria: 3 cubic Beziers cruzando (ribbon outline), ember a 78% from top, halo radial.
- **Companion logo**: Brasa = ember Kodak Red + halo + 3 wisps Bone cruzando. 7 variants em `assets/logo/svg/brasa-{mark,lockup,square,favicon}-*.svg`. **Wordmark = voz, Brasa = gesto.**
- **Favicon**: trocado de `((l))` por Brasa. Responsive thickness (×3.5 nos 16/32, canon ×1.0 nos 48+).
- **Brand book**: seção 04.1 "Brasa · símbolo motion" adicionada dentro de #logo.
- **IG kit avatars**: A → Brasa symbol · B → Brasa + Alright lockup · C → wordmark com padding generoso.

### Feel Alright system

- Portfolio menu ganhou link "Feel Alright" (entre Cases e Contato, com ember pulsante)
- Click → abre overlay in-page (`.feel-overlay` fixed inset:0) com iframe do motion + `?autoplay=1` (clique É user gesture pra audio)
- Motion auto-toca → reveal → postMessage `feel-alright-done` → overlay fade-out → site volta no exato ponto
- Mobile shake também dispara o motion (via `window.openFeel` exposto), com `autoplay: false` porque devicemotion não conta como gesture pra audio policy → user dá 1 tap pra audio
- ESC ou botão "(( back )) · esc" também fecham

---

## 📊 Métricas

- **Fases concluídas**: 5 / 5 (100%)
- **Documentos produzidos**: 8 documentos markdown + 5 entregáveis HTML + 1 governança
- **Token files**: 2 (color.tokens.json + motion.tokens.json) com 83 tokens
- **Subagentes disparados**: ~16 subagentes (todos em janelas de contexto isoladas)
- **Decisões estratégicas cravadas**: 24+ (escopo, idioma, Big idea, logo, fonte, paleta, house look, motion, etc.)

---

## 🗂️ Estrutura de arquivos

```
alright-brand/
├── README.md
├── STATUS.md                                  ← este arquivo
├── 00-discovery/
│   ├── deck-thumbnails/                       (16 PNGs)
│   ├── references/dossier-visual-references.md
│   └── insights.md
├── 01-strategy-verbal/
│   ├── 01-brand-strategy.md                   (Big idea no §12)
│   ├── 02-verbal-system.md
│   └── 03-big-idea-options.md
├── 02-visual-core/
│   ├── logo/
│   │   ├── 01-logo-system.md                  (3 direções avaliadas)
│   │   └── 02-direction-C-detailed.md         (DECISÃO FINAL no topo)
│   └── typography/
│       └── 01-type-system.md                  (Bricolage cravada)
├── 03-color-aihouse-motion/
│   ├── color/01-color-system.md
│   ├── ai-house-look/01-house-look.md
│   └── motion/01-motion-principles.md
├── 04-applications-microsite/                 ⏸️ vazia
├── 05-deliverables/                           ⏸️ vazia
├── assets/                                    ⏸️ vazia (logos/fontes/icons serão depositados aqui)
├── tokens/
│   ├── color.tokens.json
│   └── motion.tokens.json
└── governance/                                ⏸️ vazia
```

---

*Última atualização: 2026-05-26. Owner: Alright. Orquestrador: Claude Code.*
*Rebrand v3 100% propagado · brand book HTML+print + deck refeitos · zero refs legacy v2 nesses 3 entregáveis.*
