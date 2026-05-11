# Alright — Motion principles & system

> Sistema de motion da Alright (produtora audiovisual AI-first, SP). Codifica princípios, tokens (duration, easing, distance), animação do logo dual-state, transições assinatura, microinterações de UI e regra de `prefers-reduced-motion`.
>
> **Versão**: 0.1 — primeira codificação. **Data**: 2026-05-10. **Owner**: brand visual core.
>
> **Pré-requisitos cravados**: Big idea `((Look again.))` (estratégia §12), logo Direção C dual-state (C.2 default + C.1 expressivo + reveal `((A I r i g h t))`), brand device `(( ))` autônomo, paleta warm (orange clay `#d97757` / bone `#faf9f5` / dark `#141413`), tipografia Bricolage Grotesque variable.

---

## 1. Filosofia de motion

A Alright é uma produtora de motion. **Não ter motion da própria marca seria gap óbvio.** Mas o motion da marca não é showreel — é a tradução cinética da Big idea `((Look again.))`. A regra-mãe: *motion serve o segundo olhar*. Reveals lentos (1.4–1.8s) substituem cortes nervosos. A marca não corre — recompensa quem pausa. O ritmo é cinematográfico, medido em segundos com beats que respiram, não em milissegundos UI medidos em snap. Quando a Alright se anima, ela se anima como filme: o frame se desvenda, não se resolve.

Isso significa três renúncias técnicas explícitas. Renunciamos a **springs SaaS** (bouncy, elásticos, sobrecorrentes) — Material You bouncy springs, Linear-style snap-to-grid bounces, Framer Motion `type:"spring"` defaults. Renunciamos a **parallax exagerado** que vira feature em si mesmo. E renunciamos a **micro-animação por padrão** — cada animação tem um motivo editorial, não decorativo. O sistema é pequeno e cravado: 6 durations, 5 easings, 3 distances, 4 padrões de logo, 6 microinterações de UI. Tudo que sair desse sistema é override deliberado — assinado pelo owner, não improvisado pelo dev.

---

## 2. Princípios de animação (5)

### 2.1 Look again moments

**Definição**. Toda peça canônica da marca tem ao menos 1 reveal lento (≥1.4s) que recompensa o segundo olhar.

- **Como se manifesta**: zoom-in lento sobre detalhe; fade reveal de uma camada que estava invisível; espaçamento progressivo letra a letra do wordmark; cor que migra de neutra para accent.
- **Easing**: `motion.easing.cinematic` (`cubic-bezier(0.16, 1.0, 0.3, 1.0)`) — desacelera para um quase-pousar, dá a sensação de "frame que assenta".
- **Ritmo**: o reveal nunca é contínuo a velocidade constante. Sempre tem 60–70% do percurso na primeira metade do tempo + 30–40% no slow-out final, onde mora a recompensa.
- **Anti-modelo**: reveal a velocidade linear ou com snap final tipo "vinheta SaaS".

### 2.2 Reveal over cut

**Definição**. Preferência declarada por reveals (zoom, fade, opacity, scale) sobre cortes nervosos.

- **Como se manifesta**: transições entre seções do site usam fade + slide (400ms+); transições entre cenas de filme usam fade-to-bone (8–14 frames @ 24fps); slate cards aparecem por reveal, não por flash.
- **Easing**: `motion.easing.emphasized` (`cubic-bezier(0.2, 0.0, 0.0, 1.0)`) para entradas; `motion.easing.accelerate` para saídas.
- **Ritmo**: cortes só são permitidos em material editorial onde o cliente pediu corte (filme cliente segue o brief). No material da própria Alright, a regra é reveal.
- **Anti-modelo**: jump-cut entre slides; corte seco entre seções de hero do site; transição de página por flash.

### 2.3 Easing humano

**Definição**. As curvas de easing derivam de física natural (deceleração observada em objetos físicos), não de spring SaaS.

- **Como se manifesta**: nenhuma curva ultrapassa o destino e volta (overshoot zero). Tudo desacelera para o destino sem ricochete.
- **Easing**: a base é `easeOutExpo` (`cubic-bezier(0.16, 1.0, 0.3, 1.0)`) e variantes — curvas em que a maior parte da distância é coberta no início e o final é um suave assentamento.
- **Ritmo**: motion da Alright tem "respiração" — a sensação de que algo está terminando de chegar, não de que algo bateu. Modelo conceitual: Disney "slow in / slow out" com peso editorial.
- **Anti-modelo**: `cubic-bezier(0.5, 1.5, 0.5, 1.0)` (overshoot) ou `type:"spring"` com `damping<10` (oscilante).

### 2.4 Tempo cinematográfico

**Definição**. Duration medida em segundos (não milissegundos UI), com beats que respiram.

- **Como se manifesta**: hero reveals em 1.4–1.8s; logo entry em 2.6s; reveals editoriais em até 1.8s; UI micro continua em 100–400ms (seria patológico animar um botão em 1.4s).
- **Easing**: `motion.easing.cinematic` para o que é cinematográfico; `motion.easing.standard` ou `decelerate` para o que é UI.
- **Ritmo**: a régua é "isso é UI ou é editorial?". UI = ms, editorial = s.
- **Anti-modelo**: hero do site com transição de 300ms; logo entry de 800ms; reveal de manifesto em 600ms. Tudo isso é "agência rápida", não "produtora cinematográfica".

### 2.5 Reduced motion como default friendly

**Definição**. Animação respeita `prefers-reduced-motion` sem virar inacessível ou apagada — substitui motion-heavy por fade leve, mantém color shift, preserva legibilidade.

- **Como se manifesta**: quando o usuário sinaliza preferência, reveals viram fade em ≤300ms; logo entry skippa para state final; microinterações mantêm color shift e perdem scale; auto-play de vídeo segue silenciado e com controle.
- **Easing**: em modo reduzido, todas as curvas viram `motion.easing.standard` (curva conservadora). Sem cinematic, sem emphasized.
- **Ritmo**: o sistema reduzido é ainda assim *sistema* — não é "remover tudo". É "trocar a entrega cinematográfica por uma entrega editorial seca".
- **Anti-modelo**: ignorar a media query; ou desligar tudo (vira interface morta); ou manter reveals lentos com motion-blur (gatilho vestibular clássico).

---

## 3. Motion tokens

### 3.1 Duration tokens

| Token | Valor | Uso |
|---|---|---|
| `motion.duration.instant` | 100ms | Microinteração de feedback (button press, focus ring appear) |
| `motion.duration.fast` | 200ms | Hover state, color shift, tooltip, focus ring transition |
| `motion.duration.normal` | 400ms | Modal open, dropdown, panel slide, page fade |
| `motion.duration.slow` | 800ms | Section transitions, scroll-triggered card reveal |
| `motion.duration.cinematic` | 1400ms | Logo reveal, hero zoom, page transition editorial, scroll-into-view hero |
| `motion.duration.editorial` | 1800ms | "Look again" moments, brand canon reveals, manifest opening, image reveal close-to-wide |

**Justificativa**. Os 4 primeiros (instant/fast/normal/slow) seguem a escala Material 3 (50ms/100/200/300/400/500/700/1000ms reduzida ao essencial editorial). Os 2 últimos (cinematic/editorial) são extensões assinadas: 1400ms é a duração média de um "reveal de filme curto" antes do jaded viewer pular; 1800ms é o limite onde reveal vira "lento de propósito" — o pulso cinematográfico de A24 trailers.

### 3.2 Easing tokens

| Token | Curve | Uso |
|---|---|---|
| `motion.easing.standard` | `cubic-bezier(0.4, 0.0, 0.2, 1.0)` | Default UI, transições neutras, color shift |
| `motion.easing.decelerate` | `cubic-bezier(0.0, 0.0, 0.2, 1.0)` | Entradas (slide in, fade in), elementos chegando |
| `motion.easing.accelerate` | `cubic-bezier(0.4, 0.0, 1.0, 1.0)` | Saídas (slide out, fade out, modal close) |
| `motion.easing.emphasized` | `cubic-bezier(0.2, 0.0, 0.0, 1.0)` | Reveals editoriais com peso, hero into view |
| `motion.easing.cinematic` | `cubic-bezier(0.16, 1.0, 0.3, 1.0)` | Look again moments — equivale a easeOutExpo, "respira" |

**Justificativa**. Standard, decelerate, accelerate e emphasized seguem Material Design 3 motion specs (validados como mínimo defensável em UI editorial). `motion.easing.cinematic` é o `easeOutExpo` clássico (Robert Penner, 2001) — a curva mais usada em opening de feature filme contemporâneo, com 95% da distância coberta nos primeiros 50% do tempo. É a curva que entrega "frame que assenta". Nenhuma das curvas tem overshoot — overshoot bate o destino e volta, é signature SaaS bouncy, anti-modelo cravado.

### 3.3 Distance tokens

| Token | Valor | Uso |
|---|---|---|
| `motion.distance.subtle` | 4px | Hover lift de botão, focus ring nudge |
| `motion.distance.normal` | 16px | Slide in de dropdown, panel, tooltip |
| `motion.distance.dramatic` | 64px | Slide in de modal, hero scroll reveal, page transition |

**Justificativa**. Três níveis cobrem 95% dos casos. `subtle` é micro-aware (perceptível mas não intrusivo); `normal` é UI legível; `dramatic` é editorial — a distância que faz o eye registrar "isso entrou no quadro". Acima de 64px, a entrada vira showreel — não permitido em UI; permitido em vídeo embedded.

---

## 4. Animação do logo (decisiva)

### 4.1 Logo entry animation (peça canônica)

Animação de entrada do logo na primeira aparição em peça canônica: hero do site, opening de filme institucional, slate inicial de deck. A sequência é editorial, não UI.

**Total duration: 2.6s** (steady state após 2.6s, hold).

| Tempo (ms) | Evento | Easing | Notas |
|---|---|---|---|
| 0–200 | Nada visível (delay editorial) | — | Bone background limpo. O ar é parte da composição. |
| 200–1000 | `Alright` aparece em fade + 4px de translate vertical (de baixo para cima). State: Default C.2 (Bricolage Regular 400, `l` central em Bold 700). | `motion.easing.cinematic` (1400ms na fade — começa em 200ms termina em 1600ms; mas peso visual é registrado entre 200 e 1000) | Wordmark colado já com accent C.2. |
| 1000–1400 | Pausa. Wordmark hold. | — | 400ms de respiração. O olho assenta no `l` Bold. |
| 1400–2000 | `((` aparece à esquerda, `))` à direita, simultaneamente, em fade + 4px de translate horizontal afastando do wordmark (i.e., `((` slide vindo da direita ligeiramente, `))` da esquerda — convergem para envelopar). | `motion.easing.emphasized` (600ms) | Brand device se forma ao redor. Resultado: `(( Alright ))` com clear space respeitado. |
| 2000–2400 | Pausa. Lockup `((Alright))` hold em state Default C.2. | — | 400ms. Esta é a leitura padrão da marca em peça canônica. |
| 2400–2600 (opcional, peça premium) | State migra de Default C.2 → Expressivo C.1: o `l` central recebe overlay de orange clay `#d97757` em color shift suave, simultâneo a peso recuando para Regular 400 uniforme. | `motion.easing.standard` (200ms) | Esta é a "revelação" — o accent cromático aparece. Para 90% das peças, esta etapa não acontece (logo permanece em C.2 weight). Para peças premium tier-1, acontece como cravar editorial. |
| 2600+ | Hold final. | — | Lockup permanece estático até intervenção. |

**Princípio**. A entrada do logo é uma frase em três tempos — *wordmark / parênteses / accent (opcional)*. Cada tempo tem pausa antes do próximo. **Sem pausa, vira animação SaaS**. Com pausa, vira filme.

**Anti-uso**. Logo não tem bounce final. Logo não pisca. Logo não tem motion-blur. Logo não tem efeito 3D. Se a peça pede mais drama, sobe-se a duração total para 3.0–3.4s; não se acrescenta efeito.

### 4.2 Logo dual-state transition (Default C.2 → Expressivo C.1)

Transição entre os dois states do logo Direção C.

- **Trigger**: hover em links/botões dentro do hero (apenas em peças interativas premium); scroll que cruza marco específico (e.g., entrada de seção "manifesto"); evento editorial deliberado em vídeo (e.g., abertura de slate canon).
- **Duration**: 600ms.
- **Easing**: `motion.easing.emphasized` (`cubic-bezier(0.2, 0.0, 0.0, 1.0)`).
- **Visual**: o `l` central recebe color shift de dark `#141413` → orange clay `#d97757`, simultâneo a weight shift de Bold 700 → Regular 400 (peso recua, cor avança). Os outros glifos não mudam.
- **Reverse**: o reverse (C.1 → C.2) usa `motion.easing.standard` em 400ms — mais rápido, menos editorial. Razão: a entrada no expressivo é o evento; o retorno ao default é "voltar ao normal".

**Decisão pendente para Bera** (ver §13): em hover, a transição é **automática** ou só em **trigger editorial específico**? Recomendação cravada: hover só em peças hero do site (1 ou 2 lugares). Em todo o resto, a transição é editorial — não dispara por mouse.

### 4.3 Reveal animation: `Alright` → `((A I r i g h t))`

Animação que revela o trocadilho estrutural — `Alright` ↔ `AIright`. É o ato editorial máximo da marca. Uso restrito (1× por documento, frame canon).

- **Trigger**: ato deliberado — abertura de manifesto, frame-charneira de motion em case canônico, capa de mídia institucional. Nunca automático.
- **Total duration**: 1400ms (cinematic).
- **Easing**: `motion.easing.cinematic`.

| Tempo (ms) | Evento |
|---|---|
| 0–400 | Estado inicial: `((Alright))` em state Default C.2. Pausa antes do reveal. |
| 400–800 | Letter-spacing aumenta progressivamente de 0 → +200 unidades (em em-units). As letras se afastam até virarem `((A l r i g h t))` espaçado. |
| 800–1200 | Glifo central (`l`) sofre dupla migração simultânea: cor (dark → orange `#d97757`) + weight (Regular 400 → Bold 700) + ortografia (`l` minúsculo → `I` maiúsculo). Os outros glifos seguem em Regular 400 dark. Resultado: `((A I r i g h t))` com `I` em accent duplo. |
| 1200–1400 | Hold. O reveal está em sua forma máxima. |
| 1400+ (opcional) | Hold por +800ms editorial antes de fade out OU permanece no reveal (não retorna). Decisão por peça. |

**Princípio**. O reveal é o único contexto em que a marca **muda ortografia visível** (`l` → `I`). Fora desse contexto, jamais. A grafia oficial é `Alright` sempre.

### 4.4 Brand device `(( ))` standalone

#### 4.4.1 Pulse animation (loading states)

Sutil, cíclica, ambiente. Para telas de carregamento, transições pré-conteúdo, "thinking" states.

- **Duration do ciclo**: 2400ms (1.2s expansão + 1.2s contração).
- **Easing**: `motion.easing.standard` em ambas as direções.
- **Visual**: scale 100% → 102% → 100%. Opacity opcional 1.0 → 0.85 → 1.0 para ambientes em que scale não lê (e.g., tamanho pequeno).
- **Repetição**: indefinida enquanto o estado de loading persistir.

#### 4.4.2 Opening animation (`(( ))` aparece)

Brand device se forma — abre como se "abrindo" a marca.

- **Duration**: 600ms.
- **Easing**: `motion.easing.emphasized`.
- **Visual**: `(` à esquerda + `)` à direita aparecem em fade + 8px de translate horizontal (`(` vem da direita, `)` vem da esquerda — convergem para posição final). O segundo par (`((` e `))`) aparece com 100ms de delay, mesma animação.
- **Uso**: abertura de filme onde só o brand device aparece (sem wordmark); slate inicial; loading state com transição para conteúdo.

---

## 5. Page transitions (microsite)

| Tipo de página | Transição | Duration | Easing |
|---|---|---|---|
| Default (entre páginas internas) | Fade opacity 0 → 1 + 16px translate Y | 400ms | `motion.easing.decelerate` |
| Hero pages (home, manifesto, "look again") | Editorial reveal: fade + scale 0.98 → 1.0 | 1800ms | `motion.easing.cinematic` |
| Saída (qualquer página) | Fade opacity 1 → 0 | 200ms | `motion.easing.accelerate` |

**Princípio**. Saída é mais rápida que entrada (sempre). Entrada cinematográfica é exclusiva de hero — não use em página de "contato" ou "team". O cinematográfico é editorial, é evento.

---

## 6. Microinterações (UI)

| Elemento | Comportamento | Duration | Easing |
|---|---|---|---|
| Button hover | Color shift de fundo (dark → orange) + scale 100% → 102% | 200ms | `motion.easing.standard` |
| Link hover | Underline animation expand left-to-right (transform-origin: left) | 300ms | `motion.easing.decelerate` |
| Focus ring (acessibilidade) | Outline appear (opacity 0 → 1) | 100ms | `motion.easing.standard` |
| Form input focus | Bottom border slide left-to-right, color dark → orange | 200ms | `motion.easing.decelerate` |
| Dropdown open | Slide down 16px + fade in | 400ms | `motion.easing.decelerate` |
| Dropdown close | Slide up 16px + fade out | 200ms | `motion.easing.accelerate` |
| Modal open | Scale 0.95 → 1.0 + fade in | 400ms | `motion.easing.emphasized` |
| Modal close | Scale 1.0 → 0.95 + fade out | 200ms | `motion.easing.accelerate` |
| Tooltip appear | Fade in + 4px translate Y | 200ms | `motion.easing.decelerate` |

**Princípio**. Microinteração de UI é serviço — nunca chama atenção, nunca demora. O custo de 200ms de hover é o preço de "isto é clicável". Custos maiores que isso são bug.

**Anti-uso**. Botão com bounce no hover (over-shoot scale → 105% → 102%): banido. Link com slide-up de toda a palavra: banido. Focus ring com pulso recorrente: banido (vestibular).

---

## 7. Scroll-triggered animations

| Trigger | Duration | Easing |
|---|---|---|
| Hero reveal on first scroll into view | 1400ms | `motion.easing.cinematic` |
| Section transition (entre blocos) | 800ms | `motion.easing.emphasized` |
| Card / item appear (lista de cases) | 600ms (com stagger 80ms entre items) | `motion.easing.decelerate` |
| Image reveal (close → wide ou wide → close) | 1800ms | `motion.easing.cinematic` |
| Text block fade-in | 800ms | `motion.easing.decelerate` |

**Princípio**. Scroll-triggered animations disparam **uma vez** quando o elemento entra no viewport com intersection threshold ≥0.3. Nunca repetem em scroll de retorno (anti-pattern: "looping cada scroll" causa fadiga e quebra a sensação de "frame que assenta").

**Image reveal close → wide**. Esta é a animação canônica `((Look again.))` em scroll: o usuário rola até uma imagem, vê detalhe macro (close), e ao continuar rolando a imagem zoom-out revela contexto (wide). Inverso (wide → close) também válido. Use no portfolio / case studies para entregar o "olhar de novo" em peça hero. Uso máximo: 2 vezes por página (não vire feature recorrente).

---

## 8. Vídeo + motion graphics signature

Como o motion da marca aparece em vídeo (cases, slates, lower-thirds, watermarks, end-frames). Tempos cravados em segundos para frame-rate de 24fps (cinema) e 30fps (web).

### 8.1 Logo `(( ))` opening (início de vídeo)

- **Aparece em**: opening de filme institucional Alright; opening de cases creditados Alright; abertura de mídia hero (showreel).
- **Sequência**: bone bone bone (1.0s de bone limpo) → `(( ))` opening animation (0.6s, ver §4.4.2) → wordmark `Alright` aparece dentro dos parênteses (1.0s, fade + 4px translate, easing cinematic) → hold (1.4s) → fade-to-bone para corte para conteúdo (0.4s).
- **Total**: ~4.4s de slate inicial.

### 8.2 Logo closing (fim de vídeo)

- **Aparece em**: end-frame de filme institucional Alright; end-frame de cases creditados; end-card.
- **Sequência**: corte de conteúdo → fade-from-bone (0.4s) → `((Alright))` aparece em state Default C.2 (1.4s, cinematic reveal) → hold (2.0s — mais longo que opening; o end-frame é onde o cliente memoriza) → fade out (0.6s).
- **Total**: ~4.4s de slate final.

### 8.3 Lower-thirds

- **Entrada**: slide in da esquerda (32px translate horizontal) + fade, 600ms, `motion.easing.emphasized`.
- **Tempo on-screen**: 4.0s mínimo (rule of three — ler 3× rápido) ou tempo de fala da pessoa creditada.
- **Saída**: slide out da esquerda (volta) + fade, 400ms, `motion.easing.accelerate`.
- **Tipografia**: Bricolage Grotesque Medium 500 para nome principal; JetBrains Mono Regular 400 para função/role.

### 8.4 Slate cards (entre cenas)

- **Aparição**: fade in + scale 0.98 → 1.0, 800ms, `motion.easing.cinematic`.
- **Hold on-screen**: 2.0–2.8s (depende do conteúdo do slate — uma palavra fica 2.0s, frase curta fica 2.4s, 2 linhas ficam 2.8s).
- **Saída**: fade out, 400ms, `motion.easing.accelerate`.
- **Background**: bone `#faf9f5` ou dark `#141413` (depende do filme); typo dark sobre bone ou bone sobre dark.

### 8.5 Watermark (sobre vídeo)

- **Posição**: canto inferior direito, 24px de margin (em vídeo 1920×1080).
- **Visual**: `(( ))` em scale 100% / 24px de altura, opacity 0.6, cor bone (sobre conteúdo escuro) ou dark (sobre conteúdo claro). **Versão simplificada**: `(( ))` puro, sem wordmark. Em filme cliente, pode ser substituído por wordmark `Alright` em 14px.
- **Comportamento**: estático. **Sem pulso, sem fade, sem rotation**. A watermark é assinatura silenciosa — não compete com o conteúdo do vídeo.
- **Quando aparece**: persistente durante o vídeo (não pulsado). Pode desaparecer em momentos críticos (close-up, frame-canônico) por decisão editorial.

---

## 9. Reduced motion (`prefers-reduced-motion`)

Quando o usuário sinalizou preferência por motion reduzido (CSS media query `@media (prefers-reduced-motion: reduce)`), o sistema da Alright migra para versão "muted" — não desliga, simplifica.

### 9.1 Regras gerais

| Comportamento original | Comportamento em reduced motion |
|---|---|
| Reveals lentos (1400–1800ms cinematic) | Fade opacity 0 → 1 em 300ms, easing standard |
| Logo entry (2.6s sequência) | Skippa para state final imediato (hold em state Default C.2) |
| Pulse animation `(( ))` (loading) | Substitui por opacity oscillation 1.0 → 0.85 → 1.0 em 2.4s ciclo (sem scale) |
| Microinterações com scale (button hover) | Mantém color shift, remove scale |
| Microinterações com translate (slide in) | Mantém fade, remove translate |
| Page transitions cinematográficas | Substitui por fade 200ms |
| Scroll-triggered image reveal (close → wide) | Substitui por fade in da imagem em wide final, 300ms |
| Auto-play de vídeo (hero) | Mantém estado pôster estático (sem auto-play); usuário clica para ver |

### 9.2 O que NUNCA é desligado em reduced motion

- Focus ring (acessibilidade).
- Color shift em hover (acessibilidade — sinaliza interatividade).
- Underline em link hover (acessibilidade).
- State changes (modal open / close).

### 9.3 Implementação CSS

```css
:root {
  --motion-duration-cinematic: 1400ms;
  --motion-duration-editorial: 1800ms;
  --motion-easing-cinematic: cubic-bezier(0.16, 1.0, 0.3, 1.0);
}

@media (prefers-reduced-motion: reduce) {
  :root {
    --motion-duration-cinematic: 300ms;
    --motion-duration-editorial: 300ms;
    --motion-easing-cinematic: cubic-bezier(0.4, 0.0, 0.2, 1.0);
  }

  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 200ms !important;
    scroll-behavior: auto !important;
  }
}
```

A regra geral via `*` desliga animações longas mas preserva transitions de 200ms (tempo suficiente para feedback de UI). Sobreposições específicas (modal, dropdown) podem usar suas durations declaradas — desde que ≤300ms.

---

## 10. Accessibility

- **Frame rate**: 60fps default em web; 30fps fallback aceitável para vídeo embedded de baixa banda. **24fps** é cinema (uso para filme final, não UI).
- **Auto-play**: vídeos hero têm auto-play **silenciado** + controles visíveis sempre. **Som auto-play é banido em qualquer contexto.** Vídeo hero pode ter loop, mas com botão de pause/mute persistente.
- **Pause on hover**: GIFs e animações de fundo (e.g., `(( ))` pulse em loading) pausam em hover. Em mobile, alternativa é botão de pause.
- **Vestibular triggers**: nenhuma animação da Alright usa parallax extremo, scaling de tela inteira, ou rotation contínua. As únicas scales permitidas são 0.95 → 1.0 (modal) e 1.0 → 1.02 (button hover) — ambas dentro do safe range.
- **Strobe / flashing**: banido. Nada na marca pisca em frequência >3Hz.
- **Contraste em motion**: durante uma transição de cor (e.g., hover de link), os dois estados (origem e destino) **ambos** atendem WCAG 2.2 AA mínimo. Cor intermediária pode ser inferior — desde que dure <300ms.

---

## 11. Implementation guidance (para devs)

### 11.1 CSS

- Use CSS custom properties para todos os tokens (ver §9.3).
- Tokens lidos do arquivo `/tokens/motion.tokens.json` via build-time transform (Style Dictionary, Tokens Studio, ou similar).
- `prefers-reduced-motion` aplica via override de custom properties — nunca via duplicate keyframes.

### 11.2 React / Framer Motion

- Use `<MotionConfig reducedMotion="user">` no top-level — Framer Motion respeita media query nativamente.
- Importe tokens de `motion.tokens.json` em vez de inline values.
- Para springs cinematográficos, use `transition: { duration: 1.4, ease: [0.16, 1.0, 0.3, 1.0] }` (cinematic). **NUNCA use `type: "spring"` com defaults Framer** — bouncy springs são anti-modelo cravado.

### 11.3 After Effects (vídeo / motion graphics)

- Easing graph editor: replicar `cubic-bezier(0.16, 1.0, 0.3, 1.0)` como curva default para reveals editoriais.
- Frame rate: 24fps para filme final entregável; 30fps para conteúdo web sem cinema.
- Export: H.264 yuv420p para web; ProRes 422 HQ ou HEVC 10-bit para mídia broadcast/cinema.

### 11.4 Lottie (para web/mobile)

- Animações Lottie da marca exportam com easings cravados. Validar no Lottie file que não há keyframes com overshoot ou bounce residual.
- Sempre incluir versão "reduced" do Lottie para `prefers-reduced-motion` — pode ser frame único (poster).

---

## 12. Validação

Checklist final para verificar se motion de uma peça está alinhado com a marca:

- [ ] **Tempo cinematográfico**: a peça tem ao menos 1 reveal ≥1.4s? (Se for material puramente UI, pular.)
- [ ] **Look again moment**: há 1 momento que recompensa o segundo olhar? (Hero, opening, end-frame, frame-charneira.)
- [ ] **`prefers-reduced-motion` funciona**: testar em macOS Settings > Accessibility > Display > Reduce motion ON. Reveals lentos viram fade rápido? Logo skippa para final?
- [ ] **Sem cuts nervosos**: nenhuma transição usa corte seco (cut) onde reveal seria possível. (Filme cliente segue brief — se cliente pediu cut, OK.)
- [ ] **Sem SaaS-like spring bounces**: nenhum elemento overshoot ou oscila no destino. Validar curvas no DevTools.
- [ ] **Easing cinematográfico em hero**: hero usa `motion.easing.cinematic` (`easeOutExpo` equivalent), não `easeInOut` genérico.
- [ ] **Logo entry respeita pausa entre tempos**: wordmark → pausa → parênteses → pausa → (opcional accent). Sem pausa, vira animação rápida demais.
- [ ] **Watermark de vídeo é estática**: não pulsa, não fade, não roda. Assinatura silenciosa.
- [ ] **Auto-play de vídeo silenciado**: nenhum vídeo hero ou embedded toca som sem clique.
- [ ] **Tokens em uso**: durations e easings vêm de `motion.tokens.json`, não hardcoded em componente.

---

## 13. Decisões pendentes para Bera

1. **Logo dual-state em hover automático** (C.2 → C.1 em mouseenter no logo): cravar como **on por padrão** em hero do site, **off** em todo resto? Ou cravar **off** universalmente — accent C.1 só dispara por trigger editorial específico (e.g., entrada de seção "manifesto", scroll milestone)? Recomendação: hover ON apenas em hero do site (1 ou 2 lugares), OFF em todo resto. Justificativa: hover automático em todo o site dilui o "evento"; restrito a 1–2 lugares preserva o caráter editorial do accent.

2. **`((Look again.))` como text-reveal animado em hero**: o copy `((Look again.))` aparece como typewriter (letra a letra com 80ms cada) ou como fade único? Recomendação: fade único em 1.4s cinematic (typewriter é signature SaaS gimmick — não casa com a tese editorial). Mas o Bera pode preferir typewriter pelo paralelo com manifest verbal — vale checar.

---

*v0.1 — 2026-05-10. Próximo passo: validação Bera + assets de referência (Lottie + AE templates) para handoff devs e produtores.*

*((Look again.))*
