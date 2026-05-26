# CLAUDE.md — Regras project-level do Alright Brand Guide

> Estas regras se aplicam quando o Claude Code é aberto na pasta `alright-brand/`. Sobrescrevem o CLAUDE.md global em pontos específicos.

---

## Sobre o projeto

Este é o brand guide da **Alright** — produtora audiovisual AI-first brasileira. **5 de 5 fases concluídas** (em manutenção pós-conclusão desde 2026-05-11). Detalhes em `STATUS.md`, `RESUME.md` e `PLAN.md`. Para retomar: leia `RESUME.md` + `STATUS.md`.

---

## Sobre Alright (owner do projeto)

- **Owner atual**: **Alright** (a marca / Fabiano como founder), desde 2026-05-14. Conduz o projeto e crava decisões — você é o orquestrador.
- **Histórico de ownership**: Bera (Fases 0-3) → Zuza (2026-05-10, Fases 4-5) → Alright (2026-05-14, manutenção pós-conclusão).
- Owner pode rotacionar de novo. Se mudar, atualize esta seção, o rodapé de `STATUS.md`, as linhas "Owner:" em `RESUME.md`, e a memória `project_owner_change.md`.

---

## Skill `huashu-design` — somente manual

- **NUNCA auto-invocar** a skill `huashu-design`, mesmo quando o pedido pareça encaixar (protótipos HTML, animações, slides, App mockups, exploração de variantes, revisão de design hi-fi).
- Acionar **exclusivamente** quando **o owner** pedir de forma nominal e explícita — exemplos válidos:
  - `/huashu-design`
  - "use a skill huashu-design"
  - "chame o huashu-design"
  - "aciona o huashu" / "manda o huashu fazer"
- Se você acha que a skill seria útil mas o owner não pediu, **sugira em texto e espere OK** — não invoque por iniciativa própria.

---

## Padrões de orquestração (já estabelecidos no projeto)

### Subagentes em janelas isoladas
- Toda tarefa pesada (pesquisa de referências, geração de opções, drafting de documentos longos) é delegada a subagentes via `Agent` tool.
- **Briefings self-contained** — cada subagente recebe TODO o contexto necessário inline (sem dependência da memória do orquestrador).
- Subagentes salvam seus entregáveis em paths cravados dentro do projeto + retornam sumário curto (até 500 palavras) para o orquestrador.
- A sessão principal mantém apenas: orquestração, decisões com o owner, leituras dirigidas.

### Perguntas em etapas únicas
- Use `AskUserQuestion` com até 4 opções clicáveis quando precisar de decisão do owner.
- **Uma pergunta por vez** — nunca empilhe múltiplas decisões na mesma rodada.
- Sempre marque a opção recomendada com "(Recomendado)" e a coloque primeiro.

### Chain of thought aplicado
Cada fase segue: **Diagnóstico → Opções exploradas → Recomendação justificada → Aprovação do owner → Codificação no entregável**.

### Auto mode — quando ativado
Avance com decisões secundárias usando recomendações dos subagentes. Comunique sempre o que cravou e dê espaço para correção. Decisões de alto impacto (Big idea, direção do logo, paleta primária) sempre vão para o owner.

---

## Convenções do projeto

### Idioma
- **Bilíngue PT/EN com regra cravada** (ver `01-strategy-verbal/02-verbal-system.md` §3).
- Documentos do brand guide: PT como língua-base, EN para catchphrases canon (`We are alright`, `((We Are Alright))`, `Craft. Craft. And. More. Craft.`, `A.I. first Production Company.`).
- `Cada filme é um filme.` permanece PT sempre.

### Manifestos canon (intocáveis)
- `We are alright.`
- `Craft. Craft. And. More. Craft.`
- `Cada filme é um filme.`
- `No camera or set. No high costs.`
- `((Look again.))` (Big idea cravada — Fase 1)

### Logo system · v3 (2026-05-26) — REBRAND COMPLETO

> **Decisão cravada pelo owner em 2026-05-26**: rebrand completo. Novo logo + símbolo + fontes + paleta. Sistema Brasa (companion mark + motion reveal) **arquivado**.

- **Wordmark v3**: `alright` em **lowercase**, fonte rounded heavy (Monument Grotesk Bold ou Neue Haas Display Black — confirmar com owner), com `®` register mark. Cor canônica **Orange Alright `#FF5D36`**. NÃO HÁ MAIS letra accent central — wordmark é flat color.
- **Símbolo v3**: 3 figuras humanas correndo carregando laptops, dispostas em círculo orgânico/blob, estilo monocromático. Substitui Brasa (ember + halo + wisps). 3 variantes oficiais: Orange / Black (mono sobre Bone) / White (mono sobre Black).
- **Lockup oficial**: símbolo em cima + wordmark embaixo. Assets em `assets/logo/v3/Logo_{Black,Orange,White}.png` + `assets/logo/v3/Wordmark_{Black,Orange,White}.png` + `assets/logo/v3/symbol/Symbol_{Black,Orange,White}.png`.

### Brand device (auxiliar)
- `(( ))` com espaçamento — permanece como elemento editorial **auxiliar** (não no logo).
- Uso restrito: brackets em manifestos canon, big idea `((Look again.))`, hero editorial.
- Big idea `((Look again.))` — cravada, permanece v3.

### Paleta cravada · v3 (2026-05-26)

> **Brand evolution**: v1 Orange Clay (Anthropic-aligned warm clay, 2026-05-09) → v2 Kodak Red (cinematic film stock vibe, 2026-05-20) → **v3 Orange Alright** (laranja-coral vibrante + green-lime accent + black puro, 2026-05-26). HEX/RGB abaixo são v3 cravada. Spec viva em [`tokens/color.tokens.json`](tokens/color.tokens.json) v3.0. Token v2 preservado em [`tokens/legacy/color.tokens.v2.json`](tokens/legacy/color.tokens.v2.json).

**Primárias**:
- **Orange Alright `#FF5D36`** · RGB `255, 93, 54` · CSS var `--alright-orange`
  - Uso: wordmark + símbolo principal, CTAs primários, key visual, capa de deck
  - **Não usar para texto sobre Bone** (~3:1, falha WCAG — use Orange-deep)
  - **Regra de proporção**: 10–20% por peça (maior presença que v2)
- **Green-lime `#EAEE59`** · RGB `234, 238, 89` · CSS var `--alright-green` — **ACCENT SECUNDÁRIO NOVO v3**
  - Uso: botões secundários, highlights editoriais pontuais, brand stickers
  - **Não usar para texto** (ambos contrastes falham — surface flat color only)
  - **Regra de proporção**: 3–8% por peça (signature highlight, não dominante)
- **Bone `#faf9f5`** · RGB `250, 249, 245` · CSS var `--bone` — **PERMANECE de v2** (única cor inalterada)
  - Background default light mode (60–70% por peça) · branco puro PROIBIDO
- **Black `#000000`** · RGB `0, 0, 0` · CSS var `--black`
  - Texto default sobre Bone (AAA 21:1) · background dark mode canônico
  - **PRETO PURO AGORA PERMITIDO** (v3 quebra a regra de v2 que proibia)

**Text-safe variants** (passam AA sobre Bone):
- **Orange-deep `#C44818`** · CSS var `--alright-orange-deep` — único laranja válido pra texto sobre Bone (~5:1)
- **Stone `#3d3a35`** · CSS var `--stone` — sub-head density alta sobre Bone (AAA, preserva warmth)
- **Slate Warm `#5b5750`** · CSS var `--slate-warm` — metadados, captions, rules
- **Mist `#ece8dc`** · CSS var `--mist` — surface secundária, divider sutil

**Histórico v1+v2 (deprecated)**: refs em phase docs mantêm registro histórico. v1 `#d97757` (Orange Clay) + v2 `#ed1c24` (Kodak Red) — não usar em entregáveis novos.

**Gradientes proibidos** (1 exceção: `gradient.editorial-bone` para hero — flat-color como regra dura).

### Tipografia cravada · v3 (2026-05-26)

> **REBRAND**: Bricolage Grotesque + JetBrains Mono saem. Monument Grotesk + Neue Haas Display entram.

- **Primária editorial**: **Monument Grotesk** (8 weights: Regular, Medium, Bold + italics; Mono + Semi-Mono companion). Comercial — owner adquiriu licença. Path repo: `assets/fonts/v3/monument-grotesk/`.
- **Primária display**: **Neue Haas Grotesk Display Pro** (15+ weights: XXThin → Black + italics). Comercial — owner adquiriu licença. Path repo: `assets/fonts/v3/neue-haas-display/`.
- **Wordmark fonte**: Monument Grotesk Bold ou Neue Haas Black com curvas rounded — confirmar com owner qual exata (PNGs do logo em `assets/logo/v3/`).
- **Mono companion**: Monument Grotesk Mono (substitui JetBrains Mono).
- **Histórico (deprecated)**: Bricolage Grotesque (OFL) + JetBrains Mono (Apache 2.0) — não usar em entregáveis novos.

### Elementos novos da marca · v3 (2026-05-26)

- **21 Illustrations** "The X" em `assets/illustrations/` (PNGs): The Call, The Couch, The Direction, The Dog, The Dude, The File, The Flash, The Flow, The Game, The Mind, The Noise, The Plot, The Professional, The Promise, The Reader, The Screenplay, The Shot, The Soundtrack, The Sweat, The Workers, The Wrap. Vocabulário visual completo da marca.
- **4 Buttons** em `assets/buttons/` (PNGs): Black, Orange, Green, Green Accent. UI components.

### Anti-modelos visuais (não usar nunca)
- Gradientes SaaS roxo-azul.
- Iconografia AI literal (neural net, partícula, blossom, "pulsing dot").
- Iconografia cinema literal (claquete, película, refletor).
- Logo abstrato genérico (orbs, Möbius, infinitos).
- Dark-mode-first sem diferenciação.
- AI-slop (mãos quebradas, olhos errados, atmosfera sem motivo).
- Termos contra-canon: `revolucionário`, `disruptive`, `magic`, `transforma sua marca`, `next-gen`.

### Disclosure de IA — REVOGADA (2026-05-13)
A regra de disclosure obrigatório ("Imagens criadas com Inteligência Artificial.") foi **revogada por Zuza em 2026-05-13**. Não usar mais como rodapé padrão em peças. Pode ser aplicada caso-a-caso quando legalmente exigido (regulamentação local, plataforma específica), mas não é norma da marca.

---

## Quando produzir entregáveis

### Documentos novos
- Salvar nos paths previstos pelo plano (`05-deliverables/`, `04-applications-microsite/`, etc).
- Sempre incluir frontmatter: data, owner, status (draft/v0.1/cravado/etc).
- Limite de palavras: respeitar (subagentes têm limites cravados nos briefings).

### Microsite (Fase 4)
- Skill `huashu-design` finalmente entra em operação.
- Stack: HTML/CSS/JS estático sem framework pesado.
- Hospedável em GitHub Pages ou Cloudflare Pages.
- Light mode default, dark mode toggle.
- WCAG 2.2 AA.
- Responsivo.

### Tokens
- Manter em `tokens/*.tokens.json` no formato W3C DTCG.
- Atualizar conforme novas decisões cravadas.

---

## Outras regras

- **Reduce permission prompts**: certas operações (Read, Write em paths do projeto, Bash com comandos seguros) podem ser pré-aprovadas em `.claude/settings.local.json`.
- **Não delegar entendimento**: subagentes recebem instruções precisas, não diretrizes vagas.
- **Trust but verify**: ler o entregável depois que o subagente reportar — não confiar só no sumário.
- **Manter STATUS.md atualizado** — sempre que uma fase completar, refletir no documento.

---

*((We Are Alright))*
