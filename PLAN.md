# Plano — Brand Guide **Alright**

> Sessão de planejamento conduzida com Bera em 2026-05-09.
> Este plano é o contrato de execução do projeto. Tudo o que vier depois é implementação dele.

---

## 1. Context

**Alright** é uma produtora audiovisual **AI-first** brasileira (SP) com posicionamento ownable e cases tier-1 reais (PUMA International, HBO Max, Claro, W3Haus/Getnet, Instituto Caldeira). Hoje a marca opera comercialmente, mas **não tem brand guide**: o material existente no Canva (`DAHC1EJyyjo`, 16 págs) é um **deck de credenciais/pitch comercial**, não um sistema de marca.

O deck contém embriões estratégicos importantes (posicionamento claro, brand device tipográfico `(( ))`, manifesto curto, processo declarado) mas **zero codificação visual** — nenhum HEX, nenhuma fonte nomeada, nenhuma regra de logo, nenhuma aplicação real. Acumulou também ruídos de execução (typos repetidos, acentuação quebrada por fonte sem suporte latino completo, processo contraditório entre slides EN e PT, bilingüismo sem regra).

O objetivo deste projeto é entregar um **brand guide enxuto e vivo** no padrão 2026, em formato de **combinação leve** (microsite + PDF executivo + pasta de downloads), capaz de:

- Sustentar consistência visual e verbal conforme o time da produtora cresce;
- Resolver a fragilidade central do negócio — a inexistência de uma **"house look" AI-first própria** que conecte os cases;
- Servir time interno, parceiros (agências/clientes), freelas e imprensa/mercado/talentos;
- Ser produzido em **sprint enxuto de 4–6 semanas** (MVP funcional);
- Ser mantido por owner único com revisão semestral.

> **Importante**: o nome da empresa é **Alright**. O `((We Are Alright))` é o **lockup expressivo** (com "We Are" como prefixo declarativo). Brand device tipográfico é `(( ))` com espaçamento.

---

## 2. Decisões alinhadas

| # | Decisão | Resposta |
|---|---|---|
| 1 | Escopo | Brand guide robusto a partir do deck (deck vira insumo, não entregável central) |
| 2 | Estratégia atual | Confirmada — refinar e expandir (preservar posicionamento + brand device) |
| 3 | Idioma | **Bilingüe PT/EN com regra clara** (a ser codificada na Fase 1) |
| 4 | Profundidade | **Early-stage enxuto e rápido** (~15–30 págs equivalentes; foco no que destrava operação) |
| 5 | Públicos | **Todos**: time interno + parceiros + freelas + imprensa/mercado/talentos |
| 6 | Formato | **Combinação enxuta**: microsite público + PDF executivo curto + pasta de downloads |
| 7 | Ativos atuais | **Zero além do deck** — tudo precisa ser produzido neste projeto |
| 8 | Ritmo | **Sprint MVP em 4–6 semanas** |
| 9 | Intocáveis | Nome "Alright" + posicionamento "AI-first Production Company" + brand device `(( ))` |
| 10 | Governança | Owner único + revisão semestral + canal simples para dúvidas |

---

## 3. Estratégia de execução

### 3.1 Modelo de orquestração

Esta sessão (Claude Opus 4.7, 1M context) atua como **CSO/orquestrador**: mantém o contexto consolidado do projeto, apresenta propostas ao Bera, conduz aprovações intermediárias via `AskUserQuestion` em etapas únicas, e dispara subagentes especializados para cada bloco de trabalho.

Cada **subagente** roda em **janela de contexto isolada** com:
- Briefing self-contained (todo o contexto necessário inline, sem dependência desta sessão);
- Inputs das fases anteriores embutidos no prompt;
- Output estruturado em markdown + artefatos quando aplicável;
- Limite de palavras claro para não sobrecarregar a sessão orquestradora.

A skill `huashu-design` é invocada **somente nas etapas de produção de artefatos HTML** (microsite v0, protótipos visuais de aplicações, slides interativos). Não nas etapas de discovery, estratégia, sistema verbal ou pesquisa.

### 3.2 Chain of thought aplicado

Cada fase segue: **Diagnóstico → Opções exploradas → Recomendação justificada → Aprovação do Bera → Codificação no entregável**. Nenhum entregável "fechado" é produzido sem essa sequência.

### 3.3 Princípios não-negociáveis do trabalho

1. **Fontes confiáveis** em qualquer pesquisa (sites de agências renomadas, design systems publicados, autoridades de branding — nunca posts genéricos de SEO).
2. **Sem alucinação de referência**: toda citação de marca/case/spec deve ter URL real.
3. **Acessibilidade nativa**: WCAG 2.2 AA validado em pares de cor, contraste documentado, prefers-reduced-motion explicitável.
4. **Suporte latino completo** na fonte escolhida (resolver o problema de acentuação que existe hoje).
5. **Bilinguismo com regra**: a regra PT/EN é codificada na Fase 1 e aplicada em todos os entregáveis.

---

## 4. Plano de execução por fases

### Fase 0 — Pré-produção (Semana 0, ~3 dias)

**Objetivo**: preparar tudo o que precisa estar no lugar antes do sprint começar.

- Capturar thumbnails de todas as 16 páginas do deck atual (referência visual — hoje só temos texto extraído).
- Levantar referências visuais externas: produtoras AI-first comparveis (Wonder Dynamics, Promise, Asteria, Verbalate, Volume Studios), produtoras tradicionais com identidades fortes (Stink, Smuggler, Hungry Man, Park Pictures), brand systems de tech AI (Anthropic, OpenAI, Runway, Suno).
- Subagente responsável: **Subagente A0 — Discovery visual e referências**.

**Entregável**: dossiê de referências + screenshots do deck atual + insights iniciais do mercado.

---

### Fase 1 — Estratégia formalizada + Sistema verbal (Semana 1)

**Objetivo**: codificar a estratégia (preservando intocáveis) e construir o sistema verbal completo.

#### Subagente 1.1 — Brand strategy formalizada

Briefing inclui: posicionamento atual ("AI-first Production Company"), manifesto curto existente, brand device `(( ))`, cases.

Entrega:
- Propósito (why), Visão, Missão, Valores (3–5).
- Arquétipo primário + secundário (modelo Mark & Pearson).
- Personalidade (3–5 atributos).
- **Manifesto longo** (versão expandida do "Craft. Craft. And. More. Craft.").
- Brand pyramid + Personas (2–3).
- Diferenciação competitiva (mapa contra Wonder Dynamics, Promise, produtoras tradicionais).
- Promessa de marca (uma frase).

#### Subagente 1.2 — Sistema verbal

Entrega:
- Tom de voz: 3–5 atributos com exemplos do/don't lado a lado.
- **Regra bilingüe PT/EN** (quando cada idioma aparece, com regras objetivas).
- Vocabulário: palavras a usar / evitar, glossário (incluindo termos de IA generativa).
- Naming: como falar "Alright" vs `((We Are Alright))` vs lockups (Alright Productions? Alright Studios? cravar isso).
- Estrutura de copy: headline, sub, body, CTA, microcopy.
- Storytelling framework (arco narrativo dos cases).
- Mensagens-chave por público (cliente, parceiro, talento, imprensa).

**Aprovação do Bera ao final da semana 1** antes de seguir para visual.

---

### Fase 2 — Sistema Visual Core: Logo + Tipografia (Semana 2)

**Objetivo**: cravar a identidade visual primária.

#### Subagente 2.1 — Logo system

Briefing inclui: brand device `(( ))` preservado, lockup expressivo `((We Are Alright))` em uso, marca primária é "Alright".

Entrega (3 direções para escolha):
- Marca matriz (símbolo "Alright" + lockup `((We Are Alright))`).
- Varições: horizontal, vertical, símbolo isolado, monograma.
- Grid de construção, área de proteção, tamanho mínimo.
- Versões: full color, mono positivo/negativo, 1-color, outline.
- Usos sobre fundos, anti-usos (6–8 don'ts visuais), co-branding/lockup com marcas de cliente.
- Responsive logos (favicon → símbolo → wordmark completo).

#### Subagente 2.2 — Sistema tipográfico

Briefing crítico: fonte deve ter **suporte latino completo** para resolver acentuação quebrada.

Entrega:
- Família primária (sugestões: Inter, Geist, ABC Diatype, GT America, Söhne, Inter, JetBrains Mono para code; mas com pesquisa de fonte que case com a personalidade da marca).
- Secundária se necessária.
- Fallback web (system stack).
- Type scale matemática (1.250 ou 1.333).
- Hierarquia: display, H1–H6, body lg/md/sm, caption, overline, code.
- Pesos, line-height, letter-spacing.
- Variable fonts onde possível.
- Licenciamento documentado.

**Aprovação do Bera ao final da semana 2** com 2–3 direções de logo + recomendação de fonte.

---

### Fase 3 — Sistema Visual Core: Paleta + House Look IA + Motion (Semana 3)

**Objetivo**: completar o sistema visual com os pilares mais sensíveis.

#### Subagente 3.1 — Paleta

Entrega:
- Primárias (2–3), secundárias (3–5), neutras (5–7), funcionais (success/error/warning/info).
- Especificações: HEX, RGB, OKLCH, CMYK, Pantone.
- Proporções de uso e regras de combinação.
- **Dark mode** (pares sombreados, não inversão).
- **Acessibilidade WCAG 2.2 AA**: pares de texto sobre fundo pré-validados (4.5:1 corpo, 3:1 grande).
- Gradientes permitidos.

#### Subagente 3.2 — House Look AI-first

> **Esta é a seção estrategicamente mais importante do projeto.**

Hoje cada case tem estética diferente (Caldeira surf naturalista, HBO medieval heráldico, PUMA esportivo) sem fio condutor da própria Alright. A produtora vende imagem por IA — então **a estética IA própria da casa é tão importante quanto o logo**.

Entrega:
- Princípios visuais da Alright (3–5 atributos: ex. *cinematic*, *crafted*, *grounded*, *not-AI-slop*).
- Mood references (referências visuais externas que descrevem o house look).
- Render style guide (cor, contraste, grain, optical treatment, depth).
- Post-production signature (color grading típico, regras de finishing).
- **Capítulo "Brand & AI"**: prompts aprovados, do's & don'ts para imagem gerada por IA, biblioteca de referências para feed em modelos (ex: Kontext Pro, Veo 4, Sora).
- Disclosure de conteúdo gerado por IA + human finishing obrigatório para hero.

#### Subagente 3.3 — Motion principles

Briefing crítico: produtora de motion sem motion da própria marca é gap óbvio.

Entrega:
- Princípios de animação (timing, easing, tone).
- **Motion tokens**: duration (instant/fast/normal/slow) + easing (standard/decelerate/accelerate/emphasized).
- Animação do logo (uma assinatura).
- Transições-padrão.
- Microinterações para web.
- prefers-reduced-motion documentado.

**Aprovação do Bera ao final da semana 3** com paleta cravada + direção de house look + princípios de motion.

---

### Fase 4 — Aplicações chave + Microsite v0 (Semana 4)

**Objetivo**: traduzir o sistema em ferramentas de uso real.

#### Subagente 4.1 — Aplicações priorizadas

Entrega:
- **Site/landing**: wireframe + 3 telas-chave (home, case, contato) usando o novo sistema.
- **Social media**: templates por canal (IG feed/stories/reels, LinkedIn post/article, X/Twitter post, TikTok cover).
- **Email**: assinatura + template de email mkt + template de comunicação de proposta.
- **Deck de proposta** (template para pitch comercial — substitui o deck atual).

#### Subagente 4.2 — Microsite v0 (com `huashu-design`)

> **Aqui invocamos formalmente a skill `huashu-design`** — é o ponto onde produzimos artefato HTML.

Entrega:
- Microsite estático em HTML/CSS/JS (sem framework pesado), hospedvel no GitHub Pages ou Cloudflare Pages.
- Navegação por seções: Estratégia, Verbal, Logo, Cor, Tipo, Motion, Aplicações, Downloads.
- Search simples (Ctrl+K).
- Downloads embutidos (logo SVG/PNG, fontes, templates).
- Dark mode default + toggle light.
- Acessibilidade WCAG 2.2 AA.
- Responsivo.

**Aprovação do Bera ao final da semana 4** com microsite navegvel + aplicações-chave aprovadas.

---

### Fase 5 — Deck atualizado + PDF executivo + Hand-off (Semana 5)

**Objetivo**: fechar o pacote e ativar a governança.

#### Subagente 5.1 — Deck Alright corrigido

Briefing inclui: deck atual + novo sistema completo.

Entrega:
- Deck de credenciais reescrito com novo sistema visual.
- Typos resolvidos ("Storybaord", "enjou", acentuação).
- **Processo unificado em uma só taxonomia** (escolher entre 7 etapas EN ou 10 passos PT, com mapeamento se ambos forem mantidos).
- Idioma com regra (Fase 1).
- Footer corrigido (URL não duplicado).
- Cases com profundidade equilibrada.

#### Subagente 5.2 — Brand book PDF executivo

Entrega:
- PDF curado, ~25 págs, com a essência do guide.
- Versões PT e EN.
- Para uso em apresentações offline e parceiros.

#### Subagente 5.3 — Pasta de assets + Governança

Entrega:
- Pasta organizada (Google Drive ou similar) com:
  - Logos: SVG, PNG (em todas as variações e cores), favicon.
  - Fontes: arquivos `.otf/.ttf` + licenças.
  - Templates: deck (Keynote/Google Slides/PPTX), email, social.
  - Color profiles.
  - README de uso.
- Documento de governança:
  - Owner responsável definido (quem do time da Alright).
  - Cadência de revisão semestral (datas próximas no calendário).
  - Canal de dúvidas (Slack/email).
  - Processo simples para mudanças.

**Hand-off final do Bera ao time da Alright** ao final da semana 5.

---

## 5. Arquivos críticos a serem criados

| Arquivo / artefato | Localização sugerida | Owner |
|---|---|---|
| Brand strategy doc | Notion ou markdown no repo | Subagente 1.1 |
| Sistema verbal doc | Notion ou markdown no repo | Subagente 1.2 |
| Logo system + assets | `/assets/logo/` (SVG/PNG/PDF) | Subagente 2.1 |
| Type system spec | `/assets/fonts/` + doc | Subagente 2.2 |
| Color tokens (`.tokens.json` opcional) | `/tokens/` | Subagente 3.1 |
| AI house look guide | `/guide/ai-house-look.md` + referências visuais | Subagente 3.2 |
| Motion principles | `/guide/motion.md` + exemplos | Subagente 3.3 |
| Aplicações | `/applications/` (Figma/PNG por canal) | Subagente 4.1 |
| Microsite v0 | `/site/` (HTML/CSS/JS) | Subagente 4.2 (huashu-design) |
| Deck corrigido | `/deliverables/deck-alright-v2.{key,pdf,pptx}` | Subagente 5.1 |
| Brand book PDF | `/deliverables/brand-book-alright.pdf` | Subagente 5.2 |
| Pasta de downloads | `/downloads/` (zip pronto para parceiros) | Subagente 5.3 |
| Governance doc | `/governance/README.md` | Subagente 5.3 |

---

## 6. Verificação end-to-end

Antes do hand-off final, validação cobre:

- [ ] **Cobertura das 5 camadas** (estratégica, verbal, visual core, aplicações, governança) presente no microsite.
- [ ] **Acessibilidade WCAG 2.2 AA** validada em todos os pares de cor (test com [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) ou similar).
- [ ] **Acentuação PT correta** em todos os artefatos (typos do deck atual resolvidos).
- [ ] **Regra bilingüe aplicada** consistentemente em deck + microsite + PDF.
- [ ] **Aplicações reais** (não mockups vazios) para os 4 canais prioritários.
- [ ] **Microsite navega**, downloads funcionam, dark mode e responsivo OK.
- [ ] **Deck corrigido** elimina typos, processo unificado, footer ok.
- [ ] **Pasta de assets** organizada, README clara, partilhável com parceiros tier-1.
- [ ] **Governança documentada**: owner, cadência, contato.
- [ ] **Hand-off** com Bera + time da Alright (review da semana 5).

---

## 7. Riscos & mitigações

| Risco | Probabilidade | Mitigação |
|---|---|---|
| Cliente não aprova logo direction na semana 2 | Média | Subagente 2.1 entrega 3 direções; cronôgrama tem 2 dias de buffer para iteração |
| House look AI-first é ambíguo demais | Alta | Fase 0 inclui dossiê de referências robusto; Subagente 3.2 trabalha com mood boards concretos antes de cravar princípios |
| Fonte escolhida não tem suporte latino completo | Baixa | Suporte latino é critério eliminório do brief do Subagente 2.2 |
| Microsite v0 trava por escopo de engenharia | Média | Stack mínima (HTML/CSS/JS puro, sem framework); skill `huashu-design` já prepara para isso |
| Time da Alright não tem owner para governança | Média | Subagente 5.3 documenta hand-off explicitável; alternativa: contrato com freela mensal para manutenção |
| Processo (slides 3 vs 4 do deck atual) gera disputa interna | Baixa | Discovery da Fase 0 entrevista quem desenhou o processo; Fase 1 craa decisão |

---

## 8. O que está fora deste escopo

- Rebrand profundo (nome, posicionamento, brand device permanecem).
- Sistema enterprise / system of systems (não há sub-marcas).
- Component library complexa (Storybook, npm packages) — fica para fase 2 futura.
- Traduções para idiomas além de PT/EN.
- Estratégia de comunicação, mídia paga, plano editorial.
- Naming alternativo para sub-produtos (se vierem no futuro).

---

## 9. Histórico

- **2026-05-09 — Sessão de planejamento**
  - Análise do deck atual concluída (Subagente A).
  - Pesquisa de padrão brand guide 2026 concluída (Subagente B).
  - 10 decisões-chave alinhadas com Bera via `AskUserQuestion`.
  - Plano final consolidado e pronto para execução.
