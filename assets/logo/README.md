# Alright — Logo Pack

Pack oficial de logos da Alright, gerados a partir das decisões da Fase 2 (Direção C dual-state, Bricolage Grotesque, paleta warm).

## Estrutura

```
assets/logo/
├── svg/        ← SVG editável (<text> + Bricolage via Google Fonts)
└── png/        ← PNG rasterizado em 3 tamanhos (1x / 2x / 3x)
```

## Variantes (8)

| Nome | State | Fundo | Uso |
|---|---|---|---|
| `alright-default-dark` | C.2 | Bone `#faf9f5` | **Default — 90% dos casos.** `Alright` com `l` central Bold 700. |
| `alright-default-bone` | C.2 reverse | Dark `#141413` | Mesmo, sobre fundos escuros. |
| `alright-expressivo-dark` | C.1 | Bone | **Premium — 10% dos casos.** `l` central Orange Clay `#d97757`. |
| `alright-expressivo-bone` | C.1 reverse | Dark | Mesmo, sobre fundos escuros. |
| `alright-reveal-dark` | Reveal | Bone | `((A I r i g h t))` espaçado. **Ato editorial deliberado.** Não usar como default. |
| `alright-reveal-bone` | Reveal reverse | Dark | Mesmo, sobre fundos escuros. |
| `lockup-we-are-alright-dark` | Lockup | Bone | `((We Are Alright))` — sempre EN. Assinatura/footer. |
| `lockup-we-are-alright-bone` | Lockup reverse | Dark | Mesmo, sobre fundos escuros. |

## Tamanhos PNG

- **@1x** — 1200px wide. Uso web standard, redes sociais.
- **@2x** — 2400px wide. Retina/high-DPI, slides em monitor.
- **@3x** — 3600px wide. Print, decks impressos, billboards pequenos.

Para usos acima de 3600px (outdoor, projeção grande), use o **SVG** (escala infinita).

## Regras de uso

### Clear space
Manter ao redor do logo um espaço mínimo equivalente à altura da letra `A` da própria wordmark. Nenhum outro elemento gráfico (texto, foto, ícone) pode invadir essa área.

### Tamanho mínimo
- Web: **24px** de altura
- Print: **8mm** de altura

Abaixo disso, o `l` Bold ou o Orange Clay perdem legibilidade — use o lockup completo `((We Are Alright))` ou apenas `Alright` simplificado.

### Sobre fotos
- Foto clara → use variantes `-dark`
- Foto escura → use variantes `-bone`
- Foto com baixo contraste → adicione **caixa Bone ou Dark sólida** atrás do logo, respeitando clear space

### O que **não** fazer
- ❌ Trocar a fonte (deve ser sempre Bricolage)
- ❌ Mudar o peso do `l` (Bold 700 fixo)
- ❌ Aplicar Orange Clay em outras letras além do `l`
- ❌ Adicionar contorno, sombra, gradiente
- ❌ Distorcer proporção (esticar/achatar)
- ❌ Rotacionar
- ❌ Usar variante Expressivo em mais de 10% dos pontos de contato (vira default)
- ❌ Usar o Reveal `((A I r i g h t))` como logo default — é ato editorial

## Co-branding

Quando aparece junto a logo de cliente: usar **apenas `Alright` wordmark** (sem `(( ))` ou `((We Are Alright))`). Tratamento como qualquer outra wordmark de parceiro.

## SVG: notas técnicas

- Os SVGs usam `@import` do Google Fonts para carregar Bricolage Grotesque. Em ambientes sem internet, o fallback é Inter ou sans-serif do sistema (não ideal — prefira PNG nesses casos).
- Para uso em **Adobe Illustrator/Indesign**: abra o SVG, selecione o texto, "Type → Create Outlines" para converter em paths vetoriais sem dependência de fonte.
- Para uso em **Figma**: cole o SVG na canvas — o Figma carrega Bricolage automaticamente se estiver disponível.

## Regenerar o pack

Os arquivos foram gerados via `tools/generate-logos-v2.mjs` (Node + Playwright + Sharp). Para regerar:

```bash
cd tools
node generate-logos-v2.mjs
```

Pré-requisitos: `npm install` em `tools/` + `npx playwright install chromium`.

---

*((We Are Alright))*
