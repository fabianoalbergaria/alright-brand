# Alright — Microsite v0: Especificações e Estrutura

> Blueprint completo do brand guide interativo da Alright. Este documento é a referência para implementação HTML/CSS/JS com a skill huashu-design. Não contém código — apenas specs implementáveis.
>
> **Data**: 2026-05-10. **Owner**: Zuza. **Status**: draft.

---

## 1. Arquitetura de informação

### 1.1 Mapa do site

O microsite é single-page com scroll vertical e navegação por âncoras. Cada seção é um `<section id="slug">` com deep-link direto.

```
Home/Intro          #intro
├── Hero (((Look again.)))
├── Manifesto curto
└── Nav rápida (cards para seções)

Estratégia          #estrategia
├── Propósito       #proposito
├── Visão            #visao
├── Missão           #missao
├── Valores          #valores
├── Arquétipo        #arquetipo
└── Personas         #personas

Verbal              #verbal
├── Tom de voz       #tom-de-voz
├── Regra bilíngue   #regra-bilingue
├── Vocabulário      #vocabulario
└── Do / Don't       #verbal-do-dont

Logo                #logo
├── Dual-state       #dual-state
├── Variantes        #variantes
├── Grid & clearspace #grid
└── Anti-usos        #logo-anti-usos

Tipografia          #tipografia
├── Specimen         #specimen
├── Type ramp        #type-ramp
└── Pesos & regras   #pesos

Cores               #cores
├── Paleta primária  #paleta-primaria
├── Neutros & funcionais #neutros
├── Pares WCAG       #wcag
└── Dark mode        #dark-mode-cores

House Look          #house-look
├── Princípios       #principios-visuais
└── Do / Don't       #look-do-dont

Motion              #motion
├── Princípios       #motion-principios
├── Tokens & demos   #motion-tokens
└── Easing curves    #easing

Aplicações          #aplicacoes
└── Previews         #previews

Downloads           #downloads
├── Logo SVG/PNG
├── Fontes
├── Tokens JSON
└── Templates
```

### 1.2 Navegação principal

**Sidebar fixa à esquerda** (desktop ≥1280px):
- Largura: 240px. Fundo: Bone `#faf9f5`. Borda direita: 1px `#e8e4da`.
- Logo `Alright` (state Default C.2) no topo, link para `#intro`.
- Lista de seções com indicador ativo (barra vertical 3px Orange Clay à esquerda do item ativo).
- Scroll-spy: item ativo muda conforme scroll do conteúdo.
- Abaixo da lista: toggle dark mode + link "Downloads".

**Tablet (768–1279px)**: sidebar colapsa em hamburger menu top-left. Top bar 56px com logo + hamburger + dark mode toggle.

**Mobile (375–767px)**: igual tablet, com menu em fullscreen overlay (fade 200ms).

### 1.3 Search (Cmd+K / Ctrl+K)

- Modal centralizado com input de busca.
- Escopo: títulos de seção (H1–H3), tokens (nomes e valores HEX), termos do vocabulário verbal.
- Resultados: lista com nome da seção + trecho contextual (até 80 chars). Máximo 8 resultados visíveis.
- Tecla Enter navega para a âncora; Esc fecha.
- Implementação: índice JSON pré-compilado em build, busca client-side com fuzzy match simples (sem dependência externa).

### 1.4 Deep-links

Toda seção e subseção recebe `id` semântico. URLs no formato `site/#slug`. Ao carregar com hash, scroll suave até a seção (400ms, easing standard).

---

## 2. Specs técnicas

### 2.1 Stack

- **HTML5 semântico** — sem framework, sem build tool obrigatório. Arquivos servidos estáticos.
- **CSS3** com custom properties para todos os tokens. Sem pré-processador em runtime.
- **JS vanilla** (ES2020+). Sem jQuery, sem React, sem bundler. Módulos via `<script type="module">`.
- **Hospedagem**: GitHub Pages ou Cloudflare Pages. Deploy via push no branch `main` ou `gh-pages`.

### 2.2 CSS custom properties

Todos os tokens de cor, tipografia e motion declarados em `tokens.css` como custom properties no `:root`. Dark mode via `[data-theme="dark"]` no `<html>`.

```
/* Exemplo de estrutura (não implementar aqui — apenas spec) */
:root {
  --color-primary-warm: #d97757;
  --color-background-bone: #faf9f5;
  --color-foreground-dark: #141413;
  --color-neutral-stone: #3d3a35;
  --color-neutral-slate-warm: #5b5750;
  --color-text-clay-deep: #8c4a32;

  --font-primary: 'Bricolage Grotesque', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  --duration-instant: 100ms;
  --duration-fast: 200ms;
  --duration-normal: 400ms;
  --duration-slow: 800ms;
  --duration-cinematic: 1400ms;
  --duration-editorial: 1800ms;

  --easing-standard: cubic-bezier(0.2, 0.0, 0.0, 1.0);
  --easing-decelerate: cubic-bezier(0.0, 0.0, 0.0, 1.0);
  --easing-cinematic: cubic-bezier(0.16, 1.0, 0.3, 1.0);
  --easing-emphasized: cubic-bezier(0.2, 0.0, 0.0, 1.0);
  --easing-accelerate: cubic-bezier(0.4, 0.0, 1.0, 1.0);
}
```

### 2.3 Fontes

- **Bricolage Grotesque**: Google Fonts CDN (`fonts.googleapis.com`), variable com eixos `opsz,wdth,wght`. Subset `latin-ext`. Preload no `<head>` com `font-display: swap`.
- **JetBrains Mono**: Google Fonts CDN, pesos 400 e 500. Subset `latin-ext`.
- Fallback: `system-ui, -apple-system, sans-serif` para primária; `ui-monospace, 'Cascadia Code', monospace` para mono.

### 2.4 Breakpoints

| Nome | Range | Layout |
|---|---|---|
| Mobile | 375–767px | 1 coluna, sidebar oculta, nav em overlay |
| Tablet | 768–1279px | 1 coluna com margens maiores, sidebar em hamburger |
| Desktop | 1280px+ | Sidebar fixa 240px + área de conteúdo fluida (max-width 960px) |

Container de conteúdo: `max-width: 960px` com `padding: 0 24px` (mobile) / `0 48px` (tablet) / `0 64px` (desktop).

### 2.5 Performance

- **Lighthouse target**: ≥90 em Performance, Accessibility, Best Practices, SEO.
- Fontes com `preload` e `font-display: swap`.
- CSS crítico inline no `<head>` (tokens + above-the-fold).
- JS com `defer` ou `type="module"`.
- Imagens: `loading="lazy"` para tudo abaixo do fold; formatos WebP com fallback PNG.
- Total page weight target: <500KB (sem imagens de case/portfolio).

---

## 3. Layout por seção

### 3.1 Home / Intro (`#intro`)

**Hero**:
- Fullscreen (100vh) com fundo Bone `#faf9f5`.
- Gradiente editorial-bone sutil: `linear-gradient(90deg, #faf9f5 0%, #f7f4ec 50%, #faf9f5 100%)` — única exceção de gradiente aprovada.
- Centro: logo `Alright` em state Expressivo C.1 (grande, ~120px desktop). O `l` em Orange Clay `#d97757`, resto em Dark.
- Abaixo do logo: `((Look again.))` em Bricolage Grotesque Regular 400, tamanho 32px desktop / 24px mobile, cor Dark.
- **Motion de entrada**: logo fade-in 1.4s (`duration-cinematic`, `easing-cinematic`). Texto `((Look again.))` aparece 600ms após o logo (fade + translateY 12px, 800ms `easing-decelerate`).

**Manifesto**:
- Abaixo do hero, seção com fundo Bone. Texto centrado, max-width 640px.
- Manifestos canon em sequence: `We are alright.` / `Craft. Craft. And. More. Craft.` / `Cada filme é um filme.`
- Tipografia: Bricolage Regular 400, 20px, line-height 1.6, cor Stone `#3d3a35`.
- Cada manifesto aparece em scroll-triggered fade (400ms, `easing-standard`), stagger 200ms entre eles.

**Nav rápida**:
- Grid de cards (2 colunas desktop, 1 coluna mobile) linkando para cada seção.
- Card: fundo branco (Bone), borda 1px `#e8e4da`, border-radius 8px, padding 24px.
- Hover: borda muda para Orange Clay, transição 200ms.
- Conteúdo do card: nome da seção (Bricolage Regular 400, 16px, Dark) + descrição curta (14px, Slate-warm).

### 3.2 Estratégia (`#estrategia`)

**Header**:
- H1: `Estratégia` em Bricolage Regular 400, 48px desktop / 32px mobile, Dark.
- Linha divisória: 48px de largura, 2px de altura, Orange Clay.
- Subtítulo: resumo de 1 linha em Slate-warm, 16px.

**Conteúdo**:
- Subseções (Propósito, Visão, Missão, Valores, Arquétipo, Personas) como blocos verticais com H2 (28px desktop) e parágrafos (16px, line-height 1.7, Dark).
- **Valores**: cards em grid 2×2 desktop / 1 coluna mobile. Cada card tem título em Bricolage Regular 400 (20px) + descrição (16px). Borda esquerda 3px Orange Clay.
- **Personas**: cards com avatar placeholder (círculo 64px Bone com ícone genérico), nome, role, descrição. Fundo levemente offset (`#f5f3ed`).

### 3.3 Verbal (`#verbal`)

**Header**: mesmo padrão de §3.2.

**Tom de voz**: 5 princípios em lista vertical. Cada item: título em Bricolage Regular 400 (20px, Dark) + descrição (16px, Stone). Numeração em Orange Clay (JetBrains Mono, 14px).

**Regra bilíngue**: bloco com duas colunas (desktop) — PT à esquerda, EN à direita. Fundo `#f5f3ed`, border-radius 8px, padding 32px. Cada coluna com flag-label (PT / EN) em JetBrains Mono 12px, uppercase, Slate-warm.

**Vocabulário / Do-Don't**: tabela com duas colunas — "Usar" (fundo `#f5f3ed`, texto Dark) e "Não usar" (fundo `#faf2f0`, texto Clay Deep `#8c4a32`). Linhas alternadas com leve variação de opacidade.

### 3.4 Logo (`#logo`)

**Header**: H1 `Logo` + subtítulo com conceito do dual-state.

**Dual-state demo (hero da seção)**:
- Logo `Alright` grande (80px) em state Default C.2 (com `l` em Bold 700).
- **Hover**: transição para state Expressivo C.1 — o `l` muda de Bold 700 para Regular 400 + cor Orange Clay. Transição 400ms `easing-standard`.
- Label abaixo: `Default C.2` que muda para `Expressivo C.1` no hover. JetBrains Mono 12px, Slate-warm.
- Em mobile: toggle via tap (não hover). Estado alterna a cada tap.

**Variantes**:
- Grid de 3 colunas (desktop) mostrando: Default C.2, Expressivo C.1, Reveal `((A I r i g h t))`.
- Cada variante em card com fundo Bone, label de uso abaixo.
- Versão sobre Dark (card com fundo Dark `#141413`, logo em Bone/Orange Clay).

**Grid & clearspace**: diagrama estático (SVG) mostrando o clearspace = altura do `A`. Fundo bone com guidelines em Slate-warm 30% opacity.

**Anti-usos**: grid de "don't" cards — cada card com fundo `#faf2f0`, bordas vermelhas sutis (`#c95a3f` 40%), mostrando exemplos do que NÃO fazer (stretch, gradiente no logo, cores erradas, rotação). Label: JetBrains Mono 12px, Clay Deep.

### 3.5 Tipografia (`#tipografia`)

**Specimen interativo**:
- Input de texto editável (default: `Alright — Craft. Craft. And. More. Craft.`).
- O texto renderiza em Bricolage Grotesque. Abaixo, controles:
  - Slider de peso (200–800). Label mostra valor numérico.
  - Slider de tamanho (12–96px).
  - Slider de largura (75–100%).
- Atualização em tempo real via CSS `font-variation-settings`.

**Type ramp**:
- Tabela visual mostrando cada nível da escala tipográfica:

| Nível | Tamanho (desktop) | Peso | Line-height | Uso |
|---|---|---|---|---|
| Display | 48–64px | Regular 400 | 1.1 | Hero, títulos de seção |
| H1 | 36–48px | Regular 400 | 1.2 | Título de página |
| H2 | 28–32px | Regular 400 | 1.3 | Subtítulo |
| H3 | 20–24px | Regular 400 | 1.4 | Título de bloco |
| Body | 16px | Regular 400 | 1.7 | Texto corrido |
| Small | 14px | Regular 400 | 1.5 | Caption, meta |
| Mono | 14px | JetBrains Mono 400 | 1.5 | Código, tokens |

- Cada nível renderizado como amostra real (texto em Bricolage, anotação em JetBrains Mono à direita com specs).

**Pesos**: demonstração visual dos pesos 200→800 com a mesma frase. Nota visual de destaque: Bold 700 com label "Restrito ao logo C.2" em badge Clay Deep.

### 3.6 Cores (`#cores`)

**Swatches primários**:
- 3 cards grandes (Orange Clay, Bone, Dark). Cada card:
  - Bloco de cor 120×120px (border-radius 8px).
  - Nome + HEX abaixo.
  - **Copy-to-clipboard**: ao clicar no HEX, copia para clipboard. Feedback: ícone check + tooltip "Copiado" por 1.5s.
  - Expandível: clique no card expande para mostrar RGB, HSL, OKLCH, CMYK, Pantone. Transição expand 300ms.

**Neutros & funcionais**: grid menor (cards 80×80px) com mesma mecânica de copy.

**Pares WCAG**:
- Tabela interativa mostrando pares de cores com ratio de contraste e badge (AAA / AA / Fail).
- Hover sobre um par: preview inline — texto da cor foreground sobre background, renderizado em tempo real.

**Dark mode preview**: split-screen (50/50 desktop, stack mobile) — mesma seção de swatches renderizada em light vs dark. Labels "Light" / "Dark" em JetBrains Mono.

### 3.7 House Look (`#house-look`)

**5 princípios**: cards verticais full-width. Cada card:
- Título do princípio (H3, 24px, Dark).
- Descrição (16px, Stone, max-width 640px).
- Placeholder para imagem de referência: retângulo 16:9 com fundo `#e8e4da`, ícone central de placeholder, label "Imagery — Fase 5" em Slate-warm 14px.

**Do / Don't visual**:
- Grid 2 colunas. Coluna esquerda ("Fazer"): cards com borda verde sutil (`#6b7f4a` 40%). Coluna direita ("Não fazer"): cards com borda vermelha sutil (`#c95a3f` 40%).
- Cada card: placeholder de imagem + descrição curta.

### 3.8 Motion (`#motion`)

**Princípios**: 5 cards com título + descrição (mesmo padrão do House Look, sem placeholder de imagem).

**Tokens com demo inline**:
- Cada duration token exibido como linha horizontal. Ao clicar "Play", um quadrado 24px Dark desliza da esquerda para a direita na duração do token. Easing: `easing-standard` por default; dropdown para trocar easing.
- Tabela de tokens: nome, valor, uso — com copy-to-clipboard no valor.

**Easing curves visualizadas**:
- Canvas ou SVG por easing curve (200×200px). Curva de bezier plotada em Dark sobre fundo Bone. Ponto de controle em Orange Clay.
- Label: nome do token + `cubic-bezier(...)` em JetBrains Mono. Copy-to-clipboard.

### 3.9 Aplicações (`#aplicacoes`)

**Previews**: cards em grid 2 colunas desktop. Cada card:
- Placeholder de preview (retângulo 4:3, fundo `#e8e4da`).
- Título da aplicação (deck, slate card, social post, e-mail signature, etc.).
- Status (badge: "Spec pronta" / "Em desenvolvimento" / "Fase 5").
- Link cruzado para documento de aplicações (quando existir em `04-applications-microsite/applications/`).

### 3.10 Downloads (`#downloads`)

**Grid de download cards**:

| Asset | Formatos | Descrição |
|---|---|---|
| Logo | SVG, PNG (@1x, @2x, @3x) | Default C.2 + Expressivo C.1 + Reveal. Light e dark. |
| Fontes | WOFF2 (variable) | Bricolage Grotesque + JetBrains Mono com licenças. |
| Tokens | JSON (W3C DTCG) | `color.tokens.json` + `motion.tokens.json`. |
| Templates | Figma (link) | Template de deck, social post (quando disponíveis). |

Cada card: ícone de arquivo, nome, descrição, botão "Download" (fundo Dark, texto Bone, hover fundo Stone). Ao clicar, download direto do arquivo estático.

---

## 4. Dark mode

### 4.1 Toggle

- Posição: sidebar (desktop) / top bar (mobile/tablet).
- Ícone: sol (light ativo) / lua (dark ativo). Ícone em Dark/Bone conforme estado. Transição de ícone: crossfade 200ms.
- Estado salvo em `localStorage`. Default: light.
- Ativação: atributo `data-theme="dark"` no `<html>`.

### 4.2 Mapeamento de cores

| Token (light) | Valor light | Valor dark | Notas |
|---|---|---|---|
| `--color-background-bone` | `#faf9f5` | `#1a1815` | Dark-soft, mais quente que Dark canônico |
| `--color-foreground-dark` | `#141413` | `#ede9dc` | Bone-soft, luminância reduzida |
| `--color-primary-warm` | `#d97757` | `#d97757` | Mantém HEX — constante entre modes |
| `--color-neutral-stone` | `#3d3a35` | `#bcb6a8` | Inversão semântica da escala |
| `--color-neutral-slate-warm` | `#5b5750` | `#9b9588` | Ajuste para legibilidade |
| `--color-text-clay-deep` | `#8c4a32` | `#d97757` | Em dark, Orange Clay passa AA sobre Dark-soft |
| Surface cards | `#f5f3ed` | `#1f1d19` | Cards e blocos offset |
| Borders | `#e8e4da` | `#2e2b26` | Bordas sutis |

### 4.3 Transição

- Propriedade animada: `background-color`, `color`, `border-color`.
- Duração: 200ms (`duration-fast`).
- Easing: `easing-standard`.
- Nota: **não animar** `box-shadow` ou `filter` na transição de modo para evitar jank.

---

## 5. Acessibilidade (WCAG 2.2 AA)

### 5.1 Contraste mínimo por par

| Foreground | Background | Ratio | Nível |
|---|---|---|---|
| Dark `#141413` | Bone `#faf9f5` | 17,5:1 | AAA |
| Stone `#3d3a35` | Bone `#faf9f5` | 10,6:1 | AAA |
| Slate-warm `#5b5750` | Bone `#faf9f5` | 6,4:1 | AA |
| Clay Deep `#8c4a32` | Bone `#faf9f5` | 5,0:1 | AA |
| Bone `#faf9f5` | Dark `#141413` | 17,5:1 | AAA |
| Orange Clay `#d97757` | Dark `#141413` | 5,9:1 | AA |
| Orange Clay `#d97757` | Bone `#faf9f5` | 2,96:1 | **FAIL** — uso decorativo apenas |

### 5.2 Focus visible

- Todos os elementos interativos (links, botões, inputs, toggles) recebem `:focus-visible` com outline 2px Orange Clay, offset 2px.
- Em dark mode: outline 2px Orange Clay (mantém).
- Tab order lógico: sidebar → conteúdo → footer.

### 5.3 Skip to content

- Link visualmente oculto como primeiro elemento do DOM: "Pular para o conteúdo".
- Visível ao receber focus (translateY de -100% para 0, fundo Dark, texto Bone, padding 8px 16px).
- Target: `<main id="content">`.

### 5.4 Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Exceções controladas: color shifts (não envolvem movement) mantêm transição de 200ms mesmo em reduced motion. Fade de opacidade mantém 200ms (não é motion vestibular). Reveals com translateY/X/scale são eliminados.

### 5.5 HTML semântico

- `<nav>` para sidebar e nav rápida.
- `<main>` para área de conteúdo.
- `<section>` para cada seção com `aria-labelledby` apontando para o H1/H2.
- `<article>` para cards de conteúdo independentes (valores, personas, aplicações).
- Headings em ordem sequencial (H1→H2→H3), nunca pulando nível.
- Listas (`<ul>`, `<ol>`) para itens enumerados (princípios, valores, vocabulário).

### 5.6 Alt text policy

- Logo: `alt="Alright — A.I. first Production Company"`.
- Swatches de cor: `alt="Swatch Orange Clay #d97757"`.
- Placeholders de imagem: `alt=""` (decorativo) + `aria-hidden="true"`.
- Ícones decorativos: `aria-hidden="true"`. Ícones funcionais: `aria-label` descritivo.

### 5.7 Idioma

- `<html lang="pt-BR">` como default.
- Frases em EN (manifestos canon) marcadas com `<span lang="en">`.

---

## 6. Estrutura de arquivos

```
04-applications-microsite/site/
├── index.html                  # Página única — todas as seções
├── css/
│   ├── tokens.css              # Custom properties (cor, tipo, motion)
│   ├── base.css                # Reset, tipografia base, layout grid
│   ├── components.css          # Cards, swatches, specimen, nav, search modal
│   └── dark-mode.css           # Override de tokens via [data-theme="dark"]
├── js/
│   ├── main.js                 # Scroll-spy, scroll suave, lazy load
│   ├── search.js               # Cmd+K modal, índice, fuzzy match
│   ├── dark-mode.js            # Toggle, localStorage, transição
│   ├── clipboard.js            # Copy-to-clipboard para tokens/hex
│   ├── specimen.js             # Sliders do type specimen interativo
│   └── motion-demo.js          # Play de duration tokens, render de easing curves
├── assets/
│   ├── logo/                   # SVGs do logo (default, expressivo, reveal, dark)
│   ├── icons/                  # Sol, lua, copy, check, download, menu, close
│   └── og-image.png            # Open Graph 1200×630 — hero simplificado
├── search-index.json           # Índice pré-compilado para busca
└── manifest.json               # PWA basics (nome, ícones, theme_color)
```

### 6.1 Notas sobre a estrutura

- **Sem diretório `content/`**: todo o conteúdo é inline no `index.html`. Os markdowns fonte (`01-strategy-verbal/`, etc.) são referência de redação — o conteúdo é transposto manualmente para HTML semântico.
- **Sem build tool**: os arquivos CSS e JS são servidos como estão. Minificação pode ser adicionada em CI/CD (GitHub Actions) sem mudar a estrutura.
- **Assets de logo**: produzidos como SVG com classes CSS para os states (`.logo-default`, `.logo-expressivo`). A transição C.2→C.1 é feita via CSS (mudança de `font-weight` e `fill` no `l`).
- **`manifest.json`**: permite "Add to Home Screen" em mobile. `theme_color: #faf9f5`, `background_color: #faf9f5`.

---

## 7. Disclosure de IA

Presente no footer do microsite:

- PT: `Imagens criadas com Inteligência Artificial.`
- EN: `All images were created using Artificial Intelligence.`
- Tipografia: Bricolage Regular 400, sentence case, 12px, cor Slate-warm.
- Mínimo: 1.2% da altura do viewport.
- Sempre Bone sobre Dark ou Dark sobre Bone. **Nunca Orange Clay.**

---

## 8. Meta tags e SEO

- `<title>`: `Alright — Brand Guide | A.I. first Production Company`
- `<meta name="description">`: resumo de 155 chars sobre o brand guide.
- Open Graph: `og:image` com hero simplificado (logo + `((Look again.))`), `og:type: website`.
- `<link rel="canonical">` apontando para URL final.
- Robots: `index, follow`.

---

*((We Are Alright))*
