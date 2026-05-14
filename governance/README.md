---
data: 2026-05-11
owner: Alright
status: cravado
---

# Governança do Brand Guide — Alright

Este documento define quem cuida da marca Alright, como mudanças são aprovadas e onde encontrar cada peça do brand guide. Serve como ponto de partida para qualquer pessoa que precise usar, consultar ou propor alterações à identidade.

---

## 1. Owner e responsabilidades

**Owner atual: Alright** (a marca / Fabiano como founder, desde 2026-05-14). Histórico de ownership: Bera (Fases 0-3) → Zuza (2026-05-10, Fases 4-5) → Alright (2026-05-14, manutenção pós-conclusão).

O owner é responsável por:

- **Aprovar mudanças** na marca — qualquer alteração em elementos visuais, verbais ou estratégicos passa por aprovação dele.
- **Revisar semestralmente** o brand guide para garantir que continua aderente ao posicionamento.
- **Ser ponto de contato** para dúvidas sobre uso da marca, tom de voz e aplicações.

O owner pode delegar a execução de tarefas (criar templates, atualizar tokens, ajustar entregáveis), mas **a aprovação final é intransferível**. Nenhuma mudança entra em vigor sem o OK dele.

---

## 2. Cadência de revisão

O brand guide passa por **revisão semestral obrigatória**.

**Próximas datas sugeridas:**

- Novembro 2026
- Maio 2027

### Checklist de revisão semestral

A cada ciclo, o owner avalia os seguintes pontos:

- [ ] A paleta de cores ainda reflete o posicionamento atual da Alright?
- [ ] Cases novos produzidos estão alinhados com o house look definido?
- [ ] O vocabulário (termos canon, termos proibidos) precisa de atualização?
- [ ] Os design tokens precisam de novos valores ou ajustes?
- [ ] A fonte Bricolage Grotesque teve atualização upstream (nova versão, novo peso, lançamento de Italic)?

Se todos os itens estiverem OK, registrar no changelog: "Revisão semestral — sem alterações". Se houver mudanças, seguir o processo da seção 3.

---

## 3. Processo para mudanças

As mudanças na marca seguem três faixas, de acordo com o impacto.

### Mudança menor

**Exemplos:** ajuste de tom em um documento, adição de termo ao vocabulário, correção de typo em manifesto secundário.

**Processo:**
1. O owner aprova via mensagem (e-mail, chat, qualquer registro escrito).
2. Quem executou documenta no changelog deste documento.

### Mudança média

**Exemplos:** nova cor secundária, novo template de aplicação, novo componente no brand book, atualização de token existente.

**Processo:**
1. O owner + 1 stakeholder aprovam (registro escrito).
2. Atualizar os design tokens em `tokens/`.
3. Atualizar o brand book (`brand-book.html`) e republicar via `deploy.sh`.
4. Documentar no changelog.

### Mudança maior

**Exemplos:** nova Big idea, rebrand de logo, troca de fonte primária, reposicionamento estratégico.

**Processo:**
1. Requer sessão de planejamento completa — equivalente às Fases 1-2 deste projeto (Discovery + Estratégia).
2. O owner lidera a sessão com stakeholders relevantes.
3. Após aprovação, atualizar todos os artefatos impactados (documentos, tokens, brand book web + print, deck, portfolio).
4. Documentar no changelog com descrição detalhada.

---

## 4. Canal de dúvidas

| Tipo de dúvida | Onde resolver |
|---|---|
| Uso da marca (tom, aplicação, aprovações) | Contato direto com o owner |
| Técnica (tokens, brand book, código) | Documentação no repositório + brand book web |
| Referência rápida (cores, fontes, logos) | Brand book em `brand-book.html` (live em https://wearealright.pages.dev/brand-book.html) |

O brand book web v2 é a fonte primária para consulta do dia a dia. Os documentos markdown do repositório contêm o raciocínio por trás de cada decisão — útil quando a dúvida é "por que" e não "o que".

---

## 5. Estrutura de arquivos do brand guide

```
alright-brand/
├── 00-discovery/                    — Pesquisa e referências
├── 01-strategy-verbal/              — Estratégia e sistema verbal
├── 02-visual-core/                  — Logo e tipografia
├── 03-color-aihouse-motion/         — Cor, house look, motion
├── 04-applications-microsite/       — Specs de aplicações + artefatos legados
│   ├── 01-applications.md           — Specs de aplicações (site, social, email, deck)
│   ├── 02-microsite-specs.md        — Spec do microsite v0 (implementação deletada em 2026-05-14)
│   ├── brand-book-v1-legacy.html    — Brand book v1 (legacy, mantido como histórico)
│   └── id-visual-preview.html       — Preview de ID visual
├── 05-deliverables/                 — Deck e brand book print
│   ├── deck-alright-v3.html         — Deck v3 (11 slides, live em /deck/)
│   └── brand-book-print.html        — Brand book print v2 (25 páginas A4, live em /brand-book/print/)
├── assets/                          — Logos, meta (OG, favicon) e trabalhos
├── tools/                           — Scripts (compress, generate-logos, generate-meta)
├── tokens/                          — Design tokens (W3C DTCG)
│   ├── color.tokens.json
│   └── motion.tokens.json
├── governance/                      — Este documento
├── index.html                       — Portfolio (live em /)
├── brand-book.html                  — Brand book web v2 (live em /brand-book.html)
└── deploy.sh                        — Deploy pro Cloudflare Pages
```

**Regra de ouro:** qualquer entregável novo segue a estrutura existente. Não criar pastas fora desse mapa sem aprovação do owner.

---

## 6. Decisões intocáveis

Os itens abaixo estão **cravados** e não entram em pauta de revisão semestral. Para alterá-los seria necessário um processo de mudança maior com justificativa excepcional.

- **Nome:** Alright
- **Brand device:** `(( ))` — parênteses duplos com espaçamento
- **Big idea:** `((Look again.))`
- **Manifestos canon** (5 textos):
  - `We are alright.`
  - `Craft. Craft. And. More. Craft.`
  - `Cada filme é um filme.`
  - `No camera or set. No high costs.`
  - `((Look again.))`
- **Lockup:** `((We Are Alright))` — sempre em inglês, sem tradução

---

## 7. Changelog

| Data | Descrição | Responsável |
|---|---|---|
| 2026-05-10 | Brand guide v1.0 completo (Fases 0–5). Entrega final. | Zuza |
| 2026-05-11 | Documento de governança criado. | Zuza |
| 2026-05-13 | AI disclosure obrigatória revogada (não é mais norma da marca). | Zuza |
| 2026-05-14 | Logo hierarchy swap: Expressivo (l Orange Clay) promovido a Default; mono dark virou Mono fallback. Brand book print v2 entregue (25 páginas A4). Deck v3 finalizado (11 slides). Owner rotacionado para Alright. Microsite legado (`04-applications-microsite/site/`) deletado, superseded pelo brand book web v2 (`brand-book.html`, live). | Alright |

---

*((We Are Alright))*
