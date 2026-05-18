#!/usr/bin/env node
// Read OpenType name table from a font file and dump the entries that
// matter for matching in design apps (Family, Subfamily, PostScript name,
// Full name, Typographic Family, Variations PostScript).
import { readFileSync } from 'node:fs';
import opentype from 'opentype.js';

const ID_LABELS = {
  0: 'Copyright',
  1: 'Family',
  2: 'Subfamily',
  3: 'UniqueID',
  4: 'FullName',
  5: 'Version',
  6: 'PostScriptName',
  16: 'TypographicFamily',
  17: 'TypographicSubfamily',
  20: 'PostScriptCID',
  25: 'VariationsPostScriptPrefix',
};

function dump(file) {
  const buf = readFileSync(file);
  const font = opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
  console.log(`\n=== ${file} ===`);
  // opentype.js exposes names per nameID with locale keys (e.g. { en: '...' })
  const names = font.names || {};
  for (const [id, label] of Object.entries(ID_LABELS)) {
    const key = Object.keys(names).find(k => k === label.toLowerCase() || k.toLowerCase() === label.toLowerCase());
    // opentype.js uses some normalized keys; let me just dump what's there
  }
  // Easier: dump everything opentype.js parsed
  for (const [key, value] of Object.entries(names)) {
    const text = typeof value === 'string' ? value : (value && value.en) || JSON.stringify(value);
    console.log(`  ${key.padEnd(28)} = ${text}`);
  }
  // Also check named instances on variable fonts (fvar.instances)
  if (font.tables.fvar && font.tables.fvar.instances) {
    console.log('  --- Named instances (variable font) ---');
    for (const inst of font.tables.fvar.instances) {
      const name = (inst.name && (inst.name.en || Object.values(inst.name)[0])) || '?';
      const psName = (inst.postScriptName && (inst.postScriptName.en || Object.values(inst.postScriptName)[0])) || '(no postScriptName)';
      const coords = Object.entries(inst.coordinates || {}).map(([k, v]) => `${k}=${v}`).join(', ');
      console.log(`    ${name.padEnd(32)} PS: ${psName.padEnd(40)} [${coords}]`);
    }
  }
}

for (const f of process.argv.slice(2)) dump(f);
