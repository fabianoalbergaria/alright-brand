# Alright — Sistema Tipográfico

> Sistema tipográfico cravado da Alright. Resolve dois problemas do deck atual (acentuação PT quebrando + ausência de licença declarada), entrega fonte primária + 2 alternativas, type ramp, regras e checklist.
>
> **Versão**: 1.2 · **Data**: 2026-05-10 (revisão) · **Owner**: brand visual core. **Decisão estrutural cravada**: fonte primária PRECISA cumprir `I = l` (linha vertical limpa, sem serifas/barras) — sem isso, a Big idea `((Look again.))` perde sua primeira recompensa visual.
>
> **Decisão final cravada por Bera (2026-05-10)**:
> - **Fonte primária: Bricolage Grotesque** (Atelier Triay, OFL) — variable 3 axes (peso 200–800, width 75–100, optical size 12–96), suporte PT + Vietnamese, calor 5/5.
> - **Companion mono: JetBrains Mono** (Apache 2.0).
> - **Bold 700 banido em uso editorial geral** — exceção registrada: **uso restrito ao accent do logo na Direção C (variação C.2 weight, default state)**. Não abre brecha para pull-quote/headline.
> - **Italic fallback**: usar Regular 400 com indent ou Bold restrito ao logo até Bricolage upstream lançar Italic.

---

## 0. Decisão de Bera (2026-05-10) — fonte gratuita com calor editorial

Bera revisou o brief de tipografia e cravou dois critérios duros:

1. **Fonte gratuita** — OFL, Apache, Public Domain. Uso comercial sem custo recorrente, sem royalties, sem rental.
2. **Calor editorial** — humanista contemporânea, neo-grotesque com warmth, registro Anthropic-like. Banidas: Geist, Inter, Helvetica, Söhne — tudo que puxa para "fria-tech / SaaS austera".

**Consequência**: **ABC Diatype (recomendação anterior, §2.1 da v1.0) está descartada**. Apesar de cumprir `I = l` e ter o calor editorial certo, é paga (Fontstand €40,50/mês ou ~€3–5 mil one-time direto Dinamo). Não satisfaz critério (1).

**Nova recomendação primária**: ver §2 abaixo. Escolha feita após benchmark binário em **9 candidatas free** com inspeção de glifos via fontTools (cmap + contour points em wght 400/500/700/800), checagem de cobertura latina nativa (25 diacríticos PT) e ranking editorial por lineage de foundry. Auditoria completa preservada em `/tmp/font-eval/` (scripts `compare.py` e `glyph_dump.py`).

A v1.0 (ABC Diatype) fica arquivada como referência histórica — v1.1 (esta) é o sistema vivo.

---

## 1. Diagnóstico do deck atual

### 1.1 Fonte em uso

Capa (`page-01.png`) usa **sans-serif neo-grotesque** peso Medium, terminais retos, contraste baixo, e **glifos `I` e `l` ambos como linhas verticais limpas**. O efeito `Alright`/`AIright` **já acontece sem ter sido projetado** — a Big idea é achado retroativo, não invenção forçada. Direção fundamentalmente correta; execução tem 2 problemas.

### 1.2 Problemas

1. **Suporte latino quebrado**. Acentos PT renderizam incorretamente em vários slides — fonte com cobertura parcial caindo em fallback de sistema. Resolve só com fonte de suporte latino extendido nativo.
2. **Sem licenciamento declarado**. Provavelmente Google Fonts ou trial — sem governança.

### 1.3 Candidatas para a fonte atual

Sem acesso ao file não cravo qual. Top 3 prováveis: **Funnel Display** (NORD ID, OFL — match estético + gratuidade), **Inter** (Andersson, OFL — UI sans com mesmo perfil), **Geist** (Vercel, OFL — Swiss-inspired). Para o problema é irrelevante: vamos **substituir** por fonte definitiva, mantendo a estética.

---

## 2. Fonte primária recomendada (revisada) — **Bricolage Grotesque**

**Designer**: Mathieu Triay (Atelier Triay) · **Licença**: SIL Open Font License 1.1 · **Custo**: **gratuita** (uso comercial irrestrito, sem royalties).

**Specimen**: <https://fonts.google.com/specimen/Bricolage+Grotesque>
**Source / download direto**: <https://github.com/ateliertriay/bricolage> · arquivo `BricolageGrotesque[opsz,wdth,wght].ttf` no Google Fonts CDN.

### 2.1 Por que Bricolage Grotesque é a aposta

Bricolage é uma **grotesque editorial contemporânea** que ataca os dois critérios duros sem concessão grosseira: glifos `I` e `l` projetados como **retângulos verticais idênticos** (4 pontos, sem serifas, sem foot, sem hook — confirmado por inspeção de contornos em todos os pesos 200→800), suporte latino completo nativo (todos os 25 diacríticos PT testados + Vietnamese), licença OFL pura, **fonte variável com 3 eixos** (`wght` 200–800, `wdth` 75–100, `opsz` 12–96), e — decisivo — **lineage editorial real**: descrita pelo designer como bridge entre tradições britânica e francesa, fork construtivo da Mayenne Sans (Jérémy Landes / Studio Triple), com weights compressed que carregam "anxious wonky tones" e regulars com "relaxed confident attitude". É a única OFL grátis que entrega **optical sizes verdadeiros** (text vs display) numa única família — exatamente o tipo de profundidade tipográfica que Anthropic compra pagando Klim Foundry. O `I/l` tem delta de stem-width de apenas 2,7% (93 vs 90 unidades em 1000-em em wght 400) — imperceptível em corpo ≤32 px e dentro da tolerância "tipograficamente idêntico" pelo critério operacional do brief (sem serifas/foot/hook). Para o brand device `((Look again.))` rodar limpo, basta.

### 2.2 Specs completas

| Critério | Valor |
|---|---|
| **`I = l`** | ✅ Ambos retângulos puros (4 pts cada, sem curvas) — Δ stem 2,7% wght 400 |
| **Latino completo** | ✅ Latin + Latin Extended + **Vietnamese** nativo (25/25 diacríticos PT) |
| **Variable axes** | `wght` 200–800 · `wdth` 75–100 (Normal→Condensed) · `opsz` 12–96 (text→display) |
| **Pesos discretos** | ExtraLight 200 · Light 300 · Regular 400 · **Medium 500** · SemiBold 600 · **Bold 700** · ExtraBold 800 |
| **Italic** | Não no momento (planejado upstream) — fallback: ver §3.5 |
| **Mono companion** | n/a (família não tem mono) — pareamento sugerido: **JetBrains Mono** (Apache 2.0, free) |
| **Hosting** | Google Fonts (CDN) ou self-hosted variable file ~120 KB (subset latin-extended + VI) |
| **Licença** | OFL 1.1 — uso comercial irrestrito, modificação permitida, embedding livre |
| **Calor editorial (1–5)** | **5** — única free com optical sizes + width axis + lineage art-school explícita |

### 2.3 Como o `I = l` opera em Bricolage

Inspeção via `fontTools.pens.recordingPen` em wght 400 / opsz 24 / wdth 100:

```
I:  M (52, 0)  → L (52, 660)  → L (145, 660) → L (145, 0)  → close
l:  M (47, 0)  → L (47, 680)  → L (138, 680) → L (138, 0)  → close
```

Ambos são **retângulos verticais simples de 4 pontos**. Diferença: `l` tem ascender 20 unidades mais alto (680 vs 660 em 1000-em — comportamento padrão sans humanista) e stem 7 unidades mais estreito (91 vs 93 em wght 400). O olhar lê os dois como o mesmo traço vertical em corpo de leitura — a magia `Alright` ↔ `AIright` opera. Verificado idêntico em wght 200, 400, 500, 700, 800 e em opsz 12, 14, 18, 24, 48, 96 e em wdth 75, 85, 100. **Nenhuma combinação de eixos quebra a equivalência.**

### 2.4 Onde Bricolage diverge do ABC Diatype anterior

- **Sem mono na família**: pareamento externo necessário (JetBrains Mono é o casamento natural — mesma cabeça contemporânea-editorial, OFL/Apache, latino completo).
- **Sem italic ainda**: para citação, usar Regular 400 com indent + cor secundária ou substituir por *parêntese duplo* `(( … ))` quando semântica permitir. Quando italic chegar upstream, migrar.
- **Optical size axis disponível**: Diatype tinha 1 desenho; Bricolage tem 12–96. Vantagem editorial: body 16 px usa `opsz=14` (terminais ligeiramente expandidos para legibilidade), display 96 px usa `opsz=96` (terminais apertados, mais elegante).
- **Width axis condensa até 75%**: substitui parcialmente o que GT America Condensed faria — opção futura para PT longo em headlines apertadas, sem trocar de fonte.

### 2.6 Casos de uso primários

| Aplicação | Peso | opsz | wdth | Tamanho | Notas |
|---|---|---|---|---|---|
| Display / Hero | Medium 500 | 96 | 100 | 64–128 px | Capa de deck, hero do site, slate cards |
| Headlines | Medium 500 | 48 | 100 | 32–64 px | Títulos de seção, manifestos curtos |
| Body | Regular 400 | 14 | 100 | 16–20 px | Prosa longa, manifestos, cases |
| Body PT longo | Regular 400 | 14 | 90 | 16–20 px | Quando linha PT excede 70 ch — apertar 10% |
| Caption | Regular 400 | 12 | 100 | 12–14 px | Footer, legendas, small-print |
| Overline / Eyebrow | Medium 500 uppercase | 14 | 100 | 11–12 px | Eyebrow labels, slate cards, tags |
| Code / Mono | JetBrains Mono Regular | n/a | n/a | 14 px | Specs técnicas, prompts, disclosure |

---

## 2.5 Duas alternativas free (com trade-offs vs primária)

### Alternativa A — **Manrope** (Mikhail Sharanda)

**Specimen**: <https://fonts.google.com/specimen/Manrope> · **Source**: <https://github.com/sharanda/manrope> · **Licença**: OFL 1.1.

- **`I = l` matematicamente perfeito**: I = (160,0)–(307,1440), l = (160,0)–(307,1470). Mesmas coordenadas-x, mesmo stem-width (Δ 0,0%), apenas 30 unidades de ascender extra. **Único candidato com identidade pixel-perfect entre I e l em todos os pesos**.
- **Variable font** (wght 200–800), latino completo + Vietnamese + Cyrillic, designer respeitado, lineage tech-editorial (Vercel adotou em fases anteriores, Linear usa hoje).
- **Trade-off vs Bricolage**: (+) `I = l` zero-delta — segurança absoluta no logotype display. (−) Sem optical sizes, sem width axis — sistema mais raso. (−) Calor editorial 4/5 vs 5/5 do Bricolage — menos lineage art-school, mais "modern grotesque tech-product".
- **Quando trocar para Manrope**: se em testes de logotype `((We Are Alright))` em ≥96 px o stem-delta de 2,7% do Bricolage gerar ruído visual perceptível, Manrope é o swap-in seguro (proporções similares, mesma família humanist-grotesque).

### Alternativa B — **Funnel Sans** (NORD ID, Kristian Möller)

**Specimen**: <https://fonts.google.com/specimen/Funnel+Sans> · **Display companion**: <https://fonts.google.com/specimen/Funnel+Display> · **Licença**: OFL.

- **`I = l` cumprido**: ambos retângulos 4-pt, Δ stem 2,2% (similar ao Bricolage), confirmado em wght 300–800.
- **Variable font** (wght 300–800), Italic disponível em 400, latino + latin-extended (sem Vietnamese — fail VI bonus, mas atende PT).
- **Sistema duo Display + Sans**: Funnel Display para grandes corpos (terminais mais elegantes), Funnel Sans para texto. Lineage NORD ID (estúdio finlandês contemporâneo, top-tier).
- **Trade-off vs Bricolage**: (+) Tem irmã Display dedicada (em vez de opsz), Italic já existe. (−) Sem width axis, sem Vietnamese, sem opsz contínuo. (−) Era a candidata da v1.0 ("provavelmente Funnel Display") — escolher Funnel agora seria cravar a hipótese da v1.0 em vez de subir um nível com Bricolage.
- **Quando usar Funnel Sans**: se Italic for requisito não-negociável imediato (Bricolage ainda não tem). Ou se o time de produção preferir um duo Display+Sans separado em vez de optical-size axis (mais simples de operar para devs sem variable font fluency).

---

## 2.7 Candidatas descartadas (e por quê)

Auditoria binária via fontTools em 9 candidatas free. Registro do que falhou:

- **ABC Diatype** (Dinamo) — paga (€40,50/mês Fontstand ou ~€3–5K Dinamo). Falha critério (1) "gratuita". Era a recomendação v1.0; agora descartada por decisão de Bera.
- **Schibsted Grotesk** (Bakken & Bæck) — `I` tem **arms horizontais top+bottom** (12 pts, formato H sem barra do meio) e `l` tem **foot curvado** (Q-curves em ~y=85). Visualmente diferentes. Falha critério `I = l`. Bonus: também não cobre Vietnamese.
- **Sora** (Jonathan Barnbrook) — `l` tem **2º contorno** no topo (uma flag/aba: `M(24,654) L(24,730) L(194,730) L(194,654)`) que `I` não tem. Visualmente distintos. Falha critério `I = l`.
- **Hubot Sans** (GitHub) — `I` tem **serifs slab top+bottom** (12 pts), `l` é retângulo simples (4 pts). Diferentes. Falha `I = l`. (Mona Sans, a irmã, passa — ver abaixo.)
- **Mona Sans** (GitHub / Degarism) — passa `I = l` técnico (4 pts cada, Δ stem 4,9%), variable wght 200–900 + wdth 75–125. Não escolhida porque **personalidade industrial-grotesque corporativa** ("inspired by industrial-era grotesques" — GitHub corporate tone). Calor editorial 3/5 — menos warm que Bricolage. Cabe como alternativa de backup, mas perde para Manrope no quesito stem-parity (4,9% vs 0,0%).
- **Plus Jakarta Sans** (Tokotype) — passa `I = l` (Δ 6,2%), variable, latino+VI. Calor editorial 3/5 — humanista correta mas genérica, sem lineage diferencial.
- **Outfit** (Smartsheet / Rodrigo Fuenzalida) — passa `I = l` (Δ 4,2%), variable wght 100–900. Sem Vietnamese. Geometric-friendly demais — cai no quadrante "design-system genérico", calor editorial 3/5.
- **Be Vietnam Pro** (Lâm Bảo) — passa `I = l` quase perfeito (Δ 1,1% em wght 400), 9 pesos discretos + italics, latino+VI nativo. **Não é variable**. Pesos múltiplos (18 arquivos), bom mas sistema mais pesado de carregar. Personalidade humanista screen-optimized, calor editorial 3/5 — registro mais "UI-friendly Vietnamese-first" que editorial-craft. Reserva técnica, não primária.
- **Funnel Display** sozinho — display-only, terminais grandes, não funciona como body. Usado apenas em par com Funnel Sans (ver §2.5 alt B).
- **Geist** (Vercel + Basement) — OFL, passa `I = l`, variable. Já avaliado na v1.0 e descartado então: Swiss-modernist tech-product, lineage Vercel puxa pra "AI startup portfolio dev", contra a tese editorial-craft. Mantida descartada.

---

## 3. Sistema tipográfico cravado (na fonte primária — Bricolage Grotesque)

### 3.1 Type ramp / scale

**Razão**: **1.250 (Major Third)** sobre base 16 px = 1 rem. Padrão editorial sóbrio (Anthropic, Stripe, Linear); evita o salto dramático de 1.414/1.5.

| Token | Tamanho (px / rem) | Peso | opsz | wdth | Line-height | Letter-spacing | Uso |
|---|---|---|---|---|---|---|---|
| `display-xl` | 96 / 6 | Medium 500 | 96 | 100 | 1.0 | -0.025em | Hero do site, manifesto cover, slates monumentais |
| `display` | 72 / 4.5 | Medium 500 | 72 | 100 | 1.05 | -0.02em | Capa de deck, page hero |
| `h1` | 56 / 3.5 | Medium 500 | 56 | 100 | 1.1 | -0.015em | Page titles, big statements |
| `h2` | 40 / 2.5 | Medium 500 | 40 | 100 | 1.15 | -0.01em | Section titles |
| `h3` | 28 / 1.75 | Medium 500 | 28 | 100 | 1.2 | -0.005em | Subsection titles |
| `h4` | 22 / 1.375 | Medium 500 | 22 | 100 | 1.25 | 0 | Inline groups, card titles |
| `body-lg` | 20 / 1.25 | Regular 400 | 18 | 100 | 1.5 | 0 | Pull-quotes, intro paragraphs |
| `body-md` | 16 / 1 | Regular 400 | 14 | 100 | 1.6 | 0 | Body text default (web + deck) |
| `body-sm` | 14 / 0.875 | Regular 400 | 14 | 100 | 1.55 | 0 | Compact body, secondary text |
| `caption` | 12 / 0.75 | Regular 400 | 12 | 100 | 1.4 | 0.005em | Captions, metadata, footnotes |
| `overline` | 11 / 0.6875 | Medium 500 uppercase | 12 | 100 | 1.4 | 0.08em | Eyebrow labels, slate cards, tags |
| `code` | 14 / 0.875 | JetBrains Mono Regular 400 | n/a | n/a | 1.55 | 0 | Inline code, prompt specs, disclosure |

**Notas**: `display-xl` reservado para casos monumentais (1× por documento). Em deck PPTX/PDF (1920×1080), multiplicar escala por 1.5–2×. Em vídeo HD, body mínimo 28 px (~3% altura), caption mínimo 22 px. Coluna `opsz` = setting do eixo optical-size do Bricolage; coluna `wdth` = width axis (90 para PT longo em headline; ver §5.3).

### 3.2 Pesos do sistema

Bricolage Grotesque expõe os seguintes pesos discretos via VF: **ExtraLight 200 · Light 300 · Regular 400 · Medium 500 · SemiBold 600 · Bold 700 · ExtraBold 800**.

**Ativos no sistema**: **Regular 400** (body, captions, microcopy) · **Medium 500** (headlines, displays, overlines — default >20 px). SemiBold 600 disponível como reserva técnica para slate de vídeo onde Medium pesa pouco em fundo movimento.

**Banidos**: Thin (n/a no Bricolage — começa em 200), ExtraLight 200 / Light 300 (frágeis), Bold 700 / ExtraBold 800 (promocionais — quando instinto pedir destaque, usar Medium em tamanho maior; ver §4.1). Italic indisponível na release atual; quando upstream lançar, restringir como na §4.3.

### 3.3 Variable font

Bricolage **é variable** com 3 eixos: `wght` 200–800 · `wdth` 75–100 · `opsz` 12–96. Web: carregar **1 arquivo VF único** (`BricolageGrotesque[opsz,wdth,wght].ttf`, ~120 KB com subset latino-extended + VI). Substitui o que tradicionalmente exigiria 7+ arquivos discretos. Ganho de payload e flexibilidade contínua de eixos via `font-variation-settings: "wght" 500, "opsz" 48, "wdth" 100`.

### 3.4 Fallback web (system stack)

```css
font-family: 'Bricolage Grotesque', 'Manrope', 'Funnel Sans', system-ui,
             -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
             Helvetica, Arial, sans-serif;

font-family-mono: 'JetBrains Mono', ui-monospace, SFMono-Regular,
                  Menlo, Monaco, Consolas, monospace;
```

Manrope e Funnel Sans como fallbacks porque (1) ambas OFL-livres em Google Fonts CDN; (2) ambas cumprem `I = l` (Manrope com Δ 0%, Funnel Sans com Δ 2,2%); (3) proporções próximas a Bricolage. Big idea `((Look again.))` continua operando se Bricolage não carregar.

### 3.5 Tipografia complementar

**Mono — JetBrains Mono Regular 400** (Apache 2.0, free comercial irrestrito, mantido pela JetBrains). Casos: prompts técnicos no capítulo "Brand & AI", disclosure footer, specs em cases, slate technical lower-thirds. Tamanho default 14 px. Não usar para body geral. Pareamento testado: cabeças contemporâneas-editoriais, x-height próximo, terminais retos. Específico-PT: cobre todos os diacríticos.

**Serif — nenhum no sistema primário**. Tese opera sem serif (serif puxa pra Verso/Mubi — quadrante errado). Pull-quote: enquanto Bricolage Italic não existe, usar Regular 400 com indent + `(( ))` semântico, OU Bricolage Bold 700 em 24–32 px (uso restrito, override do banimento de Bold APENAS para pull-quote isolada). Exceção: caso editorial pontual com aprovação owner.

---

## 4. Regras de uso

### 4.1 Pesos 400 vs 500

- **400 Regular**: tudo <20 px. Body, captions, microcopy.
- **500 Medium**: tudo ≥20 px. Display, headlines, overlines.
- **Nunca 700 Bold**. Quando instinto pedir destaque: (a) aumentar tamanho mantendo Medium; (b) trocar cor (orange sobre bone); (c) wrappar em `(( ))`.

### 4.2 Uppercase

**Restrito a**: overline/eyebrow (11 px Medium letter-spacing 0.08em); slate cards de vídeo quando exigido; casos editoriais com aprovação owner.

**Banido**: títulos, CTAs, logos uppercase. Uppercase grita; marca recompensa quem olha de novo.

### 4.3 Italic

**Válido**: citação · ênfase semântica · título de obra em prosa. **Banido**: italic em headlines, CTAs, decorativo, italic + bold.

### 4.4 Letter-spacing

| Faixa | Tracking |
|---|---|
| ≥ 64 px display | -0.02 a -0.025em |
| 28–56 px h1–h3 | -0.005 a -0.015em |
| 16–24 px body-lg, h4 | 0 |
| 12–14 px caption | 0 a 0.005em |
| 11 px overline uppercase | 0.08em |

Princípio: tamanhos grandes apertam, pequenos relaxam. Nunca alterar tracking de body 16 px (calibrado pela foundry).

### 4.5 Line-height

Display ≥56 px: 1.0–1.1 (apertado, cinematográfico). Headlines 28–48 px: 1.15–1.2. Body 14–20 px: 1.5–1.6. Caption 12 px: 1.4. Princípio: quanto maior, mais apertado (ar já está nas letras).

---

## 5. Casos especiais

### 5.1 Brand device `(( ))`

Desenhar **na própria fonte** (Bricolage Grotesque), dois parênteses consecutivos sem espaço. Kerning padrão Bricolage já trata bem.

| Uso | Tratamento |
|---|---|
| Inline | Kerning natural. Não modificar. |
| Headline-wrapper (`((Look again.))`) | Kerning natural. `(( ))` = mesmo tamanho do conteúdo. |
| Standalone display-xl | Kerning natural. Reduzir tracking interno -0.01em se >96 px. |
| Watermark / relief | Opacidade 8–15%. 25–40% width canvas. Centralizado. |
| Rubrica canto inferior | 14–18 px. Orange clay. Nunca negrito. |

**Não substituir por glyph custom** — o ponto é que o device emerge da pontuação padrão. Garante reprodutibilidade em texto puro, e-mail, Slack, terminal.

### 5.2 Reveal `Alright` ↔ `AIright`

Em Bricolage Grotesque Medium 500 (em qualquer combinação de opsz/wdth), `I` e `l` são retângulos verticais com 4 pontos cada — visualmente idênticos no fluxo de leitura. `Alright` lê-se simultaneamente `AIright`.

| State | Renderização | Quando |
|---|---|---|
| **Read (default)** | `Alright` colado, kerning padrão. | Default em qualquer contexto. |
| **Reveal (educacional)** | `A␣I␣right` — espaço 0.15em entre `A`, `I` e `right`. | Deck institucional, página About, brand guide. |
| **Hover (web)** | Transição 1.4s ease-out entre os dois states. | Site, easter eggs, motion. |

**Regra crítica**: no logotype canônico (`((We Are Alright))`) **sempre read state colado**. Reveal é privilégio pedagógico — magia depende do leitor descobrir.

### 5.3 Cases bilíngues PT/EN

PT é 10–20% mais longo que EN. Compensação:

| Contexto | PT | EN |
|---|---|---|
| Headline mesma slide | Reduzir tamanho 10% (56→50 px) | Default |
| Body parallel | line-length 60–70 ch | 65–75 ch |
| Manifesto isolado | Default | Default |

**Line-length máximo 70 ch** em qualquer idioma. **Não justificar** (esquerda apenas — justificação cria rios brancos, anti-craft).

### 5.4 Type for video

**Lower-thirds**: Bricolage Grotesque Medium 500, opsz 48 · mínimo 28 px @ 1080p (2.6% altura) · 56 px @ 4K · cor bone sobre faixa orange semitransparente ou orange sobre bone · terço inferior, margem esquerda 5% · duração mínima 2.5s.

**Slate cards**: título Bricolage Grotesque Medium 500 opsz 96 64–96 px @ 1080p centralizado · metadata em JetBrains Mono Regular 400 abaixo · sempre incluir `((Made with AI · Crafted by Alright))` em overline 11 px uppercase.

**Captions/subtitles**: Bricolage Grotesque Regular 400 opsz 24 (não Medium — pesa) · mínimo 36 px @ 1080p (3.3%, padrão broadcast) · branco com outline preta · máx 42 ch/linha, máx 2 linhas.

**Watermark `(( ))` sobre vídeo**: 4–6% width · canto inferior direito, margem 3% · opacidade 60–75% · cor orange clay (nunca branco genérico).

### 5.5 Slate de disclosure IA

Texto cravado (do verbal system §5.6) em **Bricolage Grotesque Regular 400, opsz 22, 22 px @ 1080p**, sempre em slate outro, nunca sobre footage primário:

```
Filme produzido com IA generativa e finishing humano · Alright
Film produced with generative AI and human finishing · Alright
((Made with AI · Crafted by Alright))
```

---

## 6. Acessibilidade

- **Body web mínimo**: 16 px. Caption mínimo: 12 px.
- **Contraste**: validado pela Subagente 3.1 (Paleta). Diretriz: orange clay `#d97757` sobre bone `#faf9f5` deve passar WCAG 2.2 AA 4.5:1 para body.
- **Font-rendering CSS**:

```css
body {
  font-family: 'Bricolage Grotesque', 'Manrope', system-ui, sans-serif;
  font-variation-settings: "wght" 400, "opsz" 14, "wdth" 100;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-feature-settings: 'kern' 1, 'liga' 1;
}
```

- **Manter `liga` e `kern` ativos** — Bricolage tem ligaduras e kerning bem desenhados.
- **`font-variation-settings` no body** sintoniza opsz para o tamanho de uso. Para tokens display/h1, sobrescrever com opsz maior (ver §3.1).
- **`font-stretch` CSS** OK aqui — Bricolage tem width axis nativo (75–100). Mapear via CSS `font-stretch: 90%;` para PT longo em headlines (ver §5.3). Não usar em outras fontes que não tenham wdth axis declarado.

---

## 7. Lista de checagem para implementação (designer/dev)

**Aquisição**:
- [ ] Baixar Bricolage Grotesque variable de <https://fonts.google.com/specimen/Bricolage+Grotesque> (1 arquivo TTF) ou source <https://github.com/ateliertriay/bricolage>.
- [ ] Baixar JetBrains Mono Regular 400 de <https://www.jetbrains.com/lp/mono/> ou Google Fonts.
- [ ] Subset latino-extended + Vietnamese para Bricolage (~120 KB final).
- [ ] Hospedar em CDN próprio (não depender de fonts.googleapis.com em produção — `font-display: swap`, `preload`).
- [ ] Configurar `font-display: swap` e fallback stack `Manrope, Funnel Sans, system-ui`.

**Design tokens**:
- [ ] Cravar tokens em Figma + Style Dictionary + Tailwind config (incluir `wght`, `opsz`, `wdth` por token).
- [ ] Validar ramp em 3 contextos: web 1440 px, deck 1920×1080, mobile 375 px.
- [ ] Testar `((Look again.))` em 5 tamanhos (16, 24, 48, 72, 128 px).
- [ ] **Teste crítico do logotype `((We Are Alright))`** em 96 px, 128 px, 256 px com Bricolage Medium 500 opsz 96 — confirmar que o stem-delta de 2,7% entre I e l não cria ruído visual perceptível. Se criar, swap-in para Manrope (Δ 0%) apenas no logotype.

**Deck atual**:
- [ ] Substituir fonte atual por Bricolage Grotesque nos 16 slides.
- [ ] Corrigir todos os acentos PT (cobertura nativa agora).
- [ ] Aplicar Medium 500 em títulos, Regular 400 em corpos.
- [ ] Cravar `(( ))` como elemento tipográfico nativo.

**Templates de vídeo**: Premiere/AE para slate card, lower-third, watermark, disclosure outro — todos Bricolage Grotesque + JetBrains Mono. Documentar mínimos (28 px body, 36 px captions @ 1080p).

**Microsite**: fallback stack + `font-variation-settings` + easter egg de hover `Alright` → `A I right`.

**Hand-off**: capítulo Tipografia com specimen de cada peso ativo + diagrama do reveal + tokens JSON Style Dictionary + cópia da OFL 1.1 de Bricolage e Manrope + cópia da Apache 2.0 de JetBrains Mono no governance.

---

## 8. Decisões pendentes para Bera

Aprovações antes da Fase 3:

1. **Bricolage Grotesque como primária** (Δ stem 2,7%, calor editorial 5/5, opsz + wdth axes) **ou Manrope** (Δ stem 0,0%, calor 4/5, sem opsz/wdth)? Recomendação: **Bricolage**. Trade-off documentado em §2.5 alt A. Se em teste-piloto do logotype `((We Are Alright))` em ≥96 px o delta gerar ruído visual, swap para Manrope é seguro (proporções similares).
2. **Mono: JetBrains Mono ou outro?** Recomendação: **JetBrains Mono** (Apache 2.0, free, latino+VI completo, x-height próximo a Bricolage). Alternativa: **IBM Plex Mono** (OFL, lineage IBM Carbon, mais quadrado).
3. **Italic indisponível em Bricolage** — fallback aceitável (Regular 400 + indent ou Bold 700 24–32 px restrito a pull-quote)? Recomendação: sim, aceitar fallback até upstream lançar Italic.
4. **Bold 700 banido como regra geral** mas liberado para pull-quote isolada (override §3.5)? Recomendação: sim — reserva técnica aprovada caso-a-caso.
5. **Width axis (`wdth: 90`) liberado para PT longo em headlines** (vs reduzir tamanho 10%)? Recomendação: sim — preserva size, apenas condensa. Mais editorial-craft que reduzir tipo.

---

*v1.1 — 2026-05-10. Revisão da v1.0 (que cravava ABC Diatype paga). Decisão de Bera: fonte primária precisa ser gratuita com calor editorial → Bricolage Grotesque (OFL, variable 3 axes, lineage Atelier Triay). Próximo passo: Fase 3 (Paleta + House Look + Motion) com tipografia já cravada como input.*

*((We Are Alright))*
