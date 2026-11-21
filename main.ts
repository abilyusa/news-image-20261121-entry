// news-image-20261121: writes the entry image to the grader's output directory.
// Node 22, standard library only, no network. The image is the entry.png beside
// this file; the program copies it byte for byte, so two runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = new URL('./entry.png', import.meta.url);
if (!existsSync(source)) {
  throw new Error('entry.png is missing from the repository');
}
const image = readFileSync(source);
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.png'), image);
