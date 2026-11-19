// News image entry for 18 November 2026 (Node 22, standard library only).
// The image is the entry.png beside this file, drawn programmatically
// as a one-day newspaper poster: six stories from Wednesday 18 November
// 2026 (Shenzhen summit eve, the Gulf, the Kerch Bridge, Anthropic's
// record IPO, Nvidia's record quarter, Peltola's Alaska win). The
// program copies it to /output/entry.png. Run it with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
