#!/usr/bin/env node
// Extract just the Background layer raster from a PSD for visual debugging.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readPsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image, ImageData } from 'canvas';

initializeCanvas(
  createCanvas,
  (w, h) => new ImageData(new Uint8ClampedArray(w * h * 4), w, h)
);

const file = resolve(process.argv[2]);
const buf = readFileSync(file);
const psd = readPsd(buf, { skipCompositeImageData: true, skipThumbnail: true });

const bg = (psd.children || []).find(l => l.name === 'Background');
if (!bg || !bg.canvas) {
  console.error('No Background layer with canvas');
  process.exit(1);
}

const out = file.replace(/\.psd$/i, '-bg.png');
writeFileSync(out, bg.canvas.toBuffer('image/png'));
console.log(`wrote ${out}`);
