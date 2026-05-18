#!/usr/bin/env node
// Extract any named raster layer from a PSD for visual debugging.
//   node extract-bg-layer.mjs <file.psd> [layerName]
// Default layerName is "Background".
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readPsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image, ImageData } from 'canvas';

initializeCanvas(
  createCanvas,
  (w, h) => new ImageData(new Uint8ClampedArray(w * h * 4), w, h)
);

const file = resolve(process.argv[2]);
const targetName = process.argv[3] || 'Background';
const buf = readFileSync(file);
const psd = readPsd(buf, { skipCompositeImageData: true, skipThumbnail: true });

const layer = (psd.children || []).find(l => l.name === targetName);
if (!layer || !layer.canvas) {
  console.error(`No layer named "${targetName}" with canvas in ${file}`);
  console.error('Available:', (psd.children || []).map(l => l.name).join(', '));
  process.exit(1);
}

const safeName = targetName.replace(/[^a-z0-9]+/gi, '-').toLowerCase();
const out = file.replace(/\.psd$/i, `-${safeName}.png`);
writeFileSync(out, layer.canvas.toBuffer('image/png'));
console.log(`wrote ${out}`);
