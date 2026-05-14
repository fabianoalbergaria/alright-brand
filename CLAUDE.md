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

### Brand device
- `(( ))` com espaçamento — sempre.
- Variantes oficiais (cravadas em `02-visual-core/logo/02-direction-C-detailed.md`):
  - State **Default** (90% usos, atualizado 2026-05-14): `Alright` (Bricolage Regular 400 com `l` central em **Bold 700 Orange Clay `#d97757`**).
  - State **Mono fallback**: `Alright` (Bricolage Regular 400 com `l` central em Bold 700 Dark) — só pra reprodução B&W obrigatória (jornal, fax, bordado, gravação laser, co-branding com paleta conflitante).
  - State **Reveal**: `((A I r i g h t))` espaçado (ato editorial deliberado).

### Paleta cravada
- Orange Clay `#d97757` (accent — não use como texto sobre Bone, falha WCAG AA)
- Bone `#faf9f5` (background light mode default)
- Dark `#141413` (texto + wordmark)
- Secundárias text-safe: Clay Deep `#8c4a32`, Stone `#3d3a35`, Slate-warm `#5b5750`
- **Gradientes proibidos** (1 exceção: `gradient.editorial-bone` para hero)

### Tipografia cravada
- Primária: **Bricolage Grotesque** (variable, OFL).
- Companion mono: **JetBrains Mono** (Apache 2.0).
- Bold 700 banido em uso editorial — exceção restrita ao `l` central do logo (Orange Clay no default, Dark no mono fallback).
- Italic ausente — usar Regular + indent (até Bricolage upstream lançar Italic).

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
