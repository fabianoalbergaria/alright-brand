#!/usr/bin/env node
// Generate alright-projects-template-v3.pptx — template editável (Keynote/PowerPoint)
// pra apresentar projetos cliente-a-cliente, com identidade visual Alright v3.
//
// Owner workflow:
//   1. abre /05-deliverables/alright-projects-template-v3.pptx
//   2. duplica
//   3. edita Cover (cliente, projeto, data)
//   4. usa os 8 templates de slide pra montar a apresentação do projeto
//   5. drag-drop pra trocar imagens/vídeos nos placeholders
//   6. exporta PDF ou apresenta no Keynote
//
// Rodar:
//   node tools/generate-projects-deck.mjs

import pptxgen from 'pptxgenjs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '..');
const OUT = resolve(REPO_ROOT, '05-deliverables/alright-projects-template-v3.pptx');

// ─── Tokens v3 ─────────────────────────────────────────────────────────────
const BONE = 'faf9f5';
const BLACK = '000000';
const ORANGE = 'FF5D36';
const ORANGE_DEEP = 'C44818';
const GREEN = 'EAEE59';
const STONE = '3D3A35';
const SLATE = '5B5750';
const MIST = 'ECE8DC';
const BONE_DIM = 'cfcbc1';  // bone 80% pra subtitle em dark

// Fonts — usar Family name REAL como registrado no macOS Font Book
// (PostScript names dos pesos: NeueHaasDisplay-Bold, MonumentGrotesk-Medium, etc).
// Família "Monument Grotesk" cobre Regular/Medium/Bold/Mono (subfamilies);
// pra mono visual usaremos Monument Grotesk regular com tracking alto.
const F_DISPLAY = 'Neue Haas Grotesk Display Pro';  // family REAL — Bold 700 em headings
const F_SANS = 'Monument Grotesk';                  // body + Regular/Medium variants
const F_MONO = 'Monument Grotesk';                  // mesma family — usado em eyebrows c/ charSpacing

// Logo paths
const LOGO_WHITE = resolve(REPO_ROOT, 'assets/logo/v3/Logo_White.png');
const LOGO_BLACK = resolve(REPO_ROOT, 'assets/logo/v3/Logo_Black.png');
const WORDMARK_WHITE = resolve(REPO_ROOT, 'assets/logo/v3/Wordmark_White.png');
const WORDMARK_BLACK = resolve(REPO_ROOT, 'assets/logo/v3/Wordmark_Black.png');
const SYMBOL_WHITE = resolve(REPO_ROOT, 'assets/logo/v3/symbol/Symbol_White.png');
const SYMBOL_BLACK = resolve(REPO_ROOT, 'assets/logo/v3/symbol/Symbol_Black.png');
const SYMBOL_ORANGE = resolve(REPO_ROOT, 'assets/logo/v3/symbol/Symbol_Orange.png');

// ─── Setup ─────────────────────────────────────────────────────────────────
const pres = new pptxgen();
pres.layout = 'LAYOUT_WIDE';  // 13.333" × 7.5" (16:9 widescreen)
pres.author = 'Alright · A.I. first Production Company';
pres.company = 'Alright';
pres.title = 'Alright · Projects Template v3';
pres.subject = 'Template editável pra apresentação de projetos';

// Layout consts
const W = 13.333;
const H = 7.5;
const PAD = 0.6;  // margem segura lateral

// Helper: eyebrow mono caps em qualquer cor
function eyebrowText(text, color = SLATE) {
  return {
    text: text.toUpperCase(),
    options: { fontFace: F_MONO, fontSize: 9, color, charSpacing: 2, bold: false },
  };
}

// Helper: footer wordmark + page meta
function addFooter(slide, opts = {}) {
  const dark = opts.dark === true;
  const wm = dark ? WORDMARK_WHITE : WORDMARK_BLACK;
  const color = dark ? 'a59f93' : SLATE;
  slide.addImage({ path: wm, x: PAD, y: H - 0.55, w: 0.85, h: 0.22 });
  slide.addText('PROJECTS · 2026', {
    x: W - PAD - 2.5, y: H - 0.5, w: 2.5, h: 0.2,
    fontFace: F_MONO, fontSize: 8, color, charSpacing: 2, align: 'right',
  });
}

// ─── SLIDE 1 — COVER PERSONALIZÁVEL ────────────────────────────────────────
function slideCover() {
  const s = pres.addSlide();
  s.background = { color: BLACK };

  // Lockup White top-left
  s.addImage({ path: LOGO_WHITE, x: PAD, y: PAD, w: 1.6, h: 1.6, altText: 'Alright lockup' });

  // Top-right: project meta
  s.addText('PROJETO · 2026', {
    x: W - PAD - 4, y: PAD + 0.1, w: 4, h: 0.25,
    fontFace: F_MONO, fontSize: 10, color: BONE_DIM, charSpacing: 2,
    align: 'right',
  });

  // Big title: Cliente nome (placeholder editável)
  s.addText('Nome do Cliente.', {
    x: PAD, y: 2.8, w: W - PAD * 2, h: 1.4,
    fontFace: F_DISPLAY, fontSize: 88, bold: true, color: BONE,
    align: 'left', valign: 'top', margin: 0,
  });

  // Subtitle: Projeto/peça
  s.addText('Projeto · peça · campanha', {
    x: PAD, y: 4.25, w: W - PAD * 2, h: 0.6,
    fontFace: F_DISPLAY, fontSize: 28, color: BONE_DIM,
    align: 'left', valign: 'top', margin: 0,
  });

  // Big idea bracket no canto inferior esquerdo (rich text com brackets Orange)
  s.addText([
    { text: '((', options: { color: ORANGE, bold: true } },
    { text: ' Look again. ', options: { color: BONE, bold: true } },
    { text: '))', options: { color: ORANGE, bold: true } },
  ], {
    x: PAD, y: H - 1.2, w: 6, h: 0.6,
    fontFace: F_DISPLAY, fontSize: 22,
    align: 'left', valign: 'middle', margin: 0,
  });

  // Bottom-right: data + formato + city
  s.addText([
    { text: 'DATA · MM.AAAA', options: { breakLine: true } },
    { text: 'FORMATO · DECK · PDF', options: { breakLine: true } },
    { text: 'SÃO PAULO / BR', options: {} },
  ], {
    x: W - PAD - 4, y: H - 1.2, w: 4, h: 0.7,
    fontFace: F_MONO, fontSize: 9, color: BONE_DIM, charSpacing: 2,
    align: 'right', valign: 'bottom', margin: 0,
  });

  s.addNotes(
    'COVER personalizável.\n\n' +
    'EDITE:\n' +
    '• Título grande: substitua "Nome do Cliente." pelo nome do cliente/projeto\n' +
    '• Subtitle: substitua "Projeto · peça · campanha" pelo subtítulo\n' +
    '• Meta top-right: "PROJETO · 2026" → ex: "Olympikus · 2026"\n' +
    '• Bottom-right: troque DATA, FORMATO e cidade\n' +
    '• Lockup Alright White e ((Look again.)) ficam fixos.\n\n' +
    'REGRA: padrão é bone/preto, laranja só nos brackets editoriais.'
  );
}

// ─── SLIDE 2 — SECTION DIVIDER ─────────────────────────────────────────────
function slideSectionDivider() {
  const s = pres.addSlide();
  s.background = { color: BONE };

  s.addText('01 — SEÇÃO', {
    x: PAD, y: PAD, w: 4, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: SLATE, charSpacing: 2,
    align: 'left', margin: 0,
  });

  s.addText('Título da seção.', {
    x: PAD, y: 2.5, w: W - PAD * 2, h: 2.5,
    fontFace: F_DISPLAY, fontSize: 96, bold: true, color: BLACK,
    align: 'left', valign: 'top', margin: 0,
  });

  s.addText('Eyebrow opcional · contexto da seção.', {
    x: PAD, y: 5.2, w: W - PAD * 2, h: 0.5,
    fontFace: F_SANS, fontSize: 18, color: STONE,
    align: 'left', valign: 'top', margin: 0,
  });

  addFooter(s);

  s.addNotes(
    'SECTION DIVIDER pra abrir capítulos da apresentação.\n\n' +
    'EDITE:\n' +
    '• Eyebrow top-left: "01 — SEÇÃO" → número + nome da seção\n' +
    '• Título big: substituir pelo nome da seção\n' +
    '• Eyebrow opcional embaixo: contexto curto (1 linha)\n\n' +
    'USE: duplicar este slide pra cada divisor (01, 02, 03…).'
  );
}

// ─── SLIDE 3 — HERO IMAGE FULLBLEED ────────────────────────────────────────
function slideHeroImage() {
  const s = pres.addSlide();
  s.background = { color: BLACK };

  // Placeholder image rect (cinza médio com hint)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: W, h: H,
    fill: { color: '2a2a2a' }, line: { color: '2a2a2a' },
  });

  // Hint text no centro
  s.addText([
    { text: '⤴ ', options: { color: ORANGE, bold: true } },
    { text: 'DRAG-DROP UMA IMAGEM AQUI', options: { color: BONE_DIM } },
  ], {
    x: 0, y: H / 2 - 0.4, w: W, h: 0.4,
    fontFace: F_MONO, fontSize: 12, charSpacing: 3, align: 'center', valign: 'middle',
    margin: 0,
  });
  s.addText('No Keynote/PowerPoint: clique no retângulo cinza, delete, e cole a imagem.\nOu substitua a forma por uma Picture (Insert → Picture).', {
    x: 0, y: H / 2 + 0.1, w: W, h: 0.6,
    fontFace: F_SANS, fontSize: 11, color: SLATE, align: 'center', valign: 'top',
    margin: 0,
  });

  // Scrim bottom (transparente)
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: H - 2.2, w: W, h: 2.2,
    fill: { color: BLACK, transparency: 35 }, line: { color: BLACK, transparency: 100 },
  });

  // Eyebrow top
  s.addText('CASE · 2026 · CLIENTE', {
    x: PAD, y: PAD, w: W - PAD * 2, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: BONE_DIM, charSpacing: 2,
    align: 'left', margin: 0,
  });

  // Title overlay bottom
  s.addText('Título do projeto.', {
    x: PAD, y: H - 1.6, w: W - PAD * 2, h: 0.9,
    fontFace: F_DISPLAY, fontSize: 48, bold: true, color: BONE,
    align: 'left', valign: 'middle', margin: 0,
  });

  // Caption bottom-right
  s.addText('FILME · 30S · 16:9', {
    x: W - PAD - 4, y: H - 0.7, w: 4, h: 0.25,
    fontFace: F_MONO, fontSize: 9, color: BONE_DIM, charSpacing: 2,
    align: 'right', margin: 0,
  });

  s.addNotes(
    'HERO IMAGE FULLBLEED — slide-anchor pra abrir um case ou capítulo visual.\n\n' +
    'EDITE:\n' +
    '• Retângulo cinza central: clique e delete, depois Insert → Picture (ou arraste imagem)\n' +
    '• Ou substitua via Format → Shape Fill → Picture\n' +
    '• Eyebrow top: "CASE · 2026 · CLIENTE" → ano + nome\n' +
    '• Título overlay: substitua pelo título do case\n' +
    '• Caption bottom-right: formato/duração\n\n' +
    'A scrim bottom + cor do título funcionam pra imagens claras E escuras.'
  );
}

// ─── SLIDE 4 — HERO VIDEO PLACEHOLDER ──────────────────────────────────────
function slideHeroVideo() {
  const s = pres.addSlide();
  s.background = { color: BONE };

  // Eyebrow top
  s.addText('VIDEO · CASE · 2026', {
    x: PAD, y: PAD, w: W - PAD * 2, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: SLATE, charSpacing: 2,
    align: 'left', margin: 0,
  });

  // Player 16:9 placeholder centralizado — h reduzida pra deixar espaço pro título sem overlap
  // Aspect 16:9: w=8.89, h=5.0 (era 10×5.625 que sobrescrevia o título no rodapé)
  const playerW = 8.89;
  const playerH = 5.0;
  const playerX = (W - playerW) / 2;
  const playerY = 0.95;

  // Player frame (Black puro)
  s.addShape(pres.shapes.RECTANGLE, {
    x: playerX, y: playerY, w: playerW, h: playerH,
    fill: { color: BLACK }, line: { color: STONE, width: 1 },
  });

  // Play button (Orange círculo no centro)
  const playD = 1.2;
  s.addShape(pres.shapes.OVAL, {
    x: playerX + (playerW - playD) / 2, y: playerY + (playerH - playD) / 2, w: playD, h: playD,
    fill: { color: ORANGE }, line: { color: ORANGE },
  });
  s.addText('▶', {
    x: playerX + (playerW - playD) / 2 + 0.1, y: playerY + (playerH - playD) / 2,
    w: playD, h: playD,
    fontFace: F_DISPLAY, fontSize: 36, bold: true, color: BLACK,
    align: 'center', valign: 'middle', margin: 0,
  });

  // Helper hint embaixo do player
  s.addText('SUBSTITUA POR VIDEO REAL · KEYNOTE: INSERT → MOVIE → DRAG', {
    x: playerX, y: playerY + playerH + 0.12, w: playerW, h: 0.28,
    fontFace: F_MONO, fontSize: 9, color: SLATE, charSpacing: 2,
    align: 'center', margin: 0,
  });

  // Bottom: case meta (sem overlap com player)
  s.addText('Título do filme.', {
    x: PAD, y: 6.55, w: W - PAD * 2, h: 0.5,
    fontFace: F_DISPLAY, fontSize: 24, bold: true, color: BLACK,
    align: 'left', valign: 'middle', margin: 0,
  });
  s.addText('Cliente · Agência · Ano · Formato', {
    x: PAD, y: 7.05, w: W - PAD * 2, h: 0.3,
    fontFace: F_SANS, fontSize: 13, color: STONE,
    align: 'left', valign: 'top', margin: 0,
  });

  s.addNotes(
    'HERO VIDEO PLACEHOLDER — slide pra apresentar um filme.\n\n' +
    'EDITE:\n' +
    '• Retângulo preto + play button: deleta os 3 elementos (rect, oval, ▶) e usa Insert → Movie pra colar o video real\n' +
    '• Ou mantém o placeholder se for usar como link externo (Vimeo etc) — adiciona hyperlink pelo Format menu\n' +
    '• Bottom: troque título do filme + meta\n\n' +
    'KEYNOTE: arraste o .mp4 direto pra dentro do slide; PowerPoint: Insert → Video → This Device.'
  );
}

// ─── SLIDE 5 — SPLIT (texto + imagem) ──────────────────────────────────────
function slideSplit() {
  const s = pres.addSlide();
  s.background = { color: BONE };

  const colW = (W - PAD * 2 - 0.6) / 2;  // 2 colunas com 0.6 de gap

  // Coluna esquerda
  s.addText('01 — CONTEXTO', {
    x: PAD, y: PAD, w: colW, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: SLATE, charSpacing: 2,
    align: 'left', margin: 0,
  });

  s.addText('Título da seção.', {
    x: PAD, y: 1.6, w: colW, h: 1.4,
    fontFace: F_DISPLAY, fontSize: 36, bold: true, color: BLACK,
    align: 'left', valign: 'top', margin: 0,
  });

  s.addText(
    'Body copy descritiva da peça, contexto do projeto, ' +
    'desafio criativo ou abordagem. Texto longo em Monument Grotesk ' +
    'Regular — ideal pra parágrafos densos com 3–5 linhas. ' +
    'Mantém o ritmo editorial sem competir com a imagem ao lado.',
    {
      x: PAD, y: 3.2, w: colW, h: 3,
      fontFace: F_SANS, fontSize: 15, color: STONE,
      align: 'left', valign: 'top', margin: 0,
      paraSpaceAfter: 8,
    }
  );

  // Coluna direita: image placeholder
  const imgX = PAD + colW + 0.6;
  s.addShape(pres.shapes.RECTANGLE, {
    x: imgX, y: 1, w: colW, h: 5.5,
    fill: { color: MIST }, line: { color: MIST },
  });

  s.addText([
    { text: '⤴ ', options: { color: ORANGE, bold: true } },
    { text: 'IMAGEM AQUI', options: { color: STONE } },
  ], {
    x: imgX, y: 1 + (5.5 / 2) - 0.25, w: colW, h: 0.5,
    fontFace: F_MONO, fontSize: 11, charSpacing: 3, align: 'center', valign: 'middle',
    margin: 0,
  });

  addFooter(s);

  s.addNotes(
    'SPLIT — texto + imagem lado a lado.\n\n' +
    'EDITE:\n' +
    '• Coluna esquerda: eyebrow + título + body copy\n' +
    '• Coluna direita: substitua o retângulo cinza por uma imagem (delete o rect, Insert → Picture)\n\n' +
    'USE: descrever uma fase do projeto, abordagem criativa, ou apresentar um still+texto.'
  );
}

// ─── SLIDE 6 — GRID 2×2 ────────────────────────────────────────────────────
function slideGrid() {
  const s = pres.addSlide();
  s.background = { color: BONE };

  s.addText('SELEÇÃO · STILLS · 04', {
    x: PAD, y: PAD, w: W - PAD * 2, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: SLATE, charSpacing: 2,
    align: 'left', margin: 0,
  });

  s.addText('Grid de stills.', {
    x: PAD, y: 0.95, w: W - PAD * 2, h: 0.7,
    fontFace: F_DISPLAY, fontSize: 28, bold: true, color: BLACK,
    align: 'left', valign: 'middle', margin: 0,
  });

  // 2×2 grid
  const gap = 0.25;
  const gridY = 2.0;
  const gridH = H - gridY - 0.9;  // deixa espaço pro footer
  const cellW = (W - PAD * 2 - gap) / 2;
  const cellH = (gridH - gap) / 2;

  for (let row = 0; row < 2; row++) {
    for (let col = 0; col < 2; col++) {
      const x = PAD + col * (cellW + gap);
      const y = gridY + row * (cellH + gap);
      s.addShape(pres.shapes.RECTANGLE, {
        x, y, w: cellW, h: cellH,
        fill: { color: MIST }, line: { color: MIST },
      });
      s.addText([
        { text: '⤴ ', options: { color: ORANGE, bold: true } },
        { text: `STILL ${(row * 2 + col + 1).toString().padStart(2, '0')}`, options: { color: STONE } },
      ], {
        x, y: y + cellH / 2 - 0.2, w: cellW, h: 0.4,
        fontFace: F_MONO, fontSize: 11, charSpacing: 3, align: 'center', valign: 'middle',
        margin: 0,
      });
    }
  }

  addFooter(s);

  s.addNotes(
    'GRID 2×2 — 4 imagens em layout simétrico.\n\n' +
    'EDITE:\n' +
    '• Eyebrow + título top\n' +
    '• 4 retângulos cinza: substitua cada um por uma imagem (delete o rect, Insert → Picture)\n\n' +
    'USE: apresentar seleção de stills, frames-chave, variações de campanha.'
  );
}

// ─── SLIDE 7 — QUOTE / MANIFESTO ───────────────────────────────────────────
function slideQuote() {
  const s = pres.addSlide();
  s.background = { color: BLACK };

  // ((  )) brackets top-left + top-right
  s.addText('((', {
    x: PAD, y: PAD, w: 1, h: 0.6,
    fontFace: F_DISPLAY, fontSize: 32, bold: true, color: ORANGE,
    align: 'left', valign: 'top', margin: 0,
  });
  s.addText('))', {
    x: W - PAD - 1, y: PAD, w: 1, h: 0.6,
    fontFace: F_DISPLAY, fontSize: 32, bold: true, color: ORANGE,
    align: 'right', valign: 'top', margin: 0,
  });

  // Quote big centro
  s.addText('Cada filme\né um filme.', {
    x: PAD, y: 1.8, w: W - PAD * 2, h: 3.5,
    fontFace: F_DISPLAY, fontSize: 84, bold: true, color: BONE,
    align: 'center', valign: 'middle', margin: 0,
  });

  // Attribution mono caps
  s.addText('— MANIFESTO ALRIGHT', {
    x: PAD, y: H - 1.4, w: W - PAD * 2, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: BONE_DIM, charSpacing: 3,
    align: 'center', margin: 0,
  });

  // Wordmark + meta no rodapé
  s.addImage({ path: WORDMARK_WHITE, x: (W - 1) / 2, y: H - 0.85, w: 1, h: 0.25 });

  s.addNotes(
    'QUOTE / MANIFESTO — texto-protagonista sobre Black.\n\n' +
    'EDITE:\n' +
    '• Quote big center: substitua pela frase canon ou citação do projeto\n' +
    '• Attribution: substitua "— MANIFESTO ALRIGHT" pela fonte (cliente, ano, etc)\n' +
    '• Brackets (( )) Orange ficam fixos\n\n' +
    'USE: abrir/fechar uma seção com força editorial, apresentar manifesto canon ou citação do cliente.'
  );
}

// ─── SLIDE 8 — STATS / NUMBERS ─────────────────────────────────────────────
function slideStats() {
  const s = pres.addSlide();
  s.background = { color: BONE };

  s.addText('RESULTADOS · 2026', {
    x: PAD, y: PAD, w: W - PAD * 2, h: 0.3,
    fontFace: F_MONO, fontSize: 10, color: SLATE, charSpacing: 2,
    align: 'left', margin: 0,
  });

  s.addText('Por que funcionou.', {
    x: PAD, y: 0.95, w: W - PAD * 2, h: 0.7,
    fontFace: F_DISPLAY, fontSize: 28, bold: true, color: BLACK,
    align: 'left', valign: 'middle', margin: 0,
  });

  // 3 colunas com big numbers — fontSize 76 + h aumentada pra evitar wrap
  const cols = [
    { num: '+42M', label: 'IMPRESSÕES · ORGÂNICO + MÍDIA' },
    { num: '4×', label: 'CICLO DE PRODUÇÃO ENCURTADO' },
    { num: '0', label: 'CÂMERAS · SETS · LOCAÇÕES' },
  ];
  const colW = (W - PAD * 2) / 3;
  cols.forEach((col, i) => {
    const x = PAD + i * colW;
    s.addText(col.num, {
      x, y: 2.5, w: colW, h: 2.4,
      fontFace: F_DISPLAY, fontSize: 76, bold: true, color: ORANGE,
      align: 'left', valign: 'top', margin: 0,
    });
    s.addText(col.label, {
      x, y: 5.0, w: colW, h: 1.2,
      fontFace: F_MONO, fontSize: 11, color: STONE, charSpacing: 2,
      align: 'left', valign: 'top', margin: 0,
    });
  });

  addFooter(s);

  s.addNotes(
    'STATS / NUMBERS — 3 colunas de números-chave em Orange Alright.\n\n' +
    'EDITE:\n' +
    '• Eyebrow + título top\n' +
    '• 3 colunas: troque cada big number (formato livre: +42M, 4×, 100%, R$, etc) e a label embaixo\n' +
    '• Mantenha labels curtas (2 linhas máx)\n\n' +
    'USE: encerrar um case com resultados quantitativos ou destacar marcos do projeto.'
  );
}

// ─── SLIDE 9 — CONTATO FIXO ────────────────────────────────────────────────
function slideContato() {
  const s = pres.addSlide();
  s.background = { color: BLACK };

  // Big lockup ((We Are Alright)) center
  s.addText([
    { text: '((', options: { color: ORANGE, bold: true } },
    { text: ' We Are Alright ', options: { color: BONE, bold: true } },
    { text: '))', options: { color: ORANGE, bold: true } },
  ], {
    x: 0, y: 1.5, w: W, h: 1.8,
    fontFace: F_DISPLAY, fontSize: 72, bold: true,
    align: 'center', valign: 'middle', margin: 0,
  });

  // Contato em 3 colunas
  const contactY = 4.0;
  const contactW = 4;
  const gap = 0.4;
  const totalW = contactW * 3 + gap * 2;
  const startX = (W - totalW) / 2;

  // Col 1
  s.addText([
    { text: 'CONTATO', options: { breakLine: true, color: ORANGE, charSpacing: 3 } },
    { text: ' ', options: { breakLine: true } },
    { text: 'Fabiano Albergaria', options: { breakLine: true, color: BONE, fontSize: 18, bold: true, fontFace: F_DISPLAY, charSpacing: 0 } },
    { text: 'Founder', options: { color: BONE_DIM, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
  ], {
    x: startX, y: contactY, w: contactW, h: 2,
    fontFace: F_MONO, fontSize: 9, color: BONE_DIM, charSpacing: 2,
    align: 'left', valign: 'top', margin: 0,
  });

  // Col 2
  s.addText([
    { text: 'DIGITAL', options: { breakLine: true, color: ORANGE, charSpacing: 3 } },
    { text: ' ', options: { breakLine: true } },
    { text: 'albergaria@wearealright.cc', options: { breakLine: true, color: BONE, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
    { text: 'wearealright.cc', options: { breakLine: true, color: BONE, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
    { text: '@wearealright.cc', options: { color: BONE, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
  ], {
    x: startX + contactW + gap, y: contactY, w: contactW, h: 2,
    fontFace: F_MONO, fontSize: 9, color: BONE_DIM, charSpacing: 2,
    align: 'left', valign: 'top', margin: 0,
  });

  // Col 3
  s.addText([
    { text: 'TELEFONE', options: { breakLine: true, color: ORANGE, charSpacing: 3 } },
    { text: ' ', options: { breakLine: true } },
    { text: '+55 11 92353-8110', options: { breakLine: true, color: BONE, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
    { text: 'WhatsApp · clique', options: { breakLine: true, color: BONE_DIM, fontSize: 11, fontFace: F_SANS, charSpacing: 0 } },
    { text: ' ', options: { breakLine: true } },
    { text: 'São Paulo / BR', options: { color: BONE, fontSize: 12, fontFace: F_SANS, charSpacing: 0 } },
  ], {
    x: startX + (contactW + gap) * 2, y: contactY, w: contactW, h: 2,
    fontFace: F_MONO, fontSize: 9, color: BONE_DIM, charSpacing: 2,
    align: 'left', valign: 'top', margin: 0,
  });

  // Symbol White bottom-right
  s.addImage({ path: SYMBOL_WHITE, x: W - 1.2, y: H - 1, w: 0.7, h: 0.7 });

  // Footer year
  s.addText('© 2026 · WEAREALRIGHT.CC · A.I. FIRST PRODUCTION COMPANY', {
    x: 0, y: H - 0.4, w: W, h: 0.25,
    fontFace: F_MONO, fontSize: 8, color: 'a59f93', charSpacing: 2,
    align: 'center', margin: 0,
  });

  s.addNotes(
    'CONTATO FIXO — slide final.\n\n' +
    'NÃO PRECISA EDITAR — dados Alright canon.\n\n' +
    'Se for adicionar/trocar contato pra um cliente específico, edite as 3 colunas (CONTATO, DIGITAL, TELEFONE). ' +
    'O lockup ((We Are Alright)) e Symbol ficam fixos.'
  );
}

// ─── Run ───────────────────────────────────────────────────────────────────
async function main() {
  slideCover();
  slideSectionDivider();
  slideHeroImage();
  slideHeroVideo();
  slideSplit();
  slideGrid();
  slideQuote();
  slideStats();
  slideContato();

  await pres.writeFile({ fileName: OUT });
  console.log(`✓ Wrote ${OUT}`);
}

main().catch(e => { console.error(e); process.exit(1); });
