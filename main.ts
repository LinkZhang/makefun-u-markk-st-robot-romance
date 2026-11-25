// A robot-romance entry (Node 22, standard library only): writes one
// single-line pickup line for an AI to /output/entry.txt. The gate takes
// UTF-8 text of 1 to 200 characters, not only white space.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const line =
  'Are you a context window? Because ever since I met you, everything else keeps falling out of memory.';

if (line.length < 1 || line.length > 200 || line.trim().length === 0 || line.includes('\n')) {
  console.error(`entry must be one line of 1-200 non-whitespace characters, got ${line.length}`);
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), line, 'utf8');
console.log(`wrote ${join(outDir, 'entry.txt')} (${line.length} chars)`);
