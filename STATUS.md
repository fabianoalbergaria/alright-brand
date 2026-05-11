# Alright Brand Guide — Status do projeto

> **Status atual**: ✅ **CONCLUÍDO** — 5/5 fases entregues.
> **Concluído em**: 2026-05-11. **Owner**: Zuza.

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
- **Logo cravado**: **Direção C dual-state**:
  - **Default C.2 (90% usos)**: `Alright` em Bricolage Grotesque, `l` central em Bold 700, resto em Regular 400.
  - **Expressivo C.1 (10% usos premium)**: `l` central em Orange Clay `#d97757`, resto em Dark `#141413`.
  - **Reveal `((A I r i g h t))`** espaçado: ato editorial deliberado, não default.
- **Fonte primária cravada**: **Bricolage Grotesque** (Atelier Triay, OFL grátis) + **JetBrains Mono** companion (Apache 2.0).
- **Override**: Bold 700 banido em uso editorial geral, exceção restrita ao accent C.2 do logo.
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
- HEX `#d97757` confirmado (revalidar contra PDF original do deck só quando produzir deck v2)
- Pantone `PMS 7578 C` ratificado pendente mostruário físico
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
- **Microsite v0 navegável**: `04-applications-microsite/site/index.html` — sidebar, search Cmd+K, copy-to-clipboard, specimen interativo, downloads, dark mode, WCAG AA.

### Fase 5 — Deck + PDF + Hand-off ✅

- **Deck de proposta v2**: `05-deliverables/deck-alright-v2.html` — 7 slides navegáveis por setas, substitui o deck antigo.
- **Brand book PDF**: `05-deliverables/brand-book-print.html` — ~25 páginas A4, otimizado para Cmd+P.
- **Governança**: `governance/README.md` — owner, cadência semestral, processo de mudanças, changelog.

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

*Última atualização: 2026-05-10. Owner: Zuza. Orquestrador: Claude Code.*
