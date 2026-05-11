# Alright — House Look AI-first

> Codificação da estética visual proprietária da Alright — o produto que a Alright vende. Tradução, em decisões repetíveis de cor, lente, framing, pós e prompt, da tese aprovada (*editorial-craft com tech sub-rosa*) em linguagem cinematográfica reconhecível em qualquer briefing, com qualquer modelo. A Big idea **`((Look again.))`** é o filtro de qualidade: cada frame recompensa o segundo olhar.
>
> **Data**: 2026-05-10. **Owner**: Bera + Direção. **Status**: v1.0 — pronto para validação.

---

## 0. Tese visual (referência)

Quadrante **`editorial-craft com tech sub-rosa`**: postura austera de produtora tier-1 (A24, Smuggler), calidez de paleta de tech AI dissidente (Anthropic, Mistral), recusa de iconografia óbvia (cinema e AI literais), densidade editorial. House look **único e reconhecível** — o que varia por projeto é a modulação, não o sistema. "Cada filme é um filme" não contradiz: a unidade vem do **método**, não da repetição literal de look — o house look é o vocabulário de partida que cada projeto flexiona, nenhum abandona.

---

## 1. Os cinco princípios visuais da Alright

Pacto de cor, luz, foco, framing e pós que torna um filme reconhecível como Alright em três segundos.

### 1.1 Cinematic, not slop

**Definição**: cada frame é digno de cinema 35mm — não é output bruto de modelo.

- **Rolloff de highlights suave** estilo print stock (Kodak 2383), nunca clipping digital.
- **Black point levantado em ~5 IRE** (lifted blacks); recusa de pretos absolutos digitais.
- **Composição clássica** — regra dos terços, headroom respeitado, eixos de olhar coerentes; nada de "câmera flutuante" típica de prompt sem direção.

**Anti-modelo**: render Pika/Runway cru com pretos esmagados em 0 IRE, highlights queimados, composição centralizada por default.

### 1.2 Crafted human finishing

**Definição**: a mão humana é visível em hero — color grade manual, retouching frame-a-frame, decisões que o modelo não tomaria sozinho.

- **Color grade autoral** por colorista (não LUT default de modelo); primary + secondaries + skin tone protection.
- **Retouching** em mãos, olhos, texturas que o modelo erra.
- **Texture overlay sutil** (grain 35mm, gate weave imperceptível, dust particle rara).

**Anti-modelo**: aceitar output do modelo como entrega. Prompt → render → publicação sem mão humana entre.

### 1.3 Grounded weight

**Definição**: pessoas, objetos e luz têm peso humano. Nada flutua sem motivo. A física é honrada.

- **Luz com fonte plausível** — direção, qualidade e cor justificadas por fonte coerente (janela, prática, sol, fogo).
- **Sombras presentes**, não esmagadas nem inexistentes; profundidade volumétrica.
- **Skin tones com sangue** — subsurface preservada; rugas, poros, imperfeições aceitas.

**Anti-modelo**: figura levitando, sombras-de-modelo (todas iguais), pele de plástico, atmosfera-de-névoa cobrindo frame inteiro.

### 1.4 Editorial density

**Definição**: cada frame tem mais informação do que parece — recompensa o close, alinhado a `((Look again.))`.

- **Layered planes** — foreground + meio + fundo legíveis, com intenção em cada camada.
- **Micro-textura** em superfícies (tecido, parede, madeira, pele); nada totalmente liso.
- **Detalhes de prop e set** que sustentam close-up dedicado.

**Anti-modelo**: fundo borrado a ponto de inexistir, 1 figura sobre cor chapada, composição que se esgota em 1 segundo.

### 1.5 Warm sub-rosa

**Definição**: cor quente é estado-base — sutil, não dramática. A tech fica invisível na superfície.

- **Warm shift global**: shadows com push âmbar leve, midtones neutros-quentes, highlights com warm rolloff (colorista calibra por cena).
- **Contexto físico justifica a cor** (golden hour, tungstênio, vela, neon âmbar) — nunca filtro warm sobre cena fria.
- **Orange clay (`#d97757`)** aparece como **acento físico** em prop/parede/roupa — nunca tint pós sobre o frame.

**Anti-modelo**: warm grade pesado tipo Instagram filter, "teal & orange" hyper-saturado, ausência total de calor (frame neutro-frio que não distingue Alright de produtora AI genérica).

---

## 2. Mood references — biblioteca canônica

10 referências cravadas, todas verificáveis. Cada uma com função: **direta** (rouba e adapta), **inversa** (anti-modelo), ou **ancoragem** (valida o quadrante).

### Diretas (positivas)

1. **"Past Lives" (2023, dir. Celine Song, DP Shabier Kirchner)** — Kodak 35mm 3-perf, luz natural moldada por ARRI Fresnels e Mole-Richardson Tweenies em muslin não-branqueado, grade por Tom Poole (Company3). **Rouba**: disciplina de luz natural-feita-com-controle, grain 35mm sutil, respeito a pele. Modelo direto de *grounded weight + crafted finishing*. ([Cinematography World](https://www.cinematography.world/shabier-kirchner-past-lives/))

2. **"The Iron Claw" (2023, A24, dir. Sean Durkin, DP Mátyás Erdély)** — 35mm Kodak Vision3 500T + Panavision Primo. Filosofia: "não criar look forçando ingredientes". **Rouba**: recusa do "look pop", framing que humaniza, subjetiva curta. Modelo de *cinematic, not slop*. ([Panavision Highlights](https://www.panavision.com/highlights/highlights-detail/family-of-fighters))

3. **"Blade Runner 2049" (2017, dir. Villeneuve, DP Deakins)** — orange/yellow saturada com motivo narrativo (Las Vegas em filtro Tiffen âmbar custom). **Rouba**: warm dominante calibrado em-câmera, smoke isolando peso humano. Modelo de *warm sub-rosa* em escala épica. ([Studio Binder](https://www.studiobinder.com/blog/blade-runner-2049-cinematography-analysis/))

4. **"No Country for Old Men" (2007, Coen Brothers, DP Deakins)** — burnt orange + biscuit sand + warm sepia em motéis. **Rouba**: contenção de warmth — quente pelo contexto físico, nunca por filtro gratuito. Daytime saturado, nighttime desaturado-frio com motivo. Modelo de *grounded* + *warm sub-rosa* sem grandiosidade. ([Color Culture](https://colorculture.org/cinematography-analysis-of-no-country-for-old-men-in-depth/))

5. **"In the Mood for Love" (2000, dir. Wong Kar-wai, DPs Doyle + Lee Ping-bin)** — long takes, framing pelos cantos, repetição arquitetônica, vermelho-âmbar dominante. **Rouba**: a estética do "olhar de novo" — toda cena se desvenda em camadas. **Cravada como referência conceitual da Big idea `((Look again.))`**. ([Criterion](https://www.criterion.com/films/198-in-the-mood-for-love))

6. **"Drive" (2011, dir. Refn, DP Newton Thomas Sigel)** — mercury/sodium vapor em LA, palette inspirado em Hipstamatic Kodachrome. **Rouba**: controle do calor por fonte prática; noite quente sem cair em "teal & orange". Modelo de *warm sub-rosa* urbano-noturno. ([Studio Binder — Drive](https://www.studiobinder.com/blog/newton-thomas-sigel-drive-movie-cinematography/))

7. **"Everything Everywhere All at Once" (2022, A24, dir. Daniels, DP Larkin Seiple)** — universos com lentes anamórficas/esféricas alternadas, saturação justificada por gênero. **Rouba**: modulação é parte do sistema, não exceção — cada universo tem skew, tudo tem assinatura A24. Base direta da seção 7. ([No Film School](https://nofilmschool.com/dp-larkin-seiple-on-everything-everywhere-all-once))

### Inversas (anti-modelos)

8. **Asteria/Moonvalley "Marey" demos (2025–2026)** — tese boa ("clean AI", owned data) mas execução visual ainda em "showcase de modelo", sem signature de produtora. **Anti-modelo do que NÃO ser**: a Alright não pode se confundir com "demo de modelo", mesmo bem-feito. ([No Film School — Marey](https://nofilmschool.com/marey-ethically-trained-ai-video-model))

9. **Pika/Runway Gen-3 demos genéricas (2024–2025)** — frame perfeito demais, névoa cobrindo composição rasa, skin too-smooth, eyes too-glossy, slow-mo gratuito. **Anti-modelo cravado**: o "AI-slop signature" recusado em qualquer entrega.

10. **Gradient SaaS roxo-azul (ElevenLabs/Suno/Runway-as-brand)** — não-cinematográfico, frio, identifica AI hype 2023–2024. **Anti-modelo de paleta**: nunca aparece em material Alright.

### Ancoragem cultural

**A24 como editora** — standard de postura, recusa de cliché, inteligência editorial. A Alright não imita filme A24; herda a postura e aplica em peça publicitária AI-first.

---

## 3. Render style guide — specs técnicas

Default Alright. Modulações por projeto na seção 7.

**Cor**:
- Paleta dominante warm-neutra; range de temperatura **3200K–5600K**. Acima de 5600K só com motivo narrativo cravado.
- Curva primária: lifted shadows com warm push, midtones neutros-quentes, highlights com warm rolloff. Referência funcional: **Kodak 2383 print emulation, variante Rec709 D55** (a "warmest"). ([Preset Curator — Kodak 2383](https://presetcurator.com/kodak-2383-lut/))
- Orange clay `#d97757`: acento físico (prop, parede, roupa); **nunca tint pós**.
- Bone `#faf9f5` como base de luz natural; dark `#141413` como sombra rica, nunca preto puro digital.

**Contraste**: médio. Range **0–95 IRE**, black point em **3–5 IRE**, highlights com rolloff entre **85–95 IRE**. Em cenas dramáticas, contraste pode subir mas mantém o lift em shadow.

**Grain**: sempre em hero. Dosagem sutil-perceptível, **ISO 500 35mm equivalent** (Kodak Vision3 500T) em hero; **ISO 200 equivalent** em material digital. Adicionado em pós quando output do modelo vier sem grain.

**Optical**:
- Lente: **Panavision Primo** ou esférico moderno equivalente + opção **anamórfica 1.8x/2x** para peças premium/dramáticas.
- Aberração cromática controlada e leve, só em borda extrema em peças premium.
- Vignette sutil natural (lente), nunca digital pesado.
- Lens flare aceito quando físico-plausível, nunca como overlay decorativo.

**Depth**: shallow default com bokeh **suave e justificado** (T2.0–T2.8 em 50mm). Bokeh redondo e suave, sem donut/poligonal digital. Rack focus aceito como recurso autoral. Deep focus em estabelecimentos e quando densidade editorial pede o "olhar de novo".

**Composição**: regra dos terços + headroom respeitado. Symmetry como recurso, não tic. Eyeline coerente. Negative space generoso — frame Alright respira.

**Frame rate**: 24 fps default cinema. 30/60 fps apenas em social vertical onde 24 "judder". Slow-mo ético — só com motivo narrativo.

**Aspect ratio**: 2.39:1 anamórfico em hero premium; 16:9 default digital; 9:16 e 1:1 com framing **redesenhado** (não crop). Watermark `(( ))` no canto inferior, escala discreta, adapta-se ao ratio.

---

## 4. Post-production signature

A pós sela o house look. Assinatura em três camadas: color, texture, finishing.

**Color grading**:
- **Primary**: warm shift global + lifted blacks (3–5 IRE) + slight desaturation em midtones (sat ~90%) + mid-tone retention.
- **Secondaries**: skin tone protection obrigatória (Hue natural mesmo após shift global); orange clay protegido quando aparece como prop.
- **Workflow**: ACES IDT → Log → Primary curve (warm + lift) → Secondary skin protection → Print emulation LUT (Kodak 2383 D55 ou custom Alright) → Output.

**LUT custom Alright** (decisão pendente): "Alright Print" — versão custom de Kodak 2383 calibrada para `#d97757` + `#faf9f5`, aplicável a footage AI e real. **Ver decisões pendentes**.

**Skin tones** (regra obrigatória): Hue **20°–35°** no vector scope, saturação **40–55%**, luminância **55–70 IRE** para skin de tom médio (calibrar para outras peles). Skin tone preservation é prioridade no prompt e na pós.

**Vinheta**: sutil natural quando lente justifica; digital pesada — rejeitar.

**Texture overlay**: grain sempre em hero; dust particle raro com motivo; gate weave imperceptível em peças premium; halation sutil em premium, rejeitar quando exagerado.

---

## 5. Brand & AI — diferencial competitivo do guide

Esta é a seção que **nenhum brand guide tradicional tem bem-feito**. A Alright vende imagem por IA — esta seção é o produto.

### 5.1 Princípios para uso de IA generativa

1. **IA é meio, nunca espetáculo**. Cliente compra filme, não pipeline. Comunicação externa não usa jargão técnico (prompt, seed, LoRA, latent) — usa direção, cor, edição, finishing.
2. **Human finishing obrigatório em hero**. Toda peça hero (key visual, capa, opening, closing, lower-third, asset com chancela Alright) passa por mão humana antes de sair.
3. **Reduzir AI-slop signals ativamente**. Mãos quebradas, eyes-too-wet, hair-too-glossy, skin-too-smooth, atmosphere-too-misty, slow-mo gratuito, simetria default — *ver seção 9*.
4. **Modelos preferidos pelo workflow** (revisar trimestralmente): **Veo 4** (lente cinema + movimento coerente); **Sora** (sequências longas + continuidade); **Kontext Pro / FLUX Kontext** (keyframe-to-motion + identidade de personagem); **Runway Gen-5** (iteração rápida); **Luma Ray 3** (movimento de câmera complexo); **Marey** (cliente que exige "clean data"). O modelo certo é o que entrega o frame mais Alright para cada cena.
5. **Pre-production vence pós**. O orçamento que sobrou da câmera vai para prompt iteration, frame curation, mood board sob medida, diretoria autoral antes do primeiro render.
6. **Disclosure sempre, sem exceção**. *Ver 5.5*.

### 5.2 Prompts aprovados — template + 8 prompts cravados

**Template Alright**:

```
[Subject — 2–3 atributos físicos] [ação em presente contínuo]
[in/at environment — 2–3 atributos] [time of day + light source justificada]
[camera — lente + altura + movimento]
[post — film stock + grain + color signature]
[anchors — 3–5 refs positivas + negativas (no ___)]
```

**Prompt 1 — retrato documental quente**
> "Documentary close-up of a woman in her late 40s with weathered skin and natural grey hair, looking off-camera, in a small kitchen with bone-white tiled walls, late afternoon, soft window light from camera-left, shot on 35mm anamorphic at T2.0, slight Kodak 2383 print emulation grade, ISO 500 grain, warm lifted shadows, no AI gloss, no perfect skin, no symmetric centered framing, no atmospheric haze."

**Prompt 2 — ambiente urbano noturno**
> "Wide shot of a deserted São Paulo street at 2am, sodium-vapor street lamps casting amber pools on wet asphalt, single figure walking away from camera, low-angle 35mm spherical lens at T2.8, slight halation in highlights, lifted blacks at 5 IRE, warm-amber color grade, subtle ISO 500 grain, no neon-overload, no teal & orange Hollywood, no smooth digital sheen."

**Prompt 3 — produto cênico (estilo PUMA Eusébio)**
> "Hero product shot of a black football jersey with embroidered crest, hanging on a weathered concrete wall, golden hour direct sunlight casting hard shadow at 35° angle, dust particles visible in light beam, shot on 50mm at T2.8, shallow depth, warm Kodak 2383 grade, fine 35mm grain, no glossy product render, no studio key light flat, no symmetric center."

**Prompt 4 — paisagem natural (estilo Caldeira surf)**
> "Wide naturalist shot of a single surfer paddling out in the Atlantic at dawn, low backlit sun creating water silhouettes, shot on 24mm anamorphic at T2.0, ISO 500 grain, warm lifted shadows, ocean blue desaturated by ~15%, no drone-overhead cliché, no slow-motion gratuitous, no fake-saturated tropical."

**Prompt 5 — interior cotidiano (B2B/Getnet)**
> "Mid-shot of a small business owner behind a café counter, exchanging a card payment with a customer, mid-morning warm tungsten interior light + cool window light from left, shot on 35mm spherical at T2.8, deep focus to background customers visible, warm-neutral color grade, ISO 200 grain, real human skin tone with visible imperfections, no stock-photo smile, no perfect lighting setup, no SaaS gradient backdrop."

**Prompt 6 — composição editorial densa (Look again hero)**
> "Mid-shot of a woman in a vintage denim jacket standing in a workshop, foreground tools in soft focus, mid-ground subject in sharp focus, background another figure working in soft bokeh, late afternoon warm window light camera-right, shot on 50mm at T2.0, layered planes legible, Kodak 2383 print grade, fine grain, no flat single-subject framing, no isolated cutout look."

**Prompt 7 — close-up tátil (texture-forward)**
> "Extreme close-up of two hands kneading bread dough on a wooden table, flour particles visible in air, side natural light from window camera-left, shot macro on 100mm at T2.8, sub-surface skin texture preserved, warm honey color grade, ISO 500 grain, no over-smooth wax-skin render, no perfect-light beauty, no symmetric centered crop."

**Prompt 8 — fashion premium**
> "Editorial fashion mid-shot of a model in oversized tailored coat, standing in a brutalist concrete corridor, cool overhead skylight + warm bounced fill from below, shot on 85mm anamorphic at T2.0, slight halation in highlights, desaturated cool shadows + warm midtones, fine 35mm grain, no glossy beauty retouching, no centered symmetrical fashion cliché, no over-stylized atmosphere haze."

**Regra**: mínimo **5 anchors por prompt** (positivas + negativas). Anchors negativas (`no ___`) eliminam AI-slop antes do render — tão importantes quanto positivas.

### 5.3 Anti-prompts — palavras banidas

Termos que produzem AI-slop por default em quase todos os modelos. **Banidos em prompt Alright**:

- `trending on artstation`, `trending on cgsociety`
- `8k`, `4k ultra-detailed`, `hyper-realistic`, `ultra-realistic`
- `perfect`, `flawless`, `pristine`
- `stunning`, `magnificent`, `breathtaking`, `epic`, `magical`
- `beautiful lighting` (vago — substituir por fonte de luz específica)
- `cinematic` solo (vago — substituir por "shot on 35mm anamorphic" ou ref precisa)
- `dreamy`, `ethereal`, `mystical`, `enchanted`
- `golden hour` sem direção (substituir por "low warm sun from camera-left at 30°")
- `soft focus` genérico (substituir por T-stop e lente)
- `volumetric light`, `god rays` — clichê
- `bokeh balls` (substituir por "shallow depth at T2.0")

**Regra**: se a palavra existe em template Midjourney/Pika random, é provavelmente AI-slop. Substituir por descrição cinematográfica específica.

### 5.4 Biblioteca de mood references para feed em modelos

Frames/imagens usados como **image guide** em Kontext Pro, Veo, Sora image-to-video, Runway reference-image. Pasta canônica: `/03-color-aihouse-motion/ai-house-look/references/` (a popular). 12 referências iniciais:

1. **Past Lives** — Hae Sung em café noturno em Seul (Kodak 35mm, tungstênio, layered) — DP Shabier Kirchner.
2. **The Iron Claw** — família ao redor da mesa (Kodak Vision3, Primo, naturalist) — DP Mátyás Erdély.
3. **No Country for Old Men** — Llewelyn em motel iluminado por tungstênio — DP Roger Deakins.
4. **Blade Runner 2049** — sequência Las Vegas em filtro Tiffen âmbar — DP Roger Deakins.
5. **Drive** — frame noturno em LA com sodium vapor — DP Newton Thomas Sigel.
6. **In the Mood for Love** — Maggie Cheung em corredor estreito, vermelho-âmbar — DPs Doyle/Lee Ping-bin.
7. **Everything Everywhere All At Once** — frame "Wong Kar-wai Verse" (a Alright pega a *referência ao Wong*, não a saturação extrema) — DP Larkin Seiple.
8. **Apple key visual recente** (AirPods Max, MacBook hero) — para limpeza de set + densidade de prop.
9. **Patagonia documentary frame** — para grounded outdoor warmth.
10. **Mubi key art** — para densidade editorial print.
11. **A24 still — interior com tungstênio** — para postura.
12. **Anthropic visual asset (orange + bone)** — para alinhamento de paleta.

**Metadata obrigatório por ref**: filme + ano + diretor + DP + lente/stock + 1 frase do que se rouba. Vira parte do prompt quando alimentada em modelo.

### 5.5 Disclosure obrigatório

**Cravado** (não-negociável em material externo).

**Texto exato PT**:

> **Imagens criadas com Inteligência Artificial.**

**Texto exato EN**:

> **All images were created using Artificial Intelligence.**

**Onde aparece**:
- **Vídeo**: legenda no terço inferior, último frame antes de credits, **mínimo 3 segundos** de exibição.
- **Imagem estática (key visual, social, OOH digital)**: linha de assinatura no canto inferior, mínimo legível em mobile.
- **Deck/proposta/apresentação**: linha de rodapé na primeira página de qualquer seção que mostre asset gerado.

**Tipografia**:
- **Bricolage Grotesque** (sistema da marca) Regular, **all caps** ou Sentence case (definir na seção 8 — templates).
- **Tamanho mínimo no frame**: **1.2% da altura do frame** (ex: em 1080p = 13px; em 4K = 26px). Em vídeo cinema 2.39:1 = calcular pela altura.
- **Cor**: bone `#faf9f5` sobre fundo dark, dark `#141413` sobre fundo bone. **Nunca orange** — orange é a marca, disclosure é serviço de transparência.
- **Tracking**: +20 (ligeiro openness para legibilidade em vídeo).

**Quando aparece**: **sempre** que conteúdo gerado por IA é mostrado para audiência externa. Inclui: campanha de marca para cliente, social orgânico Alright, deck de credenciais, microsite, proposta comercial. **Não aparece em**: comunicação interna, mood board de pré-produção, frame intermediário de iteração.

**Compliance**: alinhado com EU AI Act (artigo de transparência), TikTok/Meta/YouTube content labels, e FTC guidelines US. ([Lensgo — AI Disclosure](https://lensgo.ai/blog/ai-content-ethics-disclosure-guide)) ([Dynamis — AI Disclosure Compliance](https://www.dynamisllp.com/knowledge/ai-disclosure-laws-are-coming-what-brands-need-to-know-now))

### 5.6 Aprovação de hero AI-generated — workflow obrigatório

Toda peça hero passa pelo workflow. Sem exceção, sem atalho de prazo.

```
1. BRIEFING + TREATMENT — direção declarada (DP + diretor + arte) +
   mood refs curadas (≥6 âncoras) + paleta cravada por cena.
2. PROMPT + RENDER — template Alright (5.2) + ≥5 anchors + disclosure
   já desenhado + ≥3 versões por frame-chave.
3. HUMAN REVIEW — checklist seção 10 em cada hero frame; flag se
   AI-slop, paleta fora, framing genérico, skin errado.
4. HUMAN FINISHING — color grade (4.1) + retouching + texture overlay
   + disclosure aplicado.
5. APROVAÇÃO DIRETOR — frame a frame; versão final assinada.
6. CLIENTE + PUBLICAÇÃO — disclosure visível obrigatório; arquivar
   prompts, refs, frames intermediários por 24 meses.
```

---

## 6. Aplicação aos cases existentes — vetor de evolução

5 cases hoje, cada um com estética diferente. Vetor para alinhar ao house look (não pra refazer):

**PUMA Intl + Eusébio Special Edition**: Fica o framing de produto com peso (jersey on concrete) e golden hour. Evolui em warm sub-rosa mais profundo via Print Emulation Alright + sombras menos esmagadas + grain visível em close. Como ficaria: o frame da pantera com modelo com black point a 5 IRE, halation sutil em pelagem, leitura "filme A24 sobre PUMA" em vez de "campanha esportiva polida".

**HBO Max — Paulistão**: Fica o conceito heráldico, brasões customizados, sea-castle. Evolui a saturação do sol (no limite do "AI hyperreal" — recalibrar para warm sub-rosa controlado) + textura de matéria no castelo (pedra, musgo, salitre) + anamórfica em hero. Como ficaria: castelo com light tipo Blade Runner 2049 Las Vegas — warm dominante com motivo + detalhe que recompensa close.

**Claro — animatic com PXP**: Fica a função do animatic como entrega de pré. Evolui virando **mood-board narrativo** (keyframes carregam cor, lente, framing desde o pitch) em vez de esboço técnico. Como ficaria: cada frame com color reference Alright + prop de marca cravado + lente declarada — animatic é asset de pitch.

**W3Haus / Getnet — Força G**: Fica o ambiente de luz mista (tungstênio + janela). Evolui resolvendo o desafio declarado de **consistência entre cenas/locações** via color grade Alright + LUT custom + framing uniforme + skin tone coerente entre takes. Como ficaria: sequência inteira com Print Emulation Alright + luz prática justificando cor — leitura "documentário curto sobre pequenos negócios" em vez de "campanha polida".

**Instituto Caldeira — Why CEO Should Surf**: Fica a abordagem naturalist + statement de uso 100% IA. Evolui virando **filme curto editorial** com framing layered + grain 35mm + disclosure tipográfico em Bricolage Grotesque (substitui o atual). Como ficaria: abertura wide do oceano em color Past Lives (Kirchner-style), close de mão na água com macro detail, cut para CEO em silhueta — "documentary short" A24, não "explainer".

---

## 7. Modulações por contexto

House look único; varia o **skew controlado** por cliente/categoria. **Regra-mãe**: os 5 princípios da seção 1 são inegociáveis em qualquer skew.

**Skew Premium** (luxo, fashion, agências tier-1) — anamórfica 1.8x/2x T2.0; aspect 2.39:1; warm sub-rosa **menos pronunciado**, midtones neutros (deixa o styling falar); grain ISO 200; halation sutil; simétrica permitida quando arquitetural. Uso: PUMA International hero, fashion/beauty.

**Skew Dramatic** (entretenimento, sports, broadcast) — anamórfica em hero, esférica em ação; aspect 2.39:1 em hero + 16:9 em derivado; warm sub-rosa **dominante** + secondaries dramáticos (red-shift em batalha, blue em night); grain ISO 500; halation visível; rack focus + subjetiva curta. Uso: HBO Max Paulistão, trailers, openings.

**Skew Documental** (tech, B2B, institucional) — esférica 35–50mm T2.8, deep focus aceito; aspect 16:9 + 9:16 nativo; warm sub-rosa **natural** justificado por luz prática; skin protection alta; grain ISO 200; halation ausente; tripod default + handheld controlado. Uso: Caldeira, Getnet, peças institucionais.

---

## 8. Templates de vídeo

Gap detectado na Fase 0 (slide 13 quebra o sistema). Cravar abaixo; produção na fase 4.

**Frame de capa (YouTube/Vimeo/Reels)** — aspect 16:9 ou 9:16; still mais forte + título em **Bricolage Grotesque Bold** + lockup `(( Alright ))` canto inferior + disclosure em legenda; color = paleta da peça + warm tint + grain.

**Slate intro** (3s) — bone `#faf9f5` + título em Bricolage Grotesque Display centered, com `(( ))` envolvendo; cliente + ano em rodapé.

**Slate outro** (5s) — `(( We Are Alright ))` + URL `we-are-alright.com` + disclosure + créditos opcionais.

**Slate between scenes** (1.5s) — cor warm sólida (orange clay como acento sutil) + palavra em `(( ))`; uso pontual.

**Lower-thirds** — barra bone 60% opacidade + texto dark; Bricolage Grotesque Regular (nome/cargo) ou SemiBold caps quando legibilidade exige; largura 40% do frame; fade-in 12f + hold 3s mínimo + fade-out 12f.

**Watermark sobreposta** — `(( ))` bone 60% opacidade, canto inferior, escala 2% da altura do frame; visível em todo o vídeo orgânico Alright (opcional em cliente conforme contrato).

**Disclosure de IA no frame** — regra tipográfica/posicional da seção 5.5. Em vídeo: nos primeiros 5s OU no último frame antes de credits, hold mínimo 3s. Em capa estática: linha inferior, legível em mobile.

**Sub-template "AI Generated"** (estilo slide 13 atual — manter o gesto, refinar) — substituir tipografia atual por **Bricolage Grotesque Display Bold sentence case** (sem italic + caps mistas); peso visual ~30% maior; `(( ))` envolvendo o disclosure como assinatura.

---

## 9. Anti-house-look — 10 don'ts visuais

Cada um é razão de **reprovação** em hero; flag para reabertura em peça intermediária.

1. **Skin perfeito demais** — skin de cera, sem poro/ruga. Tell mais forte de AI-slop.
2. **Mãos quebradas** — 6 dedos, 4 dedos, anel sumindo entre frames. Verificar SEMPRE.
3. **Olhos sem reflexo coerente** — sem catchlight, ou olhos "vidrados" (AI-wet).
4. **Cabelo "wet" demais** — fios uniformes, brilho fake, sem mechas soltas.
5. **Atmosfera/névoa sem motivo** — fog para esconder detalhe que o modelo errou.
6. **Cor super-saturada que não bate com physical light** — filtro Instagram sobre cena neutra.
7. **Iconografia AI literal** — neural network, partícula brilhante, blossom, pulsing dot.
8. **Iconografia cinema literal** — claquete, película, refletor. A24 ensina: cliché mortal.
9. **Composição centered-default** — sem motivo, recompor.
10. **Slow-motion gratuito** — sem motivo narrativo, recusar.
11. **Gradient SaaS roxo/azul** em qualquer ponto — defeito, não estética Alright.

---

## 10. Validação no produto real — checklist final

Diretor + colorista aplicam antes de aprovar hero como Alright-grade. Se algum item não for marcado, **a peça não é Alright** — volta para finishing.

**Cor**: (1) curva primária aplicada (warm + lifted blacks + mid-tone retention)? (2) skin tones em range natural (Hue 20°–35°, Sat 40–55%)? (3) orange clay só como prop físico, nunca tint pós?

**Luz**: (4) toda luz com fonte plausível? (5) sombras presentes, não esmagadas?

**Foco/composição**: (6) bokeh orgânico (não donut/poligonal)? (7) regra dos terços ou simetria motivada? (8) layered planes legíveis (foreground + mid + background)?

**Matéria**: (9) grain 35mm perceptível em close? (10) texture em superfícies (skin, fabric, parede)?

**Recusa de slop**: (11) mãos checadas (anatomia, dedos, contato)? (12) nenhum dos 11 don'ts da seção 9 presente?

**Brand & disclosure**: (13) disclosure de IA presente (PT/EN conforme audiência)? (14) lockup `(( ))` visível conforme template?

---

## 11. Decisões pendentes para Bera

1. **LUT proprietário "Alright Print"** — encomendar versão custom (colorista parceiro DaVinci Resolve, escopo: warm shift + lifted blacks + skin protection calibrada para `#d97757` + `#faf9f5`) ou começar com Kodak 2383 Rec709 D55 comercial e iterar? **Recomendação**: 2383 D55 nos próximos 3 projetos (1 por skew) + budget Q3 para LUT custom calibrado com os dados coletados.

2. **Prompts canônicos públicos vs internos** — os 8 prompts da seção 5.2 viram asset público (microsite, deck) ou ficam internos como diferencial competitivo? **Recomendação**: publicar 3 (1, 4, 5 — variados em registro) como prova de transparência; manter os outros 5 internos.

3. **Biblioteca de mood references física** — popular `/references/` com stills locais das 12 refs (seção 5.4) ou linkar externamente? **Recomendação**: arquivar localmente com CSV de metadata para uso permanente em image-to-video.

4. **Disclosure tipográfico em vídeo** — Bricolage Grotesque Display em all-caps ou sentence case? **Recomendação**: sentence case default (lê editorial, alinha com "humildade calculada"); all-caps só quando contexto regulatório exigir.

---

*v1.0 — 2026-05-10. Escrito após Fase 1 cravada. Aguarda validação Bera para aplicação no primeiro hero (sugestão: refazer 1 frame de cada um dos 5 cases como prova de tradução do house look).*
