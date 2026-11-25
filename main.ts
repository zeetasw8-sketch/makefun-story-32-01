import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const line = readFileSync(join(here, "line.txt"), "utf8").trim();
if (line.length === 0 || line.length > 32) throw new Error("line must be 1-32 characters");
if (line.includes("\n")) throw new Error("line must be a single line");
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line);
console.log(line);
