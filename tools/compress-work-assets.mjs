// Compress originals in assets/work/real → web-friendly versions in assets/work/web
// Images → JPG 1920px wide @ q82, max ~500KB
// Videos → MP4 H.264 1080p, no audio, CRF 24, max 6s loop

import { promises as fs, createReadStream } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';
import ffmpegPath from 'ffmpeg-static';
import sharp from 'sharp';

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const SRC = path.join(ROOT, 'assets/work/real');
const OUT = path.join(ROOT, 'assets/work/web');
await fs.mkdir(OUT, { recursive: true });

// Mapping from source filenames to clean slugs
const slugMap = {
  // already-integrated
  '01.png': 'amino-still-01',
  '03.png': 'amino-still-02',
  '05. RETROVISOR.mov': 'retrovisor-loop',
  '25AW_TS_Football_Portugal_Eusebio_Matchwear_Model_Portrait_01_RGB_4x5.jpeg': 'puma-portugal-portrait',
  '25AW_TS_Football_Portugal_Eusebio_Matchwear_Product-Only_01_RGB_4x5.jpeg': 'puma-portugal-product',
  'AMINO_V8.tif': 'amino-hero',
  'MIZ-2604_ANUNCIO-BOTAFOGO_16x9 (1) (1).mp4': 'botafogo-anuncio',
  'PUMA_PORTUGAL.mp4': 'puma-portugal',
  'hf_20260203_000925_38a26023-193b-4f77-b1ad-bfe206a7d152 (1).png': 'editorial-portrait-01',
  'magnifics_upscale-precision-HqSyMsRXjwKyZD3dhAAQ-8.png': 'editorial-portrait-02',
  'snapinsta.com.br-6a0224af81ce7 (1).mp4': 'social-clip-01',
  'v3_PRODUTO_MONTAGEM_SEDA_SENSORIAL_1.mp4': 'seda-sensorial',

  // new batch
  'surrealism-meets-fun.mp4': 'surrealism-meets-fun',
  'Alright.png': 'alright-still',
  'BAILE DO BRIME.mp4': 'baile-do-brime',
  'CHUPA CHUPS.jpeg': 'chupa-chups',
  'Cash Pop.png': 'cash-pop',
  'Clipe Brime.png': 'clipe-brime',
  'DOVE - ECOM.png': 'dove-ecom',
  'LINIKER - VISUAL NEGRA LI.jpeg': 'liniker-negra-li',
  'Mizuno - Botafogo.mp4': 'mizuno-botafogo',
  'Olympikus-Corre5.tif': 'olympikus-corre5',
  'PERNAMBUCANAS.jpg': 'pernambucanas',
  'Peanut.png': 'peanut',
  'Puma - Portugal 2.jpeg': 'puma-portugal-still-02',
  'Puma - Portugal.jpeg': 'puma-portugal-still-01',
  'SEDA_SENSORIAL_1.mp4': 'seda-sensorial-alt',
  'Seda.tif': 'seda-still',
  'VISUAL NEGRA LI - LOLLAPALOOZA.jpeg': 'negra-li-lolla-01',
  'VISUAL NEGRA LI - LOLLAPALOOZA2.png': 'negra-li-lolla-02',
  'VISUAL NEGRA LI - LOLLAPALOOZA3.mp4': 'negra-li-lolla-clip',
  'VISUAL NEGRA LI - LOLLAPALOOZA4.png': 'negra-li-lolla-04',
  'Visual - Negra Li.mov': 'negra-li-visual',
  'hf_20260415_161340_a4ca2a38-176c-4ecc-b89e-7930be5334c5.png': 'editorial-portrait-03',

  // batch 3
  'chupa-chups-art-gallery.mp4': 'chupa-chups-art-gallery',
  'olympikus-corre5.mp4': 'olympikus-corre5-video',
  'seda-sensorial-v3.mp4': 'seda-sensorial-v3',
  'chupa-chups-surreal-dream.mp4': 'chupa-chups-surreal-dream',
  'chupa-chups-surreal-unboxing.mp4': 'chupa-chups-surreal-unboxing',
  'chupa-chups-forever-fun.mp4': 'chupa-chups-forever-fun',
  'negra-li-retrovisor.mov': 'negra-li-retrovisor',
  'claro.mov': 'claro',
};

function runFfmpeg(args) {
  return new Promise((resolve, reject) => {
    const p = spawn(ffmpegPath, args, { stdio: ['ignore', 'ignore', 'pipe'] });
    let err = '';
    p.stderr.on('data', d => { err += d.toString(); });
    p.on('close', code => code === 0 ? resolve() : reject(new Error(err)));
  });
}

async function compressImage(src, slug) {
  const dst = path.join(OUT, `${slug}.jpg`);
  await sharp(src, { failOn: 'none', limitInputPixels: false })
    .rotate()
    .resize({ width: 1920, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(dst);
  const { size } = await fs.stat(dst);
  return { dst, size };
}

async function compressVideo(src, slug, { maxDuration = 8 } = {}) {
  const dst = path.join(OUT, `${slug}.mp4`);
  const poster = path.join(OUT, `${slug}-poster.jpg`);

  // Compressed MP4: 1080p, H.264, no audio, CRF 24, max 8s, fast start
  await runFfmpeg([
    '-y',
    '-i', src,
    '-t', String(maxDuration),
    '-vf', "scale='min(1920,iw)':-2,format=yuv420p",
    '-c:v', 'libx264',
    '-preset', 'medium',
    '-crf', '24',
    '-movflags', '+faststart',
    '-an',
    dst,
  ]);

  // Poster: first frame at ~0.5s
  await runFfmpeg([
    '-y',
    '-i', src,
    '-ss', '0.5',
    '-frames:v', '1',
    '-vf', "scale='min(1920,iw)':-2",
    '-q:v', '4',
    poster,
  ]);

  const { size } = await fs.stat(dst);
  const { size: posterSize } = await fs.stat(poster);
  return { dst, size, poster, posterSize };
}

const entries = await fs.readdir(SRC);
console.log(`Processing ${entries.length} files...\n`);

for (const file of entries) {
  if (file.startsWith('.')) continue;
  const slug = slugMap[file];
  if (!slug) {
    console.log(`⊘ skip: ${file} (no slug mapping)`);
    continue;
  }
  const src = path.join(SRC, file);
  const ext = path.extname(file).toLowerCase();

  try {
    if (['.png', '.jpg', '.jpeg', '.tif', '.tiff', '.webp'].includes(ext)) {
      const { size } = await compressImage(src, slug);
      console.log(`✓ ${slug}.jpg  (${(size / 1024).toFixed(0)} KB)`);
    } else if (['.mp4', '.mov', '.avi', '.webm', '.mkv'].includes(ext)) {
      const { size, posterSize } = await compressVideo(src, slug);
      console.log(`✓ ${slug}.mp4  (${(size / 1024 / 1024).toFixed(1)} MB) + poster (${(posterSize / 1024).toFixed(0)} KB)`);
    } else {
      console.log(`⊘ skip: ${file} (ext ${ext})`);
    }
  } catch (e) {
    console.log(`✗ ${file}: ${e.message.split('\n')[0]}`);
  }
}

console.log('\nDone. Output → assets/work/web/');
