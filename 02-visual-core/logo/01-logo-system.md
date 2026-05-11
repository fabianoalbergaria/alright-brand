# Alright — Logo System v0.1

> Três direções de logo system para escolha do cliente. Todas exploram a descoberta tipográfica `Alright` ↔ `AIright` (em sans-serif, `I` maiúsculo e `l` minúsculo são glifos idênticos) como DNA da marca, em conversa direta com a Big idea `((Look again.))`.
>
> **Versão**: 0.1 — para revisão Bera. **Data**: 2026-05-10. **Owner**: brand strategy.
>
> Esta entrega é especificação verbal e ASCII. Não há SVG/PNG nesta etapa — designer humano (ou próxima rodada) executa.

---

## 0. Premissas comuns às 3 direções

**Cravado para todas as direções (não revisitar):**

- **Marca matriz** opera em paleta warm: orange clay (próximo a `#d97757`) sobre off-white papel-craft (próximo a `#faf9f5`). Tema default é light; dark é variação.
- **Tipografia**: sans-serif geometric/grotesk com `I` maiúsculo e `l` minúsculo **tipograficamente idênticos** (linha vertical sem serifas, sem ear, sem hook). Critério eliminatório.
- **Brand device** `(( ))` é elemento sagrado em todas as direções — varia o protagonismo (símbolo isolado, wrapper integrado, marca d'água), nunca a forma.
- **Lockup expressivo** `((We Are Alright))` permanece sempre em EN, em qualquer direção.
- **Ar e silêncio** como signature visual — clear space generoso, composição editorial, anti-densidade.
- **Anti-modelos** ratificados: gradientes SaaS roxo-azul, iconografia AI literal (neural net, partícula, blossom), iconografia cinema literal (claquete, refletor), logos abstratos genéricos (orbs, Möbius, infinitos).

**Famílias tipográficas candidatas** (para validação na próxima rodada — Subagente 2.2):

- **ABC Diatype** (Dinamo) — `I`/`l` idênticos, `(` `)` com curvatura suave, suporte latino completo. Top candidate.
- **ABC Marfa** (Dinamo) — geometric grotesk com presença de capa.
- **Söhne** (Klim) — neutralidade tipo Helvetica, `(` `)` levemente mais angulares.
- **Geist** (Vercel) — open-source, `I`/`l` idênticos, free-tier viável para early-stage.
- **GT America** (Grilli Type) — workhorse contemporânea.
- **Inter** (Rasmus Andersson) — open-source, suporte latino impecável.
- **Helvetica Now** (Monotype) — neutralidade canônica.
- **Neue Haas Grotesk Display** (Forgotten Shapes) — version display da Helvetica original.
- **Funnel Display** (open-source) — character mais expressivo, `(` `)` com curvatura warm.

**Anti-fontes**: serifadas (Didone, Garamond, Times) **destroem a equivalência I=l** e quebram o trocadilho. Excluídas em todas as direções.

---

## Direção A — Lockup integrado: `((` envolve, é o logo

### Conceito central

**A marca matriz é o lockup `((Alright))` — wordmark e brand device fundidos em um único objeto tipográfico.** Não há símbolo isolado autônomo; o `(( ))` só existe abraçando a palavra. O par de parênteses não é decoração: é o próprio logo. Quando alguém vê `((Alright))`, vê o logo completo. Quando vê `((` em qualquer lugar, evoca o logo. A direção opera como Iconoclast com o `/`, Sub Pop com o `>`, Verso Books com o vermelho — **um signo visual que vira sinônimo da marca**. O default é o lockup colado; a versão "look again" espaçada `((A I r i g h t))` é o reveal.

### Como explora `Alright`/`AIright`

Os parênteses funcionam como **moldura do convite**: `((` abre, `))` fecha, e dentro está a palavra que muda quando você olha de novo. A versão default `((Alright))` lê limpo; a versão reveal `((A I r i g h t))` espaçada (com `I` na cor accent — orange — quando o resto está em dark) **revela o `AIright` embutido no nome**. O par de parênteses já predispõe o olhar a "olhar com atenção dentro deles" — eles literalmente cercam o trocadilho. O reveal não é um logo diferente; é o mesmo logo respirando.

### Marca matriz

**Wordmark default — `((Alright))`** (versão colada):

```
((Alright))
```

ASCII aproximado (kerning real precisa render tipográfico):

```
 ┌─────────────────────┐
 │                     │
 │   ((Alright))       │
 │                     │
 └─────────────────────┘
```

Composição: dois parênteses de abertura, palavra `Alright` em sans-serif weight Medium ou Semibold, dois parênteses de fechamento. Kerning entre `((` e `A` muito justo (negativo, aprox -20 unidades em corpo 100). Mesma regra para `t))`. Os pares `((` e `))` têm kerning interno também justo (aprox -10 unidades).

**Variação reveal `((A I r i g h t))`** (versão espaçada, modo "look again"):

```
((A I r i g h t))
```

Tracking aberto (aprox +200 unidades), `I` em orange quando wordmark está em dark, `I` em dark quando wordmark está em orange — o `I` quebra a cor. O olho que lê em velocidade lê `Alright`; o olho que pausa lê `AIright`.

```
((A I r i g h t))
   ↑
 accent
 (cor diferente)
```

**Lockup expressivo `((We Are Alright))`** — versão estendida para covers, manifesto, hero do site:

```
((We Are Alright))
```

Mesma lógica do wordmark — kerning justo entre `((` e `W`, entre `t` e `))`. O lockup expressivo é tratado como **objeto editorial**, geralmente em corpo grande (cover de deck, hero do site). Não substitui o wordmark `((Alright))` — coexiste.

**Não há símbolo isolado nesta direção.** O `(( ))` puro pode aparecer como rubrica de página (canto inferior direito do deck, watermark), mas não é apresentado como logo. Quem vê `(( ))` sozinho lê "assinatura Alright"; quem vê `((Alright))` lê "logo Alright".

### Variações obrigatórias

- **Horizontal default**: `((Alright))` em uma linha. Aplicação em headers de site, footers, business cards, e-mail signatures.
- **Vertical (empilhado)**: parênteses empilhados sobre a palavra — uso restrito a casos onde altura é restrita (lateral de packaging, lombada de impresso). ASCII:

```
   ((
 Alright
   ))
```

Esta forma é **secundária**, não recomendada como default. Existe para casos de extrema restrição.

- **Versão expressiva**: `((We Are Alright))` para covers e hero. Mesma família visual.
- **Reveal**: `((A I r i g h t))` espaçado com `I` accent. Uso intencional em pieces que pedem segundo olhar (cover do brand book, fim de manifesto, animation reveal).

**Não há monograma nesta direção** — a marca não se reduz a uma letra, sempre opera com `(( ))`. Para casos extremos de redução (favicon < 16px), o símbolo é apenas `(( ))` sem palavra.

**Responsive logos** (do menor ao maior):

| Tamanho | O que aparece |
|---|---|
| Favicon ≤ 16px | `(( ))` sozinho, sem palavra |
| Favicon 32–48px | `(( ))` sozinho, com mais ar |
| App icon 48–128px | `((A))` — só primeira letra dentro dos parênteses |
| Wordmark ≥ 128px wide | `((Alright))` completo |
| Hero ≥ 320px wide | `((We Are Alright))` expressivo |

### Construção / grid

**Grade base**: x-height da letra `A` = 1 unidade (1u).

- **Altura dos parênteses** `(` `)` = 1.4u (excede x-height para envelopar visualmente — eles são cápsula, não pontuação inline).
- **Espessura do stroke dos parênteses** = aprox 0.18u (mesmo peso visual do trao da fonte).
- **Distância entre os dois `(` do par `((`** = 0.25u.
- **Distância entre `((` e a primeira letra `A`** = 0.30u (kerning justo, mas com ar).
- **Distância entre última letra `t` e `))`** = 0.30u (espelho).
- **Curvatura dos parênteses** = arco moderado, nem círculo (Helvetica Now), nem reto (Söhne) — **arco editorial-warm**. ABC Diatype tem essa curvatura naturalmente.

**Posição vertical**: parênteses centralizados na altura da capital `A` (não baseline-aligned, não cap-height-aligned — meio entre os dois, levemente mais alto que x-height das minúsculas).

### Área de proteção (clear space)

**Clear space mínimo** = 1x altura do `A` (1u) em todos os lados externos do lockup.

```
 ┌─────────────────────────────────┐
 │                                 │  ← 1u
 │                                 │
 │   ((Alright))                   │
 │                                 │
 │                                 │  ← 1u
 └─────────────────────────────────┘
   ↑                          ↑
  1u                         1u
```

Em aplicações premium (cover de deck, hero do site), recomendar 2u de clear space para respiração editorial.

### Tamanho mínimo

- **Digital**: wordmark `((Alright))` mínimo = 96px de largura. Símbolo `(( ))` isolado mínimo = 16px.
- **Impresso**: wordmark mínimo = 18mm de largura. Símbolo isolado mínimo = 4mm.

Abaixo desses limites, o kerning quebra e o `(` `)` colapsa visualmente com as letras vizinhas.

### Versões cromáticas

| Versão | Aplicação |
|---|---|
| **Full color (orange sobre bone)** | Default. Light mode. `#d97757` sobre `#faf9f5`. |
| **Mono positivo (preto sobre branco)** | Imprensa, documentos administrativos, fax. `#141413` sobre `#ffffff`. |
| **Mono negativo (branco sobre preto)** | Dark mode digital, pieces noturnas, end-frame de vídeo. `#faf9f5` sobre `#141413`. |
| **1-color orange (sobre dark)** | Aplicação sobre fundo dark warm (`#141413`) — orange continua orange. |
| **Outline** | Para usos reduzidos extremos ou aplicações em relevo, debossing, embroidery. Stroke 0.12u, fill transparente. |

**Versão reveal `((A I r i g h t))`** sempre é bicolor (palavra em uma cor, `I` em outra). Em mono positivo, o `I` é negrito enquanto o resto é regular (quebra por weight, não por cor).

### Usos sobre fundos

- **Fundo claro (bone, branco)**: full color (orange) ou mono positivo.
- **Fundo escuro (dark, preto)**: mono negativo (branco) ou 1-color orange.
- **Fotografia**: aplicar logo em área de descanso visual. Se foto for densa, usar caixa de proteção bone com clear space duplo.
- **Padrões com textura papel-craft**: o logo respira sobre a textura. Não usar caixa branca sólida — quebra a integração com o background. Manter logo em orange ou em dark direto sobre a textura.
- **Vídeo (slate, lower-third)**: logo em mono negativo (branco), com opacidade 90% para não brigar com imagem.

### Anti-usos (don'ts)

1. **Nunca rotacionar** o lockup — `((Alright))` é horizontal sempre. A versão vertical empilhada é exceção codificada, não rotação.
2. **Nunca aplicar gradiente** ao lockup — orange flat, dark flat, branco flat. Sem gradient SaaS.
3. **Nunca trocar parênteses por colchetes `[ ]` ou chaves `{ }`** — o `(( ))` é fórmula registrada conceitualmente.
4. **Nunca usar parênteses simples `(Alright)`** — tem que ser duplo. O par duplo é a marca.
5. **Nunca aplicar drop shadow, outer glow, bevel ou efeito 3D** — o logo é flat, sempre.
6. **Nunca trocar a palavra `Alright`** por sigla, abreviação ou variação fonética (`Alrt`, `AlR`, `AR`).
7. **Nunca apertar o tracking** entre as letras de `Alright` — kerning é o do tipo, sem manipulação.
8. **Nunca aplicar o lockup em corpo abaixo do mínimo** (96px digital / 18mm impresso) — preferir o símbolo `(( ))` puro nesses casos.

### Co-branding / lockup com cliente (PUMA, HBO Max, Claro)

**Hierarquia**: cliente sempre primeiro (a esquerda), Alright depois (à direita), separados por barra vertical fina ou por espaço.

```
[Logo Cliente]   |   ((Alright))
```

**Espaçamento**: entre o logo do cliente e o separador, distância de 2x altura do `A` da Alright. Mesmo entre separador e `((Alright))`.

**Separador**: barra vertical fina (`|`) na cor neutra (dark sobre fundo claro, bone sobre fundo escuro). Espessura 0.10u.

**Tamanho relativo**: Alright = 70% do tamanho ótico do logo do cliente. Não competir.

**Em deck de credenciais que lista clientes**, Alright **não aparece** — só os clientes. A Alright é a casa que mostra; não é um cliente entre os clientes.

### Como casa com a Big idea `((Look again.))`

A Big idea exige que a marca **recompense o segundo olhar**. A Direção A entrega isso de quatro formas:

1. **O lockup colado `((Alright))` lê limpo na primeira passada** — um wordmark dentro de parênteses, padrão editorial reconhecível.
2. **Quem olha de novo nota o duplo parêntese `((` em vez do único `(` esperado** — pequena estranheza que vira signature.
3. **A versão espaçada `((A I r i g h t))` revela o `AIright`** literalmente — o segundo olhar é codificado como variação oficial do logo.
4. **Os parênteses, como tipografia, são sinais que abrem e fecham um conteúdo** — funcionam como metáfora visual de "olha aqui dentro". O logo já é uma instrução: *look inside*.

A Direção A **transforma o logo em um pequeno aparato de leitura**. Não há símbolo separado para memorizar; há um gesto tipográfico que se repete e se desvenda.

### Tipografia recomendada para esta direção

**Critério da família tipográfica**: geometric grotesk com características obrigatórias:

- `I` maiúsculo e `l` minúsculo perfeitamente idênticos (linha vertical sem serif, sem ear, sem hook).
- `(` `)` com curvatura suave **editorial-warm** (não círculo perfeito tipo Helvetica, não reto tipo Söhne — arco moderado tipo ABC Diatype ou Inter).
- Suporte latino completo (acentuação PT funcional).
- Pesos disponíveis: Regular, Medium, Semibold (mínimo).
- Versão para tela e para impresso (hinting decente).

**Top recomendação**: **ABC Diatype** (Dinamo). `(` `)` têm curvatura editorial perfeita para o conceito; a fonte tem família ampla (Diatype, Diatype Mono, Diatype Rounded); Dinamo é parceiro de Stink e OpenAI — pedigree alinhado.

**Fallback open-source**: **Geist** (Vercel) — `I`/`l` idênticos, free, suporte latino, parênteses limpos.

---

## Direção B — Símbolo autônomo `(( ))` + wordmark separado

### Conceito central

**O `(( ))` é tratado como mark vivo — símbolo autônomo, candidato a virar família "Alright Dings" — e o wordmark `Alright` é assinatura separada.** Os dois operam juntos no lockup oficial, mas cada um sozinho carrega a marca. O `(( ))` puro vira anchor symbol (no canto de slates de vídeo, em watermarks, em assinatura de e-mail, em favicon). O wordmark `Alright` em sans-serif neutra opera onde o nome precisa aparecer escrito (footer institucional, busca, registro). Inspiração: **Stink Studios** (Stink Dings como sistema de glifos paralelo ao logo), **OpenAI** (emotive point + wordmark separados), **Iconoclast** (`/` como brand mark autônomo).

### Como explora `Alright`/`AIright`

A direção opera o trocadilho **na variação do wordmark**, não no símbolo. O símbolo `(( ))` é abstrato (não contém letras). O wordmark `Alright` em sua forma default é limpo. Mas em pieces selecionadas — capítulo "Manifesto" do brand book, hero do site, opening de vídeo — o wordmark aparece como `AIright` (com o `l` substituído visualmente por `I` em weight ou cor diferente). É um **easter egg recorrente**: a marca tem um símbolo (que não revela nada) e um nome (que esconde o trocadilho). Quem decifra o nome ganha o convite para olhar o símbolo de novo. **Os dois elementos são duas camadas de profundidade — duas recompensas.**

### Marca matriz

**Símbolo `(( ))` (mark autônomo)**:

```
(( ))
```

Os dois pares de parênteses, com espaço entre `((` e `))`. Espaço interno = 0.6x altura do parêntese. ASCII com ar:

```
  ((  ))
```

O símbolo é **um objeto vazio** — abre algo, deixa espaço, fecha. Convida preenchimento mental do leitor. É a forma mais pura do brand device. Em uso isolado, evoca a marca sem precisar do nome. Modelo paralelo: o `/` da Iconoclast, o `>` da Sub Pop, o ponto da OpenAI.

**Wordmark `Alright` (assinatura separada)**:

```
Alright
```

Sans-serif Medium, sem ornamentação. A palavra reta, neutra, **sem parênteses**. É o nome escrito. Limpo. Lê em qualquer contexto. Contrasta com o símbolo: símbolo é abstrato e expressivo; wordmark é direto e funcional.

**Lockup oficial — símbolo + wordmark**:

Composição horizontal:

```
(( ))   Alright
```

Composição vertical:

```
 (( ))
Alright
```

Espaço entre símbolo e wordmark = 1x altura do `A` (1u) na versão horizontal, 0.5u na versão vertical.

**Variação reveal `((A I r i g h t))`**:

Esta variação **junta** símbolo e wordmark espaçando o nome dentro dos parênteses. É uma forma híbrida que aparece em momentos específicos (manifesto, hero, opening) — não é o lockup default. ASCII:

```
((A I r i g h t))
   ↑
  accent
```

O `I` central em accent (orange ou weight diferente). É o **único momento em que o wordmark mora dentro dos parênteses na Direção B** — todos os outros usos têm os dois elementos separados. Isso torna o reveal mais raro, mais charneira: quando aparece, marca um momento.

**Lockup expressivo `((We Are Alright))`** — opera como Direção A (parênteses envolvem `We Are Alright`), mas é tratado como **typographic statement** (peça de manifesto), não como logo recorrente. Aparece em hero do site, capa de deck, slate cards de vídeo. Coexiste com o lockup oficial `(( )) Alright` — não conflita.

### Variações obrigatórias

- **Horizontal default**: `(( ))   Alright`
- **Vertical (empilhado)**: `(( ))` em cima, `Alright` embaixo (centralizado).
- **Símbolo isolado**: `(( ))` sozinho — uso autônomo legítimo (favicon, watermark, slate, app icon).
- **Wordmark isolado**: `Alright` sozinho — uso institucional/funcional (footer, registro, busca).
- **Reveal**: `((A I r i g h t))` espaçado com `I` accent — uso especial.
- **Monograma**: `((A))` — primeira letra dentro dos parênteses. Aplicação em packaging restrito, social avatars (quando `(( ))` puro fica ambíguo).

**Responsive logos** (do menor ao maior):

| Tamanho | O que aparece |
|---|---|
| Favicon ≤ 16px | `(( ))` puro |
| Favicon 32–48px | `(( ))` puro com mais ar |
| App icon 48–128px | `((A))` (monograma) ou `(( ))` puro com background brand |
| Lockup compacto 128–256px | `(( )) Alright` horizontal |
| Lockup full ≥ 256px | `(( )) Alright` com clear space confortável |
| Hero ≥ 480px | `((We Are Alright))` expressivo |

### Construção / grid

**Grade base**: x-height da letra `A` do wordmark = 1 unidade (1u).

**Para o símbolo `(( ))`:**
- Altura do parêntese = 1.6u (mais alto que o `A` — o símbolo é um objeto autônomo, ganha presença).
- Espessura do stroke = 0.20u (levemente mais grosso que o stroke da fonte do wordmark — separa visualmente os dois sistemas).
- Distância entre os dois `(` do par `((` = 0.20u.
- Distância entre `((` e `))` (vazio interno) = 0.96u (1.6u × 0.6).
- Curvatura: arco editorial moderado, mesmo desenho dos parênteses do wordmark (família tipográfica).

**Para o wordmark `Alright`:**
- Sans-serif Medium ou Semibold.
- Kerning padrão da fonte.
- Sem ornamentação.

**Para o lockup `(( ))   Alright`:**
- Distância horizontal entre `))` do símbolo e `A` do wordmark = 1u.
- Alinhamento vertical: centro óptico do símbolo (não baseline) alinha com x-height do wordmark.

### Área de proteção (clear space)

**Símbolo isolado**: clear space mínimo = 1x a altura interna do parêntese (1.6u em todos os lados).

**Wordmark isolado**: clear space mínimo = 1x altura do `A` (1u).

**Lockup completo `(( )) Alright`**: clear space mínimo = 1x altura do `A` (1u) ao redor do conjunto inteiro.

```
 ┌─────────────────────────────────────┐
 │                                     │  ← 1u
 │                                     │
 │   ((  ))     Alright                │
 │                                     │
 │                                     │  ← 1u
 └─────────────────────────────────────┘
```

Em aplicações premium, dobrar para 2u.

### Tamanho mínimo

- **Símbolo `(( ))` digital**: mínimo 24px de largura. Em favicon 16px o símbolo precisa ser desenhado com hinting manual (versão pixel-perfect).
- **Wordmark `Alright` digital**: mínimo 64px de largura.
- **Lockup completo digital**: mínimo 144px de largura.
- **Símbolo `(( ))` impresso**: mínimo 6mm de largura.
- **Wordmark impresso**: mínimo 14mm de largura.
- **Lockup completo impresso**: mínimo 30mm de largura.

### Versões cromáticas

| Versão | Símbolo | Wordmark | Lockup |
|---|---|---|---|
| **Full color (orange sobre bone)** | Orange `#d97757` | Dark `#141413` | Símbolo orange + wordmark dark |
| **Mono positivo (preto sobre branco)** | `#141413` | `#141413` | Tudo dark |
| **Mono negativo (branco sobre preto)** | `#faf9f5` | `#faf9f5` | Tudo bone |
| **1-color orange** | Orange | Orange | Tudo orange (uso premium, raro) |
| **Outline** | Stroke vazio | Outline tipográfico | Versão para relevo/embroidery |

**Decisão de variação cromática a Bera**: a versão default é **bicolor** (símbolo orange + wordmark dark) ou **monocromática orange** (símbolo orange + wordmark orange)? A bicolor cria contraste e hierarquia interna; a monocromática é mais radical (modelo Mistral). *Item para decisão na Fase 3.*

### Usos sobre fundos

- **Fundo bone (default)**: símbolo orange + wordmark dark. A composição respira.
- **Fundo dark**: símbolo orange + wordmark bone. A cor accent permanece.
- **Fundo branco institucional**: mono positivo (tudo dark).
- **Fotografia**: usar só símbolo `(( ))` sobre área de descanso (canto), em mono negativo (branco) com opacidade 80–90%. Lockup completo sobre foto pede caixa bone de proteção.
- **Padrão papel-craft**: símbolo orange direto sobre a textura, wordmark dark direto sobre a textura. Sem caixa.

### Anti-usos (don'ts)

1. **Nunca colar símbolo e wordmark** sem o espaço de 1u — eles **são separados** por design.
2. **Nunca rotacionar** símbolo ou wordmark.
3. **Nunca aplicar gradiente** ao símbolo ou ao wordmark.
4. **Nunca substituir** os parênteses do símbolo por colchetes, chaves, parênteses simples ou pontuação alternativa.
5. **Nunca usar o símbolo `(( ))` como letra dentro de uma palavra** (`A((right))`) — quebra a função autônoma.
6. **Nunca aplicar efeito 3D, drop shadow, glow** ao símbolo ou ao wordmark.
7. **Nunca trocar a ordem do lockup** — símbolo sempre antes do wordmark (esquerda na horizontal, topo na vertical).
8. **Nunca usar o wordmark `Alright` em caixa alta `ALRIGHT` ou em itálico** — sempre title case, sempre roman.

### Co-branding / lockup com cliente

**Hierarquia**: cliente à esquerda, separador, lockup Alright à direita. **Apenas o wordmark `Alright`** aparece em co-branding (não o símbolo separado), para não competir com o logo do cliente.

```
[Logo Cliente]   |   Alright
```

Em pieces tier-1 onde o `(( ))` precisa aparecer (ex: end-frame de vídeo de campanha PUMA), usar o símbolo isolado em mono negativo no canto inferior direito, separado da assinatura institucional. Símbolo vira **assinatura silenciosa** sobre o trabalho, não competidor de logos.

### Como casa com a Big idea `((Look again.))`

A Direção B materializa a Big idea de forma estrutural:

1. **O símbolo `(( ))` é literalmente um espaço vazio entre dois sinais que abrem e fecham** — convida o olhar a preencher. É o convite mais puro: "olha aqui, o que tem dentro?".
2. **A separação entre símbolo e wordmark** cria duas camadas de leitura — quem vê só o `(( ))` reconhece a marca pelo signo; quem vê o `Alright` reconhece pelo nome. **A marca tem dois entry points.**
3. **O reveal `((A I r i g h t))`** é raro e charneira — quando aparece, é evento. Modelo Sub Pop com tagline alternativa, modelo OpenAI com Sora landscapes em momentos especiais.
4. **A família "Alright Dings" futura** (variações do `(( ))` para vocabulário visual: `((cut))`, `((beat))`, `((more craft))`, `((look again))`) **transforma o brand device em sistema de leitura recompensador**. Cada glifo é uma pequena descoberta, modelo direto Stink Dings.

### Tipografia recomendada para esta direção

**Critérios**:
- `I` maiúsculo e `l` minúsculo idênticos.
- Sans-serif neutra de alta qualidade — wordmark precisa ser **invisível como sistema** (modelo Smuggler/Park) para o símbolo carregar a expressividade.
- Pesos amplos (Regular, Medium, Semibold, Bold).
- Suporte latino completo.
- `(` `)` da família devem casar com o desenho do símbolo `(( ))` autônomo.

**Top recomendação**: **ABC Diatype** ou **Söhne** — ambos têm neutralidade premium e parênteses bem desenhados que viram referência para o símbolo autônomo.

**Fallback open-source**: **Inter** ou **Geist** — workhorses competentes, free.

**Para a família "Alright Dings"** (futura — Fase 2.2 ou 3): pesquisar parceria Dinamo (modelo Stink) para custom font de glifos derivados do `(( ))`. Budget e timing para definir.

---

## Direção C — Wordmark com `I` accent destacado (revealing default)

### Conceito central

**A marca matriz é `Alright` escrita de forma que o glifo central — o `l`/`I` ambíguo — esteja sempre destacado.** O reveal do `AIright` está embutido na própria assinatura default. Não há versão "limpa" que esconde o trocadilho — o trocadilho **é** o logo. A descoberta tipográfica vira earmark, modelo direto **A24** (com o "earmark" da letra `A`) e **OpenAI** (com glyphs proprietários no wordmark). O `(( ))` permanece como brand device autônomo (similar à Direção B), mas o protagonismo do logo está no wordmark com seu accent. Quem vê o logo já vê a marca declarando seu duplo sentido — sem espera.

### Como explora `Alright`/`AIright`

A direção é a mais **explícita** das três sobre o trocadilho. O `l` minúsculo no centro de `Alright` é tratado como **glifo proprietário**: tem cor diferente (orange quando o resto é dark), ou weight diferente (bold quando o resto é regular), ou está sublinhado/marcado. **Sempre destacado, sempre.** Quem lê em velocidade lê `Alright`; quem pausa milésimos vê `AIright`. **A descoberta não é easter egg — é declaração default.** O logo é o argumento.

### Marca matriz

**Wordmark default — `Alright` com `l` accent**:

ASCII (com `l` em destaque por weight):

```
A l r i g h t
   ↑
  accent
```

ASCII (com `l` em destaque por cor — em dark, o `l` é orange):

```
Alright
   ↑
 orange
```

Composição: a palavra `Alright` em sans-serif Medium ou Semibold. O `l` (4ª letra) recebe **uma das três tratativas de accent** — Bera escolhe na próxima rodada qual vira default:

**Variante C.1 — Accent por cor**: `l` em orange, demais letras em dark. O olho registra um pulso de cor no centro da palavra. Modelo Verso Books (cor saturada como ideologia), modelo Patagonia (`O` colorido em "Patagonia" em alguns merchs).

**Variante C.2 — Accent por weight**: `l` em Black/Bold, demais letras em Regular ou Medium. O olho registra um pulso de peso no centro da palavra. Modelo Sub Pop (caps bold com arrows entre letras), modelo Iconoclast (`/` final mais forte que as caps).

**Variante C.3 — Accent por marca discreta**: pequeno bracket sob ou sobre o `l`, ou um ponto, ou um underscore. Modelo A24 (earmark do `A`). Mais sutil das três.

```
Alright          Alright          Alright
   ↑                ↑                ‧
 orange           bold             marca
                                 discreta
```

**Lockup expressivo `((We Are Alright))`** — versão hero/manifesto. O `l` de `Alright` recebe a mesma tratativa de accent. ASCII:

```
((We Are Alright))
            ↑
          accent
```

**Variação reveal `((A I r i g h t))`** — espaçado, com `I` central em accent ainda mais pronunciado. Esta variação é o **upgrade** do logo default — o reveal "resolvido" no qual o trocadilho fica completamente declarado.

```
((A I r i g h t))
     ↑
   AAccent (cor + weight + tracking)
```

**Símbolo `(( ))`** — permanece como brand device autônomo (como na Direção B), mas com peso menor no sistema. Aparece em watermarks, slate cards, favicons. Não compete com o wordmark — é assinatura silenciosa.

### Variações obrigatórias

- **Horizontal default**: `Alright` com `l` accent.
- **Vertical (empilhado)**: não recomendado — a palavra `Alright` em vertical perde o accent visual (lê linha, não palavra). Em casos extremos, empilhar `(( ))` sobre `Alright` (com accent) horizontal.
- **Símbolo isolado**: `(( ))` puro — uso autônomo (favicon, watermark, slate).
- **Reveal expandido**: `((A I r i g h t))` espaçado.
- **Monograma**: `((A))` ou `(A)` — primeira letra dentro de parêntese único ou duplo. Para social avatars, packaging restrito.
- **Wordmark sem accent (versão "neutra")**: existe **só para casos onde o accent quebra** (impressão B&W em jornal, fax, monocrômico extremo). Documentar como fallback, não como default.

**Responsive logos** (do menor ao maior):

| Tamanho | O que aparece |
|---|---|
| Favicon ≤ 16px | `(( ))` puro (o accent do `l` não lê nesse tamanho) |
| Favicon 32–48px | `(( ))` puro ou `((A))` |
| App icon 48–128px | `((A))` ou `Alright` com accent |
| Wordmark ≥ 96px wide | `Alright` completo com accent |
| Hero ≥ 320px wide | `((We Are Alright))` com `l` de Alright em accent |
| Special reveal | `((A I r i g h t))` espaçado |

### Construção / grid

**Grade base**: x-height da letra `A` = 1 unidade (1u).

**Para o wordmark `Alright`:**
- Sans-serif Medium ou Semibold.
- Kerning padrão da fonte para todas as letras **exceto `l`**.
- O `l` recebe leve tracking adicional (+5 a +8 unidades em cada lado) **se o accent for por cor** — para isolá-lo visualmente.
- Se o accent for por weight (variante C.2), o `l` em Bold/Black tem o tracking nativo da fonte (sem ajuste).

**Para o accent (variante C.1 — cor):**
- O `l` em orange `#d97757` quando o restante está em dark `#141413`.
- Quando o wordmark inteiro está em orange (sobre fundo dark), o `l` vira dark — o accent troca de cor mas mantém o pulso visual.

**Para o accent (variante C.2 — weight):**
- O `l` em Black (weight 900) quando o restante está em Medium (weight 500). Diferença de 400 unidades de weight é crítica.

**Para o accent (variante C.3 — marca discreta):**
- Pequeno bracket `[` `]` em escala 0.3u sob o baseline do `l`, ou underscore de espessura 0.15u.

**Para o lockup `((We Are Alright))`:**
- Parênteses externos com construção descrita em Direção A.
- Dentro, o wordmark com `l` accent.

### Área de proteção (clear space)

**Wordmark `Alright`**: clear space mínimo = 1x altura do `A` (1u) em todos os lados.

**Lockup `((We Are Alright))`**: 1u externo aos parênteses.

**Símbolo `(( ))` isolado**: 1u em todos os lados.

```
 ┌─────────────────────────────┐
 │                             │  ← 1u
 │                             │
 │   Alright                   │
 │                             │
 │                             │  ← 1u
 └─────────────────────────────┘
```

### Tamanho mínimo

- **Wordmark `Alright` digital**: mínimo 96px de largura. **Crítico**: abaixo de 96px o accent (cor ou weight) começa a perder definição.
- **Símbolo `(( ))` digital**: mínimo 16px.
- **Lockup `((We Are Alright))` digital**: mínimo 192px de largura.
- **Wordmark impresso**: mínimo 20mm de largura.
- **Símbolo impresso**: mínimo 4mm.
- **Lockup impresso**: mínimo 40mm.

### Versões cromáticas

| Versão | Wordmark | `l` accent | Símbolo |
|---|---|---|---|
| **Full color (default)** | Dark `#141413` | Orange `#d97757` | Orange |
| **Inverted (dark mode)** | Bone `#faf9f5` | Orange `#d97757` | Orange |
| **Mono positivo** | Dark | Dark Black/Bold (weight) | Dark |
| **Mono negativo** | Bone | Bone Black/Bold (weight) | Bone |
| **1-color orange** | Orange | Orange Black/Bold (weight) | Orange |
| **Outline** | Stroke vazio | `l` em fill sólido | Stroke vazio |

**Em mono cromático**, o accent do `l` muda de tratamento — sai da cor e vai para weight. **A regra é**: o `l` é sempre destacado, mas o método varia pelo contexto cromático.

### Usos sobre fundos

- **Fundo bone (default)**: wordmark dark com `l` orange. Composição vibra.
- **Fundo dark**: wordmark bone com `l` orange. O orange continua orange.
- **Fundo branco institucional**: mono positivo (wordmark dark, `l` Black/Bold).
- **Fotografia**: usar só símbolo `(( ))` ou wordmark com caixa bone de proteção. Accent do `l` quebra sobre foto densa — preferir versão B&W com accent por weight.
- **Padrão papel-craft**: full color direto sobre textura.

### Anti-usos (don'ts)

1. **Nunca remover o accent** do `l` (fora do fallback B&W documentado) — o accent é o logo.
2. **Nunca trocar a letra accent** — é o `l` (o quarto glifo de `Alright`), não outra letra.
3. **Nunca usar duas letras em accent** — só o `l`. Múltiplos accents quebram a leitura `AIright`.
4. **Nunca aplicar accent por outline ao redor do `l`** — o accent é cor ou weight, nunca borda.
5. **Nunca rotacionar o wordmark.**
6. **Nunca aplicar gradiente** ao wordmark ou ao `l` accent.
7. **Nunca animar o accent** em motion (piscar, pulsar) — o accent é estático. Motion explora outras formas (zoom, fade in das letras).
8. **Nunca trocar `Alright` por sigla, abreviação, ou versão lowercase `alright`** — exceto o caso editorial raro descrito no sistema verbal.

### Co-branding / lockup com cliente

**Hierarquia**: cliente à esquerda, separador, `Alright` (com accent) à direita.

```
[Logo Cliente]   |   Alright
                        ↑
                      accent
```

**Atenção crítica**: o accent do `l` deve aparecer mesmo em co-branding — é parte da assinatura institucional. Em casos onde o background é cor proibitiva para o orange (ex: marca cliente é orange), usar accent por weight (`l` em Bold).

**Tamanho relativo**: Alright = 70% do tamanho ótico do cliente. Mesmo que Direção A.

### Como casa com a Big idea `((Look again.))`

A Direção C **declara o segundo olhar como default** — não há versão sem reveal. Argumentos:

1. **O accent do `l` é instrução visual permanente**: "olha de novo, isto não é só `Alright`". A marca não espera o usuário descobrir; mostra desde sempre.
2. **A versão expandida `((A I r i g h t))`** vira o **upgrade do reveal**: a forma "completa" do logo, usada em momentos de manifesto. Quem já leu o accent default do `l` reconhece imediatamente o jogo na versão espaçada.
3. **A descoberta tipográfica vira ativo central da marca** — não é easter egg escondido, é proposição de valor visualizada.
4. **Risco controlado**: como o accent é declarado, perde o elemento de surpresa do "easter egg encontrado". Mas ganha em **clareza e ownability** — quem vê o logo Alright sempre vê o trocadilho. Não há reveal pendente, há tese visualizada.

### Tipografia recomendada para esta direção

**Critérios**:
- `I` maiúsculo e `l` minúsculo perfeitamente idênticos (crítico para o conceito funcionar).
- Pesos disponíveis em range amplo (Regular, Medium, Semibold, Bold, Black) — para a variante C.2 funcionar com contraste de weight forte.
- Fonte com personalidade levemente expressiva — o accent precisa ressoar com o caráter da fonte.
- Suporte latino completo.

**Top recomendação**: **ABC Marfa** (Dinamo) ou **Funnel Display** — ambas têm caráter expressivo e range de pesos amplo. ABC Marfa tem o `l` com construção limpa que aceita bem o accent.

**Fallback open-source**: **Inter** (range de 9 pesos) ou **Funnel Display**.

---

## Matriz comparativa final — as 3 direções

| Critério | Direção A (Lockup integrado) | Direção B (Símbolo + wordmark) | Direção C (`l` accent) |
|---|---|---|---|
| **Conceito central** | `((` envolve, é o logo | `(( ))` autônomo + wordmark separado | `Alright` com `l` em accent permanente |
| **Ownability** (registro de signo) | Alta — `((Alright))` é assinatura única | Muito alta — duas formas registráveis (`(( ))` + wordmark) | Média-alta — accent é gesto, não signo único |
| **Escalabilidade visual** (favicon → hero) | Boa — `(( ))` puro funciona em favicon, `((Alright))` em wordmark | Excelente — símbolo `(( ))` funciona perfeito em qualquer escala | Boa — accent perde abaixo de 96px, fallback `(( ))` cobre |
| **Complexidade de produção** | Baixa — wordmark único, kerning específico | Média — dois sistemas separados, lockup composto | Média-alta — accent precisa decisão (cor vs weight vs marca) |
| **Ressonância com `((Look again.))`** | Alta — parênteses convidam leitura interna, reveal espaçado materializa Big idea | Muito alta — símbolo vazio é convite puro, wordmark separado cria duas camadas | Muito alta — declara o reveal como default, marca é a tese |
| **Encaixe com tese visual editorial-craft** | Excelente — operação tipográfica pura, modelo Iconoclast/Sub Pop | Excelente — sistema Stink/OpenAI replicado | Bom — accent introduz expressividade que pode flertar com decoração |
| **Versatilidade para "Alright Dings" futura** | Média — `(( ))` aparece sempre com texto, dificulta família autônoma | Excelente — símbolo `(( ))` autônomo é base direta para família de glifos | Média — `(( ))` autônomo existe, mas não é protagonista |
| **Risco de leitura errônea** (cliente confuso) | Baixo — leitura direta `Alright` | Muito baixo — wordmark é limpo | Médio — accent pode parecer erro de impressão para cliente desatento |
| **Coerência com deck atual** (já usa `(( ))` como rubrica + wrapper) | Alta — operação já em uso | Alta — codifica o `(( ))` que já é autônomo no deck | Média — adiciona elemento (accent) que ainda não está no deck |
| **Internationalização** (parceiros tier-1) | Alta — operação tipográfica universal | Alta — sistema de glifos é vocabulário tier-1 contemporâneo | Alta — accent é assinatura visual reconhecível |
| **Tempo até dominar a marca** (familiarização do mercado) | Curto-médio — lockup novo, `((Alright))` precisa repetir | Médio — dois elementos, mais para lembrar | Curto — accent é immediate, declara desde o primeiro contato |
| **Custo cognitivo para o usuário** | Baixo | Médio (dois objetos para reconhecer) | Baixo |
| **Quanto se destaca no mercado** (anti-mesmice AI) | Alto | Muito alto — sistema de glifos custom é raro | Alto |

---

## Recomendação e decisões pendentes

### Recomendação top

**Direção B — Símbolo `(( ))` autônomo + wordmark separado.**

Três razões objetivas:

1. **Encaixe estrutural com a tese visual cravada**. A Fase 0 mapeou o quadrante "editorial-craft com tech sub-rosa" e identificou Stink Dings como playbook direto. A Direção B é a única que **abre caminho real para a família "Alright Dings"** — porque o `(( ))` precisa existir como signo autônomo antes de gerar variações. Direção A enterra o `(( ))` no wordmark; Direção C subordina o `(( ))` ao accent. **Só B trata o `(( ))` como ele já opera no deck atual** — mark vivo, em múltiplas escalas, já autônomo (slides 9 e 12 mostram isso).

2. **Maior ressonância com a Big idea `((Look again.))`**. O símbolo `(( ))` puro é literalmente um vazio entre dois sinais que abrem e fecham — convida o olhar a preencher. É o mais puro convite. E a separação símbolo + wordmark cria duas camadas de leitura — duas recompensas. Quem decifra o nome (`Alright` → `AIright`) ganha o convite para olhar o símbolo `(( ))` de novo.

3. **Maior valor estratégico de longo prazo**. Direção A é elegante mas autocontida. Direção C é forte mas adiciona expressividade que pode envelhecer (accents podem cansar). Direção B é **infraestrutura** — abre roadmap para Fase 2.2 (família Dings), Fase 3 (motion derivado de "abrir/fechar"), Fase 4 (ícones temáticos para microsite e templates de vídeo). É a direção que cresce com a marca em vez de servir só ao logo.

A escolha entre B e C é a decisão crítica. C é a aposta mais radical (declara o trocadilho como tese); B é a aposta mais sistêmica (constroi infraestrutura visual escalável). **Aposto em B porque a Alright tem 5 anos pela frente e precisa de um sistema, não de um truque.**

### Decisões pendentes que Bera precisa tomar antes da Fase 3

1. **Qual das 3 direções vira marca matriz Alright?** (A, B ou C — a escolha trava todo o resto da Fase 2.)
2. **Se Direção B**: a versão default cromática é **bicolor** (símbolo orange + wordmark dark) ou **monocromática orange** (tudo orange)? A bicolor cria hierarquia interna; a monocromática é mais radical (modelo Mistral).
3. **Se Direção C**: o accent do `l` é por **cor** (variante C.1, modelo Verso), por **weight** (variante C.2, modelo Sub Pop), ou por **marca discreta** (variante C.3, modelo A24)? A escolha redefine o caráter visual.
4. **A versão "Alright Dings" entra no escopo da Fase 2.2 ou fica para Fase 3+?** Se entrar agora, precisa orçamento de tipografia custom (Dinamo ou similar). Se ficar para depois, documenta-se como roadmap.
5. **A versão reveal `((A I r i g h t))` espaçada vira ativo oficial codificado** ou permanece como variação editorial usada caso a caso? (Tem implicação de governança: se for oficial, entra no brand book como elemento do sistema; se for editorial, vira liberdade do designer por projeto.)
6. **Lockup co-branding com cliente**: o `(( ))` aparece junto do logo cliente ou só o wordmark `Alright`? Recomendação atual é só wordmark, mas Bera pode preferir presença do símbolo em pieces tier-1.

---

*v0.1 — 2026-05-10. Próximo passo: revisão Bera + escolha de direção. Após decisão, Subagente 2.2 cravar fonte específica e Fase 3 abrir paleta + house look + motion.*

*((We Are Alright))*
