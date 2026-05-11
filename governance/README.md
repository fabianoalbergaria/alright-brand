---
data: 2026-05-11
owner: Zuza
status: cravado
---

# Governança do Brand Guide — Alright

Este documento define quem cuida da marca Alright, como mudanças são aprovadas e onde encontrar cada peça do brand guide. Serve como ponto de partida para qualquer pessoa que precise usar, consultar ou propor alterações à identidade.

---

## 1. Owner e responsabilidades

**Owner atual: Zuza.**

Zuza é responsável por:

- **Aprovar mudanças** na marca — qualquer alteração em elementos visuais, verbais ou estratégicos passa por aprovação dele.
- **Revisar semestralmente** o brand guide para garantir que continua aderente ao posicionamento.
- **Ser ponto de contato** para dúvidas sobre uso da marca, tom de voz e aplicações.

Zuza pode delegar a execução de tarefas (criar templates, atualizar tokens, ajustar microsite), mas **a aprovação final é intransferível**. Nenhuma mudança entra em vigor sem o OK dele.

---

## 2. Cadência de revisão

O brand guide passa por **revisão semestral obrigatória**.

**Próximas datas sugeridas:**

- Novembro 2026
- Maio 2027

### Checklist de revisão semestral

A cada ciclo, Zuza avalia os seguintes pontos:

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
1. Zuza aprova via mensagem (e-mail, chat, qualquer registro escrito).
2. Quem executou documenta no changelog deste documento.

### Mudança média

**Exemplos:** nova cor secundária, novo template de aplicação, novo componente no microsite, atualização de token existente.

**Processo:**
1. Zuza + 1 stakeholder aprovam (registro escrito).
2. Atualizar os design tokens em `tokens/`.
3. Atualizar o microsite para refletir a mudança.
4. Documentar no changelog.

### Mudança maior

**Exemplos:** nova Big idea, rebrand de logo, troca de fonte primária, reposicionamento estratégico.

**Processo:**
1. Requer sessão de planejamento completa — equivalente às Fases 1-2 deste projeto (Discovery + Estratégia).
2. Zuza lidera a sessão com stakeholders relevantes.
3. Após aprovação, atualizar todos os artefatos impactados (documentos, tokens, microsite, brand book).
4. Documentar no changelog com descrição detalhada.

---

## 4. Canal de dúvidas

| Tipo de dúvida | Onde resolver |
|---|---|
| Uso da marca (tom, aplicação, aprovações) | Contato direto com Zuza |
| Técnica (tokens, microsite, código) | Documentação no repositório + microsite |
| Referência rápida (cores, fontes, logos) | Microsite em `04-applications-microsite/site/index.html` |

O microsite é a fonte primária para consulta do dia a dia. Os documentos markdown do repositório contêm o raciocínio por trás de cada decisão — útil quando a dúvida é "por que" e não "o que".

---

## 5. Estrutura de arquivos do brand guide

```
alright-brand/
├── 00-discovery/                    — Pesquisa e referências
├── 01-strategy-verbal/              — Estratégia e sistema verbal
├── 02-visual-core/                  — Logo e tipografia
├── 03-color-aihouse-motion/         — Cor, house look, motion
├── 04-applications-microsite/       — Aplicações, microsite, brand book
│   ├── site/index.html              — Microsite navegável (brand guide interativo)
│   ├── brand-book.html              — Brand book visual (aprovado)
│   └── id-visual-preview.html       — Preview de ID visual
├── 05-deliverables/                 — Deck e PDF
├── tokens/                          — Design tokens (W3C DTCG)
│   ├── color.tokens.json
│   └── motion.tokens.json
└── governance/                      — Este documento
```

**Regra de ouro:** qualquer entregável novo segue a estrutura existente. Não criar pastas fora desse mapa sem aprovação de Zuza.

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

---

*((We Are Alright))*
