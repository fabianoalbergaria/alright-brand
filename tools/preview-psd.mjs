#!/usr/bin/env node
// Render a PSD's composite to a flat PNG for visual verification.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, basename } from 'node:path';
import { readPsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image, ImageData } from 'canvas';

// ag-psd needs createCanvas + createImageData. node-canvas exports ImageData
// as a constructor that takes (data, w, h) — wrap it to accept (w, h) too.
function createImageData(w, h) {
  // Allocate a fresh Uint8ClampedArray sized for RGBA
  const data = new Uint8ClampedArray(w * h * 4);
  return new ImageData(data, w, h);
}
initializeCanvas(createCanvas, createImageData);

const file = resolve(process.argv[2]);
const buf = readFileSync(file);
const psd = readPsd(buf, { skipLayerImageData: true, skipThumbnail: true });

if (!psd.canvas) {
  console.error('No composite canvas in PSD');
  process.exit(1);
}

const out = file.replace(/\.psd$/i, '-preview.png');
const stream = psd.canvas.toBuffer('image/png');
writeFileSync(out, stream);
console.log(`wrote ${out} (${psd.width}×${psd.height})`);
