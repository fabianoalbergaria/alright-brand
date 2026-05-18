#!/usr/bin/env node
// Inspect feed-01-case.psd to understand layer structure
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { readPsd, initializeCanvas } from 'ag-psd';
import { createCanvas, Image } from 'canvas';
initializeCanvas(createCanvas, (w, h) => new Image(w, h));

const file = resolve(process.argv[2] || '../assets/social/instagram/psd/feed-01-case.psd');
const buf = readFileSync(file);
// Skip layer image data — feed-01-case.psd has text layers (0x0 bounds) with no raster
const psd = readPsd(buf, { skipLayerImageData: true, skipCompositeImageData: true, skipThumbnail: true });

console.log('File:', file);
console.log('Dimensions:', psd.width, 'x', psd.height);
console.log('Color mode:', psd.colorMode, '(3=RGB)');
console.log('Bits/channel:', psd.bitsPerChannel);
console.log('Layers:');
function walk(children, depth) {
  for (const layer of children || []) {
    const indent = '  '.repeat(depth);
    const hasCanvas = !!layer.canvas;
    const hasText = !!layer.text;
    const w = (layer.right || 0) - (layer.left || 0);
    const h = (layer.bottom || 0) - (layer.top || 0);
    console.log(`${indent}- "${layer.name}" @ (${layer.left || 0},${layer.top || 0}) ${w}x${h}`);
    console.log(`${indent}  blendMode=${layer.blendMode || 'normal'} opacity=${layer.opacity ?? 255} hidden=${!!layer.hidden} hasCanvas=${hasCanvas} hasText=${hasText}`);
    if (layer.text) {
      console.log(`${indent}  text="${layer.text.text}"`);
      if (layer.text.transform) console.log(`${indent}  transform=${JSON.stringify(layer.text.transform)}`);
      if (layer.text.style) console.log(`${indent}  style.font=${layer.text.style.font?.name} size=${layer.text.style.fontSize} fill=${JSON.stringify(layer.text.style.fillColor)}`);
    }
    if (layer.children) walk(layer.children, depth + 1);
  }
}
walk(psd.children, 1);
