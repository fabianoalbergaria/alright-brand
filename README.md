# Alright — Brand Guide

Projeto de brand identity para **Alright**, produtora audiovisual AI-first (SP).

> **Importante**: o nome da empresa é **Alright**. `((We Are Alright))` é o lockup expressivo. Brand device tipográfico: `(( ))`. **Big idea cravada**: `((Look again.))`.

---

## 🚀 Para começar (ou retomar) este projeto

| Você é... | Leia primeiro |
|---|---|
| **Migrando para outra máquina/conta** | [`MIGRATION.md`](MIGRATION.md) — guia completo de pré-requisitos + retomada |
| **Retomando uma sessão pausada** | [`STATUS.md`](STATUS.md) — estado atual + checklist de retomada |
| **Querendo entender o histórico de decisões** | [`HISTORY.md`](HISTORY.md) — todas as decisões cravadas em ordem cronológica |
| **Querendo o plano completo de execução** | [`PLAN.md`](PLAN.md) — plano original de 5 fases |
| **Verificando o ambiente** | rode `./bootstrap.sh` para validação automática |

---

## Status

**3 de 5 fases concluídas** (60%). Pausado em **2026-05-10** ao final da Fase 3.

| Fase | Entregável principal | Status |
|---|---|---|
| 0 | Dossiê de referências + thumbnails do deck | ✅ |
| 1 | Brand strategy + Sistema verbal + Big idea `((Look again.))` | ✅ |
| 2 | Logo Direção C dual-state + Bricolage Grotesque + JetBrains Mono | ✅ |
| 3 | Paleta + House Look AI-first + Motion principles + tokens DTCG | ✅ |
| 4 | Aplicações priorizadas + Microsite v0 (huashu-design) | ⏸️ |
| 5 | Deck Alright corrigido + Brand book PDF + Hand-off | ⏸️ |

---

## Estrutura

```
alright-brand/
├── README.md                              ← este arquivo
├── MIGRATION.md                           ← guia de migração para outra máquina
├── STATUS.md                              ← estado atual + retomada
├── HISTORY.md                             ← histórico de decisões cravadas
├── PLAN.md                                ← plano completo do projeto
├── CLAUDE.md                              ← regras project-level (huashu-design manual, etc)
├── bootstrap.sh                           ← verificação automática do ambiente
├── .gitignore
│
├── 00-discovery/                          [Fase 0 ✅]
│   ├── deck-thumbnails/                    16 PNGs do deck atual
│   ├── references/                         dossiê 25+ marcas
│   └── insights.md
├── 01-strategy-verbal/                    [Fase 1 ✅]
│   ├── 01-brand-strategy.md                12 capítulos (Big idea no §12)
│   ├── 02-verbal-system.md                 tom + regra bilíngue + vocabulário
│   └── 03-big-idea-options.md              9 alternativas (histórico)
├── 02-visual-core/                        [Fase 2 ✅]
│   ├── logo/
│   │   ├── 01-logo-system.md               3 direções (histórico)
│   │   └── 02-direction-C-detailed.md      decisão final dual-state
│   └── typography/
│       └── 01-type-system.md               Bricolage + JetBrains Mono
├── 03-color-aihouse-motion/               [Fase 3 ✅]
│   ├── color/01-color-system.md            paleta + WCAG
│   ├── ai-house-look/01-house-look.md      5 princípios + capítulo Brand & AI
│   └── motion/01-motion-principles.md      5 princípios + animação do logo
├── 04-applications-microsite/             [Fase 4 ⏸️]
├── 05-deliverables/                       [Fase 5 ⏸️]
├── assets/                                [populado pelo bootstrap.sh]
│   ├── logo/
│   ├── fonts/                              ← Bricolage + JetBrains Mono
│   └── icons/
├── tokens/                                [Fase 3 ✅]
│   ├── color.tokens.json                   52 tokens DTCG
│   └── motion.tokens.json
└── governance/                            [Fase 5 ⏸️]
```

---

## Métricas

- **8 documentos markdown** produzidos (~22.500 palavras)
- **2 token files** W3C DTCG válidos
- **16+ decisões estratégicas** cravadas com Bera
- **~10 subagentes** disparados em janelas de contexto isoladas

---

## Big idea + Pilares

- **Big idea**: `((Look again.))` — a marca convida o público a fazer descobertas em vez de explicá-las.
- **Trocadilho estrutural**: em sans-serif, `I` maiúsculo = `l` minúsculo, então `Alright` = `AIright` (mesma palavra escrita).
- **Tese visual**: editorial-craft com tech sub-rosa.
- **Logo dual-state**: Default C.2 (weight) 90% dos usos + Expressivo C.1 (cor) 10% premium + Reveal `((A I r i g h t))` deliberado.
- **Paleta**: Orange Clay `#d97757` + Bone `#faf9f5` + Dark `#141413`.
- **Fonte**: Bricolage Grotesque (OFL) + JetBrains Mono companion.

---

## Cronograma original (sprint 4–6 semanas)

| Semana | Fase | Entregável principal |
|---|---|---|
| 0 (3 dias) | Pré-produção | Dossiê de referências + thumbnails do deck ✅ |
| 1 | Estratégia + Verbal | Strategy doc + Sistema verbal + regra bilíngue ✅ |
| 2 | Logo + Tipografia | 3 direções de logo + sistema tipográfico ✅ |
| 3 | Paleta + House Look IA + Motion | Color tokens + AI house look + motion principles ✅ |
| 4 | Aplicações + Microsite v0 | Templates por canal + microsite navegável ⏸️ |
| 5 | Deck + PDF + Hand-off | Pacote final completo ⏸️ |

---

*((We Are Alright))*

*Última atualização: 2026-05-10. Owner: Bera. Orquestrador: Claude Opus 4.7 (1M context).*
