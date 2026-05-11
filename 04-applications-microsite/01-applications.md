# Alright — Aplicações priorizadas

> Specs implementáveis de aplicação da marca em site, social media, email e deck de proposta. Traduz o sistema visual/verbal cravado nas Fases 1-3 em wireframes textuais com specs exatas de cor, tipografia, layout e motion.
>
> **Data**: 2026-05-10. **Owner**: Zuza. **Status**: draft.

---

## 1. Site / Landing — Wireframe textual + specs

### 1.1 Home

**Layout geral**: single-column editorial, max-width 1280 px, padding lateral 48 px (desktop) / 24 px (mobile). Background: Bone `#faf9f5`. Sem branco puro.

#### Hero section

- **Altura**: 100vh (desktop), min 640 px.
- **Headline**: `((We Are Alright))` centralizado horizontal e verticalmente. Bricolage Grotesque Medium 500, `display-xl` 96 px, opsz 96, wdth 100, line-height 1.0, letter-spacing -0.025em. Cor: Dark `#141413` sobre Bone `#faf9f5` (contraste 17,5:1 AAA).
- **Parênteses duplos** `(( ))`: mesmo peso/tamanho, espaçamento 1 caractere entre `((` e `W`, entre `)` e `)`.
- **Subtítulo abaixo**: `A.I. first Production Company.` Bricolage Regular 400, `body-lg` 20 px, opsz 18, line-height 1.5. Cor: Stone `#3d3a35` sobre Bone (contraste 7,2:1 AA). Margem-top: 24 px.
- **Motion**: hero headline fade-in 1.4s, easing `cubic-bezier(0.16, 1.0, 0.3, 1.0)` (cinematic). Opacity 0→1 + translateY 24px→0. `prefers-reduced-motion`: opacity fade simples 0.6s, sem translate.
- **Hover C.2→C.1**: ativado apenas aqui. Ao hover sobre o wordmark, o `l` central transiciona de Bold 700 Dark para Orange Clay `#d97757`, duration 600ms, easing `cubic-bezier(0.2, 0.0, 0.0, 1.0)`. Feedback sutil do trocadilho `AIright`.
- **Gradient editorial-bone** (exceção permitida): gradiente sutil Bone→transparent no bottom 120 px do hero, transição para a seção seguinte.

#### Showreel section

- **Layout**: vídeo full-bleed dentro do max-width (1280 px), aspect-ratio 16:9. Borda: nenhuma. Border-radius: 0.
- **Player**: custom minimal — barra de progresso 2 px Orange Clay `#d97757`, controles em Dark `#141413` com opacity 0.6→1.0 on hover (200ms, easing standard).
- **Legenda abaixo do vídeo**: `Showreel 2026` em Bricolage `overline` 11 px, Medium 500 uppercase, letter-spacing 0.08em. Cor: Slate-warm `#5b5750` sobre Bone (contraste 5,1:1 AA).

#### Cases highlights (3-4 cases)

- **Layout**: grid 2 colunas (desktop), 1 coluna (mobile). Gap: 32 px. Cada card:
  - Thumbnail: aspect-ratio 16:9, object-fit cover. Sem border-radius.
  - Eyebrow: nome do cliente, `overline` 11 px, Medium 500 uppercase, letter-spacing 0.08em, Slate-warm `#5b5750`.
  - Título do case: Bricolage Medium 500, `h3` 28 px, opsz 28, line-height 1.2. Dark `#141413`.
  - Descrição: 1 linha, Bricolage Regular 400, `body-sm` 14 px, Stone `#3d3a35`. Max 80 caracteres.
- **Motion**: cards entram por fade + translateY 16px→0, duration 600ms, easing `cubic-bezier(0.2, 0.0, 0.0, 1.0)`, stagger 120ms entre cards. `prefers-reduced-motion`: fade simples 400ms.
- **Interação**: hover sobre card — thumbnail scale 1.0→1.02 (300ms, easing standard). Cursor pointer. Sem sombra, sem borda adicional.

#### Manifesto section

- **Background**: Dark `#141413`. Padding vertical: 120 px.
- **Texto central**: manifesto `Craft. Craft. And. More. Craft.` Bricolage Medium 500, `display` 72 px, opsz 72, line-height 1.05. Cor: Bone `#faf9f5` sobre Dark (contraste 17,5:1 AAA). Centralizado.
- **Abaixo, 48 px de gap**: `Cada filme é um filme.` Bricolage Regular 400, `body-lg` 20 px, line-height 1.5. Bone sobre Dark. Centralizado.
- **Motion**: texto revela por fade 1.4s cinematic ao entrar no viewport (IntersectionObserver, threshold 0.3).

#### Contato CTA

- **Layout**: seção Bone, padding 80 px vertical. Texto centralizado.
- **Headline**: `((Look again.))` Bricolage Medium 500, `h1` 56 px, opsz 56. Dark sobre Bone.
- **Subtítulo**: `Tem um projeto? Fale com a gente.` Bricolage Regular 400, `body-lg` 20 px. Stone `#3d3a35`. Margem-top: 16 px.
- **Botão CTA**: texto `Contato`, Bricolage Medium 500, `body-md` 16 px. Background: Dark `#141413`, texto: Bone `#faf9f5` (contraste 17,5:1 AAA). Padding: 16 px 40 px. Border-radius: 0. Hover: background Orange Clay `#d97757`, texto Dark `#141413` (contraste 5,06:1 AA — 3,57:1 com body-md 16px; ajustar para texto Bone `#faf9f5` sobre Orange Clay que dá 3,29:1 — usar texto Dark sobre Orange Clay para ≥ 4,5:1 em 16px). Transição: 300ms easing standard.
- **Botão CTA revisado (WCAG)**: hover — background Orange Clay `#d97757`, texto Dark `#141413` (contraste 5,06:1 AA large text; como botão é elemento UI ≥ 3:1 por 1.4.11, e texto 16px exige 4,5:1 por 1.4.3 — 5,06:1 passa).

#### Footer

- **Background**: Dark `#141413`. Padding: 48 px.
- **Wordmark**: `Alright` logo state Default C.2, Bone `#faf9f5`. Tamanho: 24 px height.
- **Links**: `Cases`, `Sobre`, `Contato` — Bricolage Regular 400, `body-sm` 14 px. Bone `#faf9f5`. Hover: Orange Clay `#d97757` (sobre Dark, contraste 5,90:1 AA).
- **Disclosure IA**: `Imagens criadas com Inteligência Artificial.` Bricolage Regular 400, `caption` 12 px. Bone sobre Dark. Min 1.2% da altura do frame.
- **Social links**: ícones minimal (Instagram, LinkedIn, X). 20×20 px. Bone, hover Orange Clay.

---

### 1.2 Case page (template)

**Layout**: single-column, max-width 1280 px.

#### Hero visual

- Full-bleed dentro do max-width. Aspect-ratio 16:9 ou 2.39:1 (cinemascope quando disponível). Sem border-radius, sem overlay.
- **Eyebrow** sobre o hero (bottom-left, padding 32 px): nome do cliente. `overline` 11 px, Medium 500 uppercase, letter-spacing 0.08em. Bone `#faf9f5` sobre imagem (text-shadow sutil `0 1px 4px rgba(20,20,19,0.4)` para legibilidade).

#### Ficha técnica

- **Layout**: 2 colunas. Esquerda (60%): título do case, Bricolage Medium 500, `h1` 56 px, Dark. Direita (40%): metadata grid.
- **Metadata**: pares label/value.
  - Labels: `overline` 11 px, Slate-warm `#5b5750`. Labels: `Cliente`, `Ano`, `Categoria`, `Entrega`.
  - Values: Bricolage Regular 400, `body-md` 16 px, Dark `#141413`.
- **Descrição**: abaixo da ficha, full-width. Bricolage Regular 400, `body-lg` 20 px, line-height 1.5. Dark sobre Bone. Max-width texto: 680 px (measure ~65 ch).

#### Conteúdo visual / Making-of

- **Galeria**: grid responsivo (2-3 colunas desktop, 1 mobile). Gap 16 px. Imagens sem border-radius. Aspect-ratio livre (respeitando original do case).
- **Vídeo embed**: quando aplicável, player com mesmo estilo do showreel (barra Orange Clay, controles Dark).
- **Disclosure IA**: sob cada imagem AI-generated, `caption` 12 px, Slate-warm `#5b5750`.

#### Créditos

- **Layout**: lista simples, 1 coluna. Bricolage Regular 400, `body-sm` 14 px. Função em Stone `#3d3a35`, nome em Dark `#141413`.

#### CTA próximo case

- **Seção**: padding 80 px vertical. Background Bone.
- **Label**: `Próximo case` em `overline` 11 px, Slate-warm.
- **Título do próximo case**: Bricolage Medium 500, `h2` 40 px, Dark.
- **Thumbnail**: 50% width, aspect-ratio 16:9. Hover: scale 1.0→1.02 (300ms).
- **Motion**: seção entra por fade 600ms.

---

### 1.3 Contato

**Layout**: 2 colunas (desktop), 1 coluna (mobile). Max-width 1280 px.

#### Coluna esquerda (50%)

- **Headline**: `Fale com a gente.` Bricolage Medium 500, `h1` 56 px, Dark sobre Bone.
- **Subtítulo**: `Sem formulário longo. Brief curto, resposta em 24h.` Bricolage Regular 400, `body-lg` 20 px, Stone `#3d3a35`.
- **Email direto**: `oi@alright.film` (ou equivalente), Bricolage Regular 400, `body-md` 16 px, Dark. Hover: Orange Clay (sobre Bone — usar Clay Deep `#8c4a32` para link text, contraste 4,72:1 AA).

#### Coluna direita (50%) — Formulário

- **Campos**: `Nome`, `Empresa`, `Email`, `Conte o projeto` (textarea).
- **Labels**: Bricolage Medium 500, `body-sm` 14 px, Dark `#141413`.
- **Inputs**: border-bottom 1 px Stone `#3d3a35`, sem border lateral/top. Background: transparent (herda Bone). Texto input: Bricolage Regular 400, `body-md` 16 px, Dark. Placeholder: Slate-warm `#5b5750`.
- **Focus state**: border-bottom transiciona para Orange Clay `#d97757` (2 px), duration 200ms. Outline visível para acessibilidade: `outline: 2px solid #d97757; outline-offset: 4px`.
- **Botão submit**: `Enviar` — mesmo estilo do CTA da home (Dark bg, Bone texto, hover Orange Clay bg + Dark texto). Full-width no mobile, auto-width no desktop.
- **Validação**: mensagens de erro em Clay Deep `#8c4a32` sobre Bone (contraste 4,72:1 AA), `body-sm` 14 px.

---

## 2. Social media — Templates por canal

### 2.1 Instagram

#### Feed post (1080×1080 px)

- **Grid base**: 12 colunas, gutter 24 px, padding externo 48 px.
- **Background**: Bone `#faf9f5`.
- **Headline**: Bricolage Medium 500, 64 px (equivale a ~6% da largura), Dark `#141413`. Max 3 linhas. Posição: centro ou top-third.
- **Wordmark**: `Alright` logo state Default C.2, bottom-right, 32 px height, Dark. Padding: 48 px do canto.
- **Accent**: linha horizontal Orange Clay `#d97757`, 2 px, full-width ou partial (marca registrada visual). Posição: abaixo da headline ou separando seções.
- **Imagem**: quando presente, ocupa max 60% do canvas. Sem border-radius.
- **Tom verbal**: direto, confiante. 1-2 frases. Sem hashtag no visual (hashtags no caption apenas).
- **Exemplo copy**: `Novo case: PUMA International. ((Look again.))` — headline no card; detalhes no caption.
- **Disclosure IA** (quando imagem AI): `Imagens criadas com Inteligência Artificial.` Bricolage Regular 400, 14 px, min 1.2% da altura (≥13 px). Bone sobre Dark ou Dark sobre Bone.

#### Stories (1080×1920 px)

- **Background**: Dark `#141413` (stories = inversão — marca respira em dark nos formatos efêmeros).
- **Headline**: Bricolage Medium 500, 72 px, Bone `#faf9f5`.
- **Wordmark**: top-left, 28 px height, Bone. Padding: 48 px.
- **CTA nativo**: usar swipe-up/link sticker sobre barra Orange Clay `#d97757`, 4 px.
- **Vídeo**: full-bleed quando case em movimento. Wordmark overlay com safe-zone de 200 px top e bottom.
- **Tom**: ultra-direto. 1 frase + CTA. Ex: `Case novo. Swipe.`

#### Reels cover (1080×1920 px)

- **Background**: Bone `#faf9f5`.
- **Título do reel**: Bricolage Medium 500, 80 px, Dark. Centralizado vertical no terço superior.
- **Wordmark**: bottom-center, 32 px height, Dark. Padding-bottom: 200 px (safe zone do Instagram).
- **Accent**: `(( ))` brand device como elemento decorativo, Orange Clay, ao redor do título quando editorial. Ex: `((Making-of PUMA))`.

### 2.2 LinkedIn

#### Post (1200×1200 px)

- **Background**: Bone `#faf9f5`.
- **Headline**: Bricolage Medium 500, 72 px, Dark `#141413`. Max 4 linhas. Alinhamento esquerda, padding 64 px.
- **Wordmark**: bottom-left, 36 px height, Dark. Padding: 64 px.
- **Accent**: barra vertical Orange Clay, 4 px × 120 px, left-aligned junto à headline.
- **Tom**: editorial-profissional. Sem jargão tech, sem floreio. Ex: `Produzimos o filme da PUMA sem câmera, sem set e sem custo alto. ((Look again.))`
- **Disclosure IA**: quando aplicável, `caption` 12 px, bottom-right.

#### Article header (1920×1080 px)

- **Background**: Dark `#141413`.
- **Título do artigo**: Bricolage Medium 500, 96 px, Bone `#faf9f5`. Alinhamento esquerda, padding 80 px.
- **Wordmark**: top-right, 32 px height, Bone. Padding: 80 px.
- **Subtítulo**: Bricolage Regular 400, 28 px, Slate-warm `#5b5750` sobre Dark (contraste 3,1:1 — ajustar para Stone `#3d3a35` que dá 3,5:1; para AA large text ≥3:1 em 28px, 3,1:1 passa para non-text; usar Bone para garantir). **Revisão WCAG**: subtítulo em Bone `#faf9f5` (17,5:1) para conformidade.

### 2.3 X / Twitter

#### Post (1600×900 px)

- **Background**: Bone `#faf9f5`.
- **Headline**: Bricolage Medium 500, 80 px, Dark `#141413`. Alinhamento esquerda, padding 64 px. Max 2 linhas.
- **Wordmark**: bottom-right, 28 px height, Dark. Padding: 64 px.
- **Accent**: underline Orange Clay 3 px sob palavra-chave da headline.
- **Tom**: afiado, lacônico. Ex: `Sem câmera. Sem set. We are alright.`
- **Imagem**: quando presente, bleed direito (50% do canvas).

### 2.4 TikTok

#### Cover (1080×1920 px)

- **Background**: Dark `#141413`.
- **Título**: Bricolage Medium 500, 80 px, Bone `#faf9f5`. Centralizado vertical, terço superior.
- **Wordmark**: bottom-center, 28 px height, Bone. Padding-bottom: 240 px (safe zone TikTok).
- **Accent**: `(( ))` device em Orange Clay ao redor do título editorial. Ex: `((Making-of))`.
- **Tom**: direto, curioso. Ex: `Como fizemos sem câmera.`

---

## 3. Email — Templates

### 3.1 Assinatura de email

**Formato**: HTML inline, max-width 480 px. Sem imagens externas (exceto wordmark).

```
——
[Nome Sobrenome]
[Cargo] · Alright

[email] · [telefone]
alright.film

Alright [wordmark C.2, 18px height, inline]
```

- **Separador**: `——` (2 em-dashes), Bricolage Regular 400, `body-md` 16 px, Slate-warm `#5b5750`.
- **Nome**: Bricolage Medium 500, `body-md` 16 px, Dark `#141413`.
- **Cargo + empresa**: Bricolage Regular 400, `body-sm` 14 px, Stone `#3d3a35`. Separador `·` entre cargo e Alright.
- **Contatos**: Bricolage Regular 400, `body-sm` 14 px, Dark. Links: Clay Deep `#8c4a32` (contraste 4,72:1 sobre fundo branco de email clients).
- **Wordmark**: imagem inline PNG/SVG, 18 px height, Dark `#141413` sobre fundo do email client. Alt-text: `Alright`.
- **Sem tagline**, sem manifesto, sem redes sociais. Assinatura enxuta.

### 3.2 Email marketing (case novo / novidade)

**Layout**: max-width 600 px, padding 32 px. Background: Bone `#faf9f5` (via `background-color`; se client não suporta, fallback `#f5f4f0`).

#### Estrutura

1. **Header**: wordmark `Alright` C.2, 24 px height, Dark. Alinhado esquerda. Padding-bottom: 32 px.
2. **Hero image**: full-width dentro do container. Aspect-ratio 16:9. Alt-text descritivo.
3. **Eyebrow**: `overline` 11 px, Medium 500 uppercase, letter-spacing 0.08em, Slate-warm `#5b5750`. Ex: `NOVO CASE`.
4. **Headline**: Bricolage Medium 500, 28 px, Dark `#141413`. Line-height 1.2. Ex: `PUMA International — ((Look again.))`
5. **Body**: Bricolage Regular 400, 16 px, Dark. Line-height 1.6. Max 3 parágrafos curtos. Tom: direto, editorial. Sem superlativos.
6. **CTA**: botão `Ver o case`, background Dark `#141413`, texto Bone `#faf9f5`. Padding: 14 px 32 px. Font: Bricolage Medium 500, 14 px. Sem border-radius.
7. **Footer**: separador 1 px Stone `#3d3a35`. Abaixo: `Alright — A.I. first Production Company.` Bricolage Regular 400, 12 px, Slate-warm. Link de unsubscribe: 12 px, Clay Deep `#8c4a32`.
8. **Disclosure IA**: quando imagens AI no email, incluir no footer. 12 px, Slate-warm.

### 3.3 Proposta comercial (email de envio)

**Layout**: plain-text styled. Max-width 600 px, padding 32 px. Background: Bone.

#### Estrutura

1. **Header**: wordmark 24 px, esquerda.
2. **Saudação**: `Oi [Nome],` — Bricolage Regular 400, 16 px, Dark.
3. **Body**: 2-3 parágrafos curtos. Tom: confiante, direto, sem floreio comercial. Estrutura:
   - Parágrafo 1: contexto (como chegou ao contato ou referência ao brief).
   - Parágrafo 2: o que a Alright propõe (1-2 frases, sem detalhar — proposta em anexo).
   - Parágrafo 3: próximo passo (call, reunião, resposta).
4. **Assinatura**: mesma §3.1.
5. **Anexo**: menção ao PDF/deck anexo. Ex: `Proposta em anexo: Alright × [Cliente] — [Projeto].pdf`
6. **Sem** termos contra-canon (`revolucionário`, `disruptive`, `magic`, `transforma sua marca`, `next-gen`).

**Exemplo de copy**:

> Oi Maria,
>
> Recebemos o brief da campanha institucional da [Empresa]. Estudamos o material e preparamos uma proposta com 3 rotas criativas — todas com produção AI-first, sem câmera e sem set.
>
> A proposta está em anexo. Se fizer sentido, marcamos uma call de 30 minutos para apresentar.
>
> Um abraço,
> [Nome]

---

## 4. Deck de proposta — Template specs

**Formato**: 1920×1080 px (16:9). Exportado como PDF. Tipografia: Bricolage Grotesque embedded. Cores: paleta cravada (Bone, Dark, Orange Clay, secundárias).

### 4.1 Capa

- **Background**: Bone `#faf9f5`.
- **Wordmark**: logo state Default C.2 (`Alright`, `l` central Bold 700). Posição: centro. Tamanho: 160 px height (~8,3% da altura do slide).
- **Subtítulo abaixo**: `× [Nome do Cliente]` Bricolage Regular 400, 28 px, Stone `#3d3a35`. Margem-top: 24 px. Centralizado.
- **Rodapé**: `[Mês Ano] · Confidencial` Bricolage Regular 400, `caption` 14 px (escala deck: 14×1.5 = 21 px), Slate-warm `#5b5750`. Bottom-center, padding-bottom 48 px.
- **Sem** imagem hero, sem gradiente, sem ilustração. Capa limpa = confiança.

### 4.2 Slide de manifesto

- **Background**: Dark `#141413`.
- **Texto principal**: `We are alright.` Bricolage Medium 500, 96 px (×1.5 escala deck = 144 px equivalente). Bone `#faf9f5`. Centralizado vertical e horizontal.
- **Abaixo, 48 px gap**: `Craft. Craft. And. More. Craft.` Bricolage Regular 400, 32 px. Bone. Centralizado.
- **Abaixo, 32 px gap**: `Cada filme é um filme.` Bricolage Regular 400, 24 px. Slate-warm `#5b5750` sobre Dark (contraste 3,1:1 — como large text equivalent em apresentação, adequado; ou elevar para Stone `#3d3a35` 3,5:1). **Revisão WCAG**: usar Bone `#faf9f5` para garantia universal.
- **Sem ícones, sem imagens**. Manifesto puro.

### 4.3 Slide de processo / método

- **Background**: Bone `#faf9f5`.
- **Título**: `Como trabalhamos.` Bricolage Medium 500, 56 px, Dark. Alinhado esquerda, top-left, padding 80 px.
- **Grid de etapas**: 3-4 colunas. Cada etapa:
  - Número: Bricolage Medium 500, 40 px, Orange Clay `#d97757` (decorativo, ≥3:1 large text sobre Bone: 2,96:1 — falha. Usar Clay Deep `#8c4a32` que dá 4,72:1). **Revisão**: número em Clay Deep `#8c4a32`.
  - Título da etapa: Bricolage Medium 500, 24 px, Dark.
  - Descrição: Bricolage Regular 400, 18 px, Stone `#3d3a35`. 2-3 linhas.
- **Disclosure**: `Produção 100% AI-first. Sem câmera. Sem set.` Bricolage Regular 400, 14 px, Slate-warm. Bottom-left.

### 4.4 Slide de case (template)

- **Layout**: 2 zonas. Esquerda (55%): imagem/frame do case, full-bleed na zona. Direita (45%): texto, padding 64 px.
- **Background zona direita**: Bone `#faf9f5`.
- **Eyebrow**: nome do cliente, `overline` 14 px (escala deck), Medium 500 uppercase, letter-spacing 0.08em, Slate-warm `#5b5750`.
- **Título**: Bricolage Medium 500, 40 px, Dark. Abaixo do eyebrow, margem-top 16 px.
- **Descrição**: Bricolage Regular 400, 20 px, Dark. 3-4 linhas. Line-height 1.5.
- **Resultados** (quando aplicável): lista com bullet `·`, Bricolage Regular 400, 18 px, Stone.
- **Disclosure IA**: se imagem AI, incluir em `caption` 12 px sobre a imagem (bottom-left, Bone sobre overlay escuro).

### 4.5 Slide de equipe

- **Background**: Bone `#faf9f5`.
- **Título**: `Quem faz.` Bricolage Medium 500, 56 px, Dark. Top-left, padding 80 px.
- **Grid**: 3-4 colunas × 2 linhas (max 8 pessoas). Cada membro:
  - Foto: 160×160 px, aspect-ratio 1:1. Sem border-radius (quadrado). Grayscale default (marca não usa saturação em retratos de equipe — opcional, decisão futura).
  - Nome: Bricolage Medium 500, 20 px, Dark. Margem-top: 16 px.
  - Cargo: Bricolage Regular 400, 16 px, Stone `#3d3a35`.

### 4.6 Slide de contato / CTA

- **Background**: Bone `#faf9f5`.
- **Headline**: `((Look again.))` Bricolage Medium 500, 72 px, Dark. Centralizado.
- **Abaixo, 32 px gap**: `Pronto para criar?` Bricolage Regular 400, 28 px, Stone `#3d3a35`.
- **Contatos**: centralizado, 48 px abaixo.
  - Email: Bricolage Regular 400, 24 px, Dark. Ex: `oi@alright.film`
  - Telefone: mesma spec.
  - Site: `alright.film`, mesma spec, com underline Orange Clay 2 px (decorativo).
- **Wordmark**: logo state Default C.2, 40 px height, Dark. Bottom-center, padding 64 px.

### 4.7 Contracapa

- **Background**: Dark `#141413`.
- **Wordmark**: logo state Expressivo C.1 (`l` central Orange Clay `#d97757`, resto Bone `#faf9f5`). Centralizado. 120 px height.
- **Abaixo, 32 px gap**: `A.I. first Production Company.` Bricolage Regular 400, 20 px, Slate-warm `#5b5750` sobre Dark (para WCAG, usar Bone ou Stone; **revisão**: Bone `#faf9f5` para contraste seguro 17,5:1).
- **Bottom**: `alright.film` Bricolage Regular 400, 16 px, Bone. Bottom-center, padding 48 px.
- **Momento raro para C.1**: contracapa é o 10% de uso premium do state Expressivo. O Orange Clay no `l` fecha a proposta com o trocadilho sutil — `AIright`.

---

## Notas de implementação

### Acessibilidade (WCAG 2.2 AA)

Pares de cor validados no documento:

| Par | Contraste | Conformidade |
|---|---|---|
| Dark `#141413` sobre Bone `#faf9f5` | 17,5:1 | AAA |
| Bone `#faf9f5` sobre Dark `#141413` | 17,5:1 | AAA |
| Stone `#3d3a35` sobre Bone `#faf9f5` | 7,2:1 | AAA |
| Slate-warm `#5b5750` sobre Bone `#faf9f5` | 5,1:1 | AA |
| Clay Deep `#8c4a32` sobre Bone `#faf9f5` | 4,72:1 | AA |
| Orange Clay `#d97757` sobre Dark `#141413` | 5,90:1 | AA |
| Orange Clay `#d97757` sobre Bone `#faf9f5` | 2,96:1 | Falha (decorativo only) |
| Dark `#141413` sobre Orange Clay `#d97757` | 5,06:1 | AA |

### Regra de proporção Orange Clay

Max 5-10% da peça. Usos permitidos: accent de logo C.1, hover/link sobre Dark, barra decorativa, underline, ícone decorativo. Nunca como background dominante, nunca como texto sobre Bone.

### Motion summary

| Elemento | Duration | Easing |
|---|---|---|
| Hero headline fade | 1.4s | cinematic `(0.16, 1.0, 0.3, 1.0)` |
| Section reveals | 600ms | emphasized `(0.2, 0.0, 0.0, 1.0)` |
| Card stagger | 120ms | emphasized |
| Hover transitions | 200-300ms | standard `(0.2, 0.0, 0.0, 1.0)` |
| C.2→C.1 hover | 600ms | emphasized |
| `prefers-reduced-motion` | Fade 400-600ms | linear ou decelerate |

---

*((We Are Alright))*
