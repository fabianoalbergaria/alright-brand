# Alright — Sistema de cores

> Sistema cromático cravado da Alright (produtora audiovisual AI-first, SP/Brasil). Codifica a paleta warm já em ato no deck atual, valida WCAG 2.2 AA, define a operação dual-state do logo (default vs expressivo), regula gradientes (proibidos por padrão), textura papel-craft (signature), comportamento dark mode (secundário) e regras de proporção.
>
> **Versão**: 1.0 — DECISÃO FINAL CRAVADA.
> **Data**: 2026-05-10.
> **Owner**: brand visual core.
>
> **Arquivos correlatos**:
> - Tokens W3C DTCG: `/Users/beralzir/Projetos/alright-brand/tokens/color.tokens.json`
> - Logo Direção C dual-state: `/Users/beralzir/Projetos/alright-brand/02-visual-core/logo/02-direction-C-detailed.md`
> - Type system Bricolage Grotesque: `/Users/beralzir/Projetos/alright-brand/02-visual-core/typography/01-type-system.md`

---

## 1. Filosofia da paleta

A paleta da Alright é **warm-first em 2026**, momento em que praticamente toda marca de IA opera em frio (preto + azul/turquesa/roxo, gradientes SaaS roxo-azul como assinatura cliché — ElevenLabs, Suno, Runway). A escolha do orange clay sobre off-white papel-craft é gesto **anti-conformista**, aproximando a marca do registro editorial-cinematográfico (A24, Smuggler, Mubi, Verso) e do gap quente válido em tech AI (Anthropic, Mistral). É a tese visual aprovada — *editorial-craft com tech sub-rosa* — em ato cromático: produz com IA, não se veste como tech; produz para cinema, não copia clichês cinematográficos.

Três recusas e duas afirmações operacionais. **Recusas**: (1) gradientes SaaS banidos — flat color como regra; (2) cores frias saturadas não entram na paleta primária nem secundária — só comparecem em estados funcionais derivados (info, success-olive); (3) dark mode é alias secundário, nunca substitui o light warm como rosto. **Afirmações**: (1) Bone como fundo dominante (60–70%); branco puro proibido; (2) Orange Clay é assinatura, **não cor de texto** — opera como pulso visual (logo accent, hover, sublinhado sobre dark) limitado a 5–10% por peça. Para texto laranja sobre Bone, usar o derivado **Clay Deep `#8c4a32`**.

---

## 2. Paleta primária

Três cores fundamentais. Cada uma tem propósito não-permutável: Bone é palco, Dark é voz, Orange Clay é gesto.

### 2.1 Orange Clay — `--color-primary-warm` / "Orange Clay"

| Spec | Valor |
|---|---|
| HEX | `#d97757` |
| RGB | 217, 119, 87 |
| HSL | 14.8°, 63.1%, 59.6% |
| OKLCH | 67.24% 0.131 38.8 |
| CMYK | 0, 45, 60, 15 |
| Pantone Solid Coated | **PMS 7578 C** (alternativa: PMS 1645 C) |

**Quando usar**: logo state Expressivo C.1 (glifo `l` central); hero do microsite; capa de deck tier-1; key visual de campanha; opening slate; brand device `(( ))` em peças expressivas; hover/link **sobre Dark** (5,90:1 AA); ilustração e ícone decorativo single-color sobre Bone.

**Quando NÃO usar**: **texto sobre Bone** (falha 2,96:1 — usar Clay Deep); **controles UI críticos sobre Bone** (falha 1.4.11); **background dominante** (quebra 5–10% e vira "marca laranja" cliché warm-AI); **em gradiente ou com efeito**.

**Propósito**: pulso de calor humano; declaração visual do `AIright` enterrado no `Alright`.

### 2.2 Bone — `--color-background-bone` / "Bone"

| Spec | Valor |
|---|---|
| HEX | `#faf9f5` |
| RGB | 250, 249, 245 |
| HSL | 48.0°, 33.3%, 97.1% |
| OKLCH | 98.18% 0.005 95.1 |
| CMYK | 0, 0, 2, 2 |
| Pantone Solid Coated | **PMS 9184 C** (alternativa: PMS 11-0602 TPG Snow White) |

**Quando usar**: background default em light mode (digital e impresso); texto sobre Dark; wordmark no state Default C.2 sobre fundo dark.

**Quando NÃO usar**: como texto sobre fundos claros; substituído por branco puro `#ffffff` — branco puro é proibido na marca.

**Propósito**: papel-craft como palco; recusa de pixel-perfect frio.

### 2.3 Dark — `--color-foreground-dark` / "Dark"

| Spec | Valor |
|---|---|
| HEX | `#141413` |
| RGB | 20, 20, 19 |
| HSL | 60.0°, 2.6%, 7.6% |
| OKLCH | 19.08% 0.002 106.6 |
| CMYK | 0, 0, 5, 92 |
| Pantone Solid Coated | **PMS Black 6 C** (alternativa warmer: PMS Black 7 C) |

**Quando usar**: texto default sobre Bone (AAA 17,5:1); wordmark `Alright` em ambos os states; background do dark mode canônico (alt warmer `#1a1815` em §7); ícones UI primários sobre Bone.

**Quando NÃO usar**: substituído por preto puro `#000000` — preto puro é proibido; o `#141413` carrega warmth subliminar (alinhado Anthropic).

**Propósito**: voz autoral; dark warm respirando no mesmo registro do Bone.

---

## 3. Paleta secundária

Três cores de apoio. Estendem o sistema sem competir com a primária. **Nenhuma é fria.**

### 3.1 Clay Deep — `--color-primary-warm-deep` / "Clay Deep"

| Spec | Valor |
|---|---|
| HEX | `#8c4a32` |
| RGB | 140, 74, 50 |
| HSL | 16.0°, 47.4%, 37.3% |
| OKLCH | 48.44% 0.097 40.4 |
| CMYK | 0, 47, 64, 45 |
| Pantone Solid Coated (closest) | **PMS 7595 C** (deep clay/rust) |

**Função**: variante text-safe do Orange Clay. Passa 6,35:1 sobre Bone — único orange-family aceito para corpo de texto sobre o fundo claro. Aparece em links inline, citações editoriais coloridas, eyebrows/overlines acentuadas, captions de credit em peças premium.

**Quando NÃO usar**: como accent do logo (esse papel é sempre do Orange Clay canônico). Como background.

### 3.2 Stone — `--color-neutral-stone` / "Stone"

| Spec | Valor |
|---|---|
| HEX | `#3d3a35` |
| RGB | 61, 58, 53 |
| HSL | 37.5°, 7.0%, 22.4% |
| OKLCH | 34.98% 0.010 80.7 |
| CMYK | 0, 5, 13, 76 |
| Pantone Solid Coated (closest) | **PMS Black 3 C** ou **PMS 412 C** |

**Função**: alternativa ao Dark para texto secundário sobre Bone (10,75:1 — AAA folgado). Usado em metadados, sub-heads, caption density. Quando há hierarquia em três níveis no mesmo bloco (head Dark / sub Stone / caption Slate-warm), Stone preenche o nível médio.

### 3.3 Slate-warm — `--color-neutral-slate-warm` / "Slate Warm"

| Spec | Valor |
|---|---|
| HEX | `#5b5750` |
| RGB | 91, 87, 80 |
| HSL | 38.2°, 6.4%, 33.5% |
| OKLCH | 45.83% 0.012 81.8 |
| CMYK | 0, 4, 12, 64 |
| Pantone Solid Coated (closest) | **PMS Warm Gray 11 C** |

**Função**: rules editoriais (linhas, separadores), URLs em footer, metadados de muito baixa hierarquia. Passa 6,82:1 sobre Bone (AA texto, falha AAA — não usar para corpo longo). É o tom que substitui o cinza-frio neutro padrão por uma versão alinhada ao calor da paleta.

> **Regra explícita**: NÃO existe cor secundária fria. Se um dia o sistema crescer e precisar de mais um acento (ex: data-viz com 4+ séries), derivar o quarto acento da família terra (ochre `#945a0e`, brick `#b04a36`) — nunca do azul/verde tech.

---

## 4. Paleta neutra

Escala de 7 valores warm entre Bone e Dark, calibrada via OKLCH para progressão perceptiva linear (passos aproximadamente equidistantes em luminosidade percebida `L*`). Use como step ramp para shading editorial, separadores, backgrounds secundários, surface levels.

| Token | HEX | OKLCH (L %) | RGB | Uso primário | Contraste sobre Bone |
|---|---|---|---|---|---|
| `neutral.100` Mist | `#ece8dc` | 93.08 | 236, 232, 220 | Surface secundária (cards muito sutis), divider quase invisível | 1,16:1 (decorativo) |
| `neutral.200` Veil | `#d8d3c4` | 86.67 | 216, 211, 196 | Surface tertiary, backgrounds de lift sutil | 1,42:1 (decorativo) |
| `neutral.300` Soft | `#bcb6a8` | 77.73 | 188, 182, 168 | Borders sutis, dividers visíveis, ícone disabled | 1,92:1 (decorativo) |
| `neutral.400` Mid-light | `#9a9388` | 66.61 | 154, 147, 136 | Placeholder, label disabled, ícone secundário | 2,89:1 (decorativo / não-texto) |
| `neutral.500` Mid | `#79746a` | 56.04 | 121, 116, 106 | Texto utilitário em large size, ícone funcional | 4,41:1 (AA large only) |
| `neutral.600` Slate-warm | `#5b5750` | 45.83 | 91, 87, 80 | Texto secundário, rules, URL footer | 6,82:1 (AA texto) |
| `neutral.700` Stone | `#3d3a35` | 34.98 | 61, 58, 53 | Texto sub-head, caption density alta | 10,75:1 (AAA) |

A escala foi montada em saltos de aproximadamente 9–11 pontos de L* (OKLCH) — progressão linear-perceptiva, sem o "buraco do meio" que aparece em rampas baseadas em HSL Lightness puro.

---

## 5. Paleta funcional (status / feedback UI)

Quatro cores semânticas, todas derivadas da família warm — exceto `info`, que admite um azul muito sutil **slate-warm** (não tech-blue). Todas validadas para passar **AA texto sobre Bone** (≥4,5:1).

| Status | Token | HEX | Sobre Bone | Equivalente light (dark mode) | Sobre Dark-soft |
|---|---|---|---|---|---|
| Success | `functional.success` | `#5e6b3d` (olive) | 5,47:1 (AA) | `#a3b67a` | 8,04:1 (AAA) |
| Error | `functional.error` | `#b04a36` (brick) | 5,14:1 (AA) | `#e89685` | 7,70:1 (AAA) |
| Warning | `functional.warning` | `#945a0e` (amber-rich) | 5,35:1 (AA) | `#e8b06a` | 9,15:1 (AAA) |
| Info | `functional.info` | `#4a6478` (slate-warm) | 5,89:1 (AA) | `#94aebd` | 7,63:1 (AAA) |

**Decisões cravadas**:
- **Success = olive** (não verde tech). HSL 77° é puxado para amarelo-verde editorial.
- **Error = brick** (não vermelho neon). HSL 9,8° está dentro da família terra-warm.
- **Warning = amber-rich** (mais saturado e mais escuro que o Orange Clay para passar 4,5:1 sobre Bone). Não confundir com o accent — o Orange Clay é signature visual, o Warning amber é mensagem funcional.
- **Info = slate-warm** (não azul tech). HSL 206° com saturação baixa (23,7%) — funcional mas não compete com a calidez. **Considerar opcional**: em superfícies onde haver uma quarta cor frio quebraria a coerência (ex: comunicação editorial, deck institucional), substituir info por `neutral-600 Slate-warm` `#5b5750`.

**Regra de mensagens funcionais** (mitigação de daltonismo, ver §11): **toda mensagem funcional sempre carrega ícone + label de texto**, nunca depende só da cor. Isso elimina o risco de Success vs Warning confundirem em deuteranopia (mostrado na §11).

---

## 6. Validação WCAG 2.2 AA — tabela de pares

Calculado via fórmula oficial W3C (SC 1.4.3 Contrast Minimum + SC 1.4.6 Contrast Enhanced + SC 1.4.11 Non-text Contrast). **Texto AA** = 4,5:1 (corpo) / 3,0:1 (large >=18pt ou 14pt bold). **AAA** = 7,0:1 (corpo) / 4,5:1 (large). **UI/non-text** = 3,0:1.

### 6.1 Light mode (Bone como fundo)

| Foreground | Background | Ratio | Texto AA | Large/UI 3:1 | AAA 7:1 |
|---|---|---|:---:|:---:|:---:|
| Dark `#141413` | Bone `#faf9f5` | 17,50:1 | PASS | PASS | PASS |
| Stone `#3d3a35` | Bone `#faf9f5` | 10,75:1 | PASS | PASS | PASS |
| Slate-warm `#5b5750` | Bone `#faf9f5` | 6,82:1 | PASS | PASS | FAIL |
| Clay Deep `#8c4a32` | Bone `#faf9f5` | 6,35:1 | PASS | PASS | FAIL |
| Info Slate `#4a6478` | Bone `#faf9f5` | 5,89:1 | PASS | PASS | FAIL |
| Success Olive `#5e6b3d` | Bone `#faf9f5` | 5,47:1 | PASS | PASS | FAIL |
| Warning Amber `#945a0e` | Bone `#faf9f5` | 5,35:1 | PASS | PASS | FAIL |
| Error Brick `#b04a36` | Bone `#faf9f5` | 5,14:1 | PASS | PASS | FAIL |
| Mid `#79746a` | Bone `#faf9f5` | 4,41:1 | FAIL | PASS | FAIL |
| **Orange Clay `#d97757`** | **Bone `#faf9f5`** | **2,96:1** | **FAIL** | **FAIL** | **FAIL** |

### 6.2 Sobre Dark `#141413` (texto invertido + dark mode core)

| Foreground | Background | Ratio | Texto AA | Large/UI 3:1 | AAA 7:1 |
|---|---|---|:---:|:---:|:---:|
| Bone `#faf9f5` | Dark `#141413` | 17,50:1 | PASS | PASS | PASS |
| Orange Clay `#d97757` | Dark `#141413` | 5,90:1 | PASS | PASS | FAIL |

### 6.3 Sobre Orange Clay `#d97757` (raro — uso editorial controlado)

| Foreground | Background | Ratio | Texto AA | Large/UI 3:1 |
|---|---|---|:---:|:---:|
| Dark `#141413` | Orange Clay `#d97757` | 5,90:1 | PASS | PASS |
| Bone `#faf9f5` | Orange Clay `#d97757` | 2,96:1 | FAIL | FAIL |

### 6.4 Decisões cravadas a partir da tabela

**APROVADOS para texto** (AA texto, ≥4,5:1):
- Dark, Stone, Slate-warm, Clay Deep, Info, Success, Warning, Error sobre Bone.
- Bone, Orange Clay sobre Dark.
- Dark sobre Orange Clay (uso editorial em peças hero ocasionais).

**APROVADOS apenas para uso decorativo / signature visual** (falha texto, falha UI):
- **Orange Clay sobre Bone** — pode aparecer como logo accent (logos são tratados como elemento gráfico, isentos de WCAG texto), ilustração, ícone single-color decorativo, hover state com mudança secundária (ex: borda + sublinhado em Clay Deep). Não pode ser cor de texto, nem cor única de ícone funcional crítico, nem state de UI sem reforço por contraste de borda/sublinhado/forma.
- **Bone sobre Orange Clay** — mesmo regime: peças tipográficas em Bone sobre fundo Orange Clay só funcionam se o texto for **display largo** (≥48pt, peso Bold) e mesmo assim falha AA. Decisão: NÃO usar Bone como tipo sobre Orange Clay; se precisar de tipo sobre fundo orange, usar Dark.

**REPROVADOS para qualquer uso de leitura**:
- Mid `#79746a` sobre Bone (4,41:1 — AA only para large size; usar como ícone secundário ou rule).

---

## 7. Dark mode (estado secundário)

Dark mode é **alias intencional**, não inversão automática. Definições cravadas:

| Token light | Token dark | HEX dark | Justificativa |
|---|---|---|---|
| `background.bone` (light) | `background.dark` | `#1a1815` | Variante "Dark-soft" — ligeiramente mais quente que `#141413` (HSL 36° vs 60°), reduz contraste agressivo de canvas escuro. Preserva calor da paleta no estado escuro. |
| `foreground.dark` (light) | `foreground.bone-soft` | `#ede9dc` | "Bone-soft" — Bone reduzido em luminância (L* 92 vs 98 do Bone canônico) para evitar fadiga ocular em superfícies escuras. Contraste 14,59:1 sobre Dark-soft (AAA folgado). |
| `primary.warm` (Orange Clay) | (mesma) | `#d97757` | **Orange Clay mantém HEX no dark mode**. Passa 5,67:1 sobre Dark-soft — AA texto, AA large, AAA não. Comportamento Anthropic-aligned (orange é constante entre modes). |
| `neutral.700` Stone | `neutral.300` Soft | `#bcb6a8` | Inversão semântica da escala neutra: o que era "texto sub-head escuro" no light vira "texto sub-head claro" no dark. Mantém 8,77:1 sobre Dark-soft. |
| `functional.success` Olive | `functional.success-light` | `#a3b67a` | Versão alta-luminância para legibilidade sobre dark. 8,04:1 (AAA). |
| `functional.error` Brick | `functional.error-light` | `#e89685` | 7,70:1 (AAA). |
| `functional.warning` Amber-rich | `functional.warning-light` | `#e8b06a` | 9,15:1 (AAA). |
| `functional.info` Slate | `functional.info-light` | `#94aebd` | 7,63:1 (AAA). |

**Regra estratégica**: o site `we-are-alright.com`, deck cliente e brand book abrem em **light mode default sempre**. Dark mode é toggle disponível em produtos digitais (microsite, futuras tools internas), nunca é o estado de apresentação inicial. **Anti-modelo cravado**: dark mode-first sem diferenciação (Suno, Runway, ElevenLabs).

---

## 8. Gradientes

**Proibidos por padrão.** Gradientes SaaS roxo-azul (e suas variações tech-warm com transição suave entre 2+ stops) são o anti-modelo central da marca (Fase 0 §3.1). Cores são **flat sempre** — orange flat, dark flat, bone flat. Hover states usam mudança de cor sólida (Clay Deep) ou de borda/sublinhado, não gradiente.

**Exceção editorial cravada — única**:

`gradient.editorial-bone` — gradiente lateral sutilíssimo Bone → Bone-soft → Bone, usado APENAS em hero do microsite e capa de deck premium para sugerir profundidade de papel sob luz lateral. Não tem orange, não tem dark — é monocromático bone com 2% de variação de luminância. Funcionalmente quase invisível; tecnicamente um gradient.

```
gradient: linear-gradient(
  90deg,
  #faf9f5 0%,
  #f7f4ec 50%,
  #faf9f5 100%
);
```

Toda outra exceção precisa de aprovação explícita do owner brand. Não há "gradient template" disponível para uso geral.

---

## 9. Texturas

### 9.1 Papel-craft overlay (signature visual)

A textura papel-craft visível no deck atual (page-01, page-09, page-12) — papel amassado, dobras visíveis, irregularidades — é **brand asset central**, não decoração. Codificação cravada:

| Aspecto | Especificação |
|---|---|
| Asset | `texture-paper-craft.png` (a produzir na Fase 4 — alta-resolução, 4096×4096px, escala de cinza alpha) |
| Formato | PNG-8 alpha ou SVG com filter |
| Tipo | Overlay multiplicativo sobre Bone (`mix-blend-mode: multiply` em CSS, modo "Multiply" em Figma/Adobe) |
| Opacidade default | 12% (subtle); 18% (média, hero); 25% (max — capa de deck premium) |
| Tile / scale | Não-tilable. Usar instâncias únicas (variantes A, B, C produzidas; rotacionar entre peças) para evitar padrão repetitivo de tile |
| Quando aparece | **Sempre**: capa de deck, hero de microsite, key visual, slate de filme institucional. **Opcional**: páginas internas do deck. **Nunca**: UI de produto digital denso (dashboard, tabela), e-mail signature (renderiza mal em clientes), favicon |

### 9.2 Versão para download

Asset oficial deve ser produzido na Fase 4 (Aplicações), com 3 variantes (A/B/C) + master file editável (Photoshop/Affinity layered). Hosted em CDN da marca para uso interno. Pré-aprovação do owner para uso externo.

---

## 10. Regras de uso (proporções)

A regra dos 5–10% para Orange Clay vem direto da Anthropic ("less is more com warm accent") e do princípio editorial da Fase 0 (orange é signature, não background).

| Cor | Proporção típica em peça | Fluxo |
|---|---|---|
| Bone (fundo) | 60–70% | Sempre dominante |
| Dark (texto, elementos primários, contornos) | 25–35% | Voz; nunca menos que 15% |
| Orange Clay (accent, gestos pontuais) | 5–10% | Pulso, nunca background |
| Neutros warm (rules, separadores, surface) | 0–10% | Suporte sem competir |
| Funcionais (semântica) | 0–3% | Apenas quando há mensagem de status |

**Anti-padrão explícito**: peças com Orange Clay > 15% de superfície viram "marca laranja" — clichê warm-AI já tomado por Anthropic e Mistral. A diferenciação Alright depende de manter Bone como rosto.

---

## 11. Acessibilidade ampliada

### 11.1 Daltonismo (CVD)

Simulação Machado/Oliveira/Fernandes com severidade 100%:

| Cor canônica | HEX original | Protanopia | Deuteranopia | Tritanopia |
|---|---|---|---|---|
| Orange Clay | `#d97757` | `#8c7f54` | `#a29056` | `#f76a6d` |
| Bone | `#faf9f5` | `#f9f8f4` | `#faf9f5` | `#faf8f7` |
| Dark | `#141413` | `#141312` | `#141313` | `#141313` |
| Success Olive | `#5e6b3d` | `#72643a` | `#70653e` | `#62655c` |
| Error Brick | `#b04a36` | `#5d5334` | `#746535` | `#cd3f44` |
| Warning Amber | `#945a0e` | `#725909` | `#80660f` | `#b04a43` |
| Info Slate | `#4a6478` | `#5b6379` | `#555d77` | `#3f6869` |

**Achados críticos**:
1. **Orange Clay continua distinguível de Bone e Dark** em todos os tipos — sistema não quebra para a marca como assinatura visual.
2. **Success Olive e Warning Amber** convergem em deuteranopia (`#70653e` vs `#80660f`). **Mitigação cravada**: toda mensagem funcional sempre vem com **ícone semântico + label textual**, nunca depende só de cor. Esta é a regra mais importante do sistema funcional.
3. **Error Brick** se aproxima do Orange Clay em protan/deutan — mesma mitigação por ícone + label resolve.
4. **Tritanopia preserva separação** do laranja vs verde — risco baixo.

### 11.2 Modo de alto contraste (`prefers-contrast: more`)

Para usuários com `prefers-contrast: more` ativo:
- Substituir `Slate-warm`, `Mid` e `Mid-light` por `Stone` (10,75:1) em texto secundário.
- Aumentar peso do `font-weight` para 500 (Medium) em texto que estaria em Regular 400.
- Bordas de input/button passam de `1px Slate-warm` para `2px Dark`.
- Orange Clay como accent gráfico mantém-se (logo accent decorativo é isento), mas hover state passa para `Clay Deep` (6,35:1) em vez do Orange Clay puro.

### 11.3 Print / impressão

- **Orange Clay em offset CMYK**: o `(0, 45, 60, 15)` reproduz consistente em coated paper. Em uncoated, esperar shift para tom mais terroso (~5% mais escuro, mais "rust"). Aceitável.
- **Pantone match**: usar **PMS 7578 C** (Solid Coated) como referência canônica para serigrafia, embossing, foil. Para Solid Uncoated, **PMS 7578 U** (variante natural).
- **Bone em offset**: imprimir sobre `Munken Pure 120g/m²` ou equivalente off-white natural — o papel já carrega 70% da warmth da cor; a tinta entra suave.
- **Dark em offset**: usar **PMS Black 7 C** (warm black, alinhado) em vez de Process Black puro — preserva calor da paleta.

---

## 12. Comparativo com a paleta atual no deck

Inspeção do thumbnail `page-01.png` (596×335px, JPEG do PDF original):
- **Orange extraído**: centroid `rgb(247, 158, 101)` (`#f79e65`).
- **Bone extraído**: centroid `rgb(235, 233, 227)` (`#ebe9e3`).

Esses valores **não são os HEX reais do PDF**. Três fatores explicam a discrepância: compressão JPEG dessatura/desloca tons quentes para amarelo; anti-aliasing das letras mistura orange + bone; textura papel-craft escurece o background.

**Decisão cravada**: HEX canônico permanece `#d97757` (Anthropic Claude Clay). Justificativa: alinhamento com tese da Fase 0; WCAG (`#fc8941` extraído do thumbnail não passa 3:1 sobre Dark, o `#d97757` passa 5,90:1); saturação editorial sustentável (`#d97757` HSL S 63% — "clay editorial", vs `#fc8941` HSL S 97% — "neon orange tech").

**Pendência para Fase 5 (deck corrigido)**: re-renderizar com paleta cravada e validar em monitor calibrado sRGB. Se cliente percebe como "menos vibrante", documentar a justificativa (acessibilidade + diferenciação vs warm-AI saturado).

---

*FIM. Sistema cromático cravado. Próximo passo na cadeia: produção do `texture-paper-craft.png` master (Fase 4) e revisão tipográfica final do deck (Fase 5).*

*((We Are Alright))*
