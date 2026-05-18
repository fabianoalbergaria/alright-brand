#!/usr/bin/env node
// Generate Adobe swatch files for the Alright palette.
//   - alright.aco : Photoshop swatch (v1 + v2 with names)
//   - alright.ase : Adobe Swatch Exchange (Illustrator/InDesign too)
//
// Drop alright.aco onto Photoshop's Swatches panel (or Edit → Presets →
// Preset Manager → Swatches → Load) and the 7 named colors appear in the
// panel.

import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = resolve(__dirname, '..', 'assets', 'downloads');
mkdirSync(OUT_DIR, { recursive: true });

const COLORS = [
  { name: 'Alright · Orange Clay', hex: 'd97757' },
  { name: 'Alright · Bone',        hex: 'faf9f5' },
  { name: 'Alright · Dark',        hex: '141413' },
  { name: 'Alright · Stone',       hex: '3d3a35' },
  { name: 'Alright · Slate Warm',  hex: '5b5750' },
  { name: 'Alright · Mist',        hex: 'ece8dc' },
  { name: 'Alright · Clay Deep',   hex: '8c4a32' },
];

function rgbFromHex(hex) {
  const v = parseInt(hex, 16);
  return [(v >> 16) & 0xff, (v >> 8) & 0xff, v & 0xff];
}

// ────────────────────────────────────────────────────────────────────────
// ACO (Adobe Color) — Photoshop swatch format
// File = v1 block then v2 block, both with the same color list.
// All multibyte fields are big-endian.
// ────────────────────────────────────────────────────────────────────────

function writeUint16BE(buf, value, offset) {
  buf.writeUInt16BE(value, offset);
  return offset + 2;
}

function writeUint32BE(buf, value, offset) {
  buf.writeUInt32BE(value, offset);
  return offset + 4;
}

function aco() {
  const N = COLORS.length;
  const COLOR_SPACE_RGB = 0;

  // v1 block: 2-byte version + 2-byte count + 10 bytes per color (space + 4×uint16)
  const v1Size = 4 + N * 10;
  // v2 block: 2-byte version + 2-byte count + per color (10 bytes color +
  // 4-byte name length + 2 bytes × (name length) including null terminator)
  let v2NameBytes = 0;
  for (const c of COLORS) v2NameBytes += 4 + (c.name.length + 1) * 2; // length field + utf16 + null
  const v2Size = 4 + N * 10 + v2NameBytes;

  const buf = Buffer.alloc(v1Size + v2Size);
  let off = 0;

  // ── v1 block
  off = writeUint16BE(buf, 1, off); // version 1
  off = writeUint16BE(buf, N, off); // color count
  for (const c of COLORS) {
    const [r, g, b] = rgbFromHex(c.hex);
    off = writeUint16BE(buf, COLOR_SPACE_RGB, off);
    off = writeUint16BE(buf, r * 257, off); // 257 = 65535 / 255 — promote 8-bit to 16-bit
    off = writeUint16BE(buf, g * 257, off);
    off = writeUint16BE(buf, b * 257, off);
    off = writeUint16BE(buf, 0, off);       // unused channel
  }

  // ── v2 block
  off = writeUint16BE(buf, 2, off); // version 2
  off = writeUint16BE(buf, N, off); // color count
  for (const c of COLORS) {
    const [r, g, b] = rgbFromHex(c.hex);
    off = writeUint16BE(buf, COLOR_SPACE_RGB, off);
    off = writeUint16BE(buf, r * 257, off);
    off = writeUint16BE(buf, g * 257, off);
    off = writeUint16BE(buf, b * 257, off);
    off = writeUint16BE(buf, 0, off);
    // Name: 4-byte length (chars including null term), then UTF-16 BE, then null term
    const nameLen = c.name.length + 1;
    off = writeUint32BE(buf, nameLen, off);
    for (let i = 0; i < c.name.length; i++) {
      off = writeUint16BE(buf, c.name.charCodeAt(i), off);
    }
    off = writeUint16BE(buf, 0, off); // null terminator
  }

  return buf;
}

// ────────────────────────────────────────────────────────────────────────
// ASE (Adobe Swatch Exchange) — works in Illustrator, InDesign, Affinity
// Big-endian. Float values 0..1 for RGB channels.
// ────────────────────────────────────────────────────────────────────────

function ase() {
  // Compute total size first to allocate
  let blocksSize = 0;
  for (const c of COLORS) {
    // entry block: 2 type + 4 length + (2 nameLen + (name+1)*2 + 4 model + 12 floats + 2 colorType)
    const nameBytes = (c.name.length + 1) * 2;
    const body = 2 + nameBytes + 4 + 12 + 2;
    blocksSize += 6 + body; // 2 type + 4 length + body
  }

  const headerSize = 12; // 'ASEF' + 2.2 version bytes + 4-byte block count
  const buf = Buffer.alloc(headerSize + blocksSize);
  let off = 0;

  // Header
  buf.write('ASEF', off, 'ascii'); off += 4;
  off = writeUint16BE(buf, 1, off); // major version
  off = writeUint16BE(buf, 0, off); // minor version
  off = writeUint32BE(buf, COLORS.length, off); // block count

  // Blocks
  for (const c of COLORS) {
    const [r, g, b] = rgbFromHex(c.hex);
    const nameBytes = (c.name.length + 1) * 2;
    const bodyLen = 2 + nameBytes + 4 + 12 + 2;

    off = writeUint16BE(buf, 0x0001, off); // block type: color entry
    off = writeUint32BE(buf, bodyLen, off);

    // Name: length (chars incl null) + UTF-16 BE + null
    const nameLen = c.name.length + 1;
    off = writeUint16BE(buf, nameLen, off);
    for (let i = 0; i < c.name.length; i++) {
      off = writeUint16BE(buf, c.name.charCodeAt(i), off);
    }
    off = writeUint16BE(buf, 0, off);

    // Color model: 'RGB ' with trailing space (4 ASCII chars)
    buf.write('RGB ', off, 'ascii'); off += 4;
    // 3× float32 BE
    buf.writeFloatBE(r / 255, off); off += 4;
    buf.writeFloatBE(g / 255, off); off += 4;
    buf.writeFloatBE(b / 255, off); off += 4;

    // Color type: 0 = global, 1 = spot, 2 = normal
    off = writeUint16BE(buf, 2, off);
  }

  return buf;
}

const acoBuf = aco();
const aseBuf = ase();
const acoPath = resolve(OUT_DIR, 'alright.aco');
const asePath = resolve(OUT_DIR, 'alright.ase');
writeFileSync(acoPath, acoBuf);
writeFileSync(asePath, aseBuf);
console.log(`✓ ${acoPath}  (${acoBuf.length} B)`);
console.log(`✓ ${asePath}  (${aseBuf.length} B)`);
console.log(`\n${COLORS.length} cores empacotadas:`);
for (const c of COLORS) console.log(`  · ${c.name.padEnd(28)} #${c.hex.toUpperCase()}`);
