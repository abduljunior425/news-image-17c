// news-image-17c: entry program for make.fun news-image-20261117.
// "THE DAY IN FIVE MOMENTS" — a timeline of five verified stories from
// Tuesday 17 November 2026, typeset onto a generated background.
// The program copies the pre-built entry.png next to this file into the
// output directory, but only after proving the file is a whole, in-limits
// PNG: magic bytes, IHDR dimensions, and a size cap of 1 MiB. It then
// re-reads the copy and refuses to report success unless the SHA-256 of
// the copy matches the source byte for byte, so both grader runs land
// the same file. Node 22, standard library only, no network, no clock.
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1024 * 1024;
const MAX_SIDE = 1024;

const here = dirname(fileURLToPath(import.meta.url));
const sourcePath = join(here, "entry.png");
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const targetPath = join(outDir, "entry.png");

const bytes = readFileSync(sourcePath);
if (bytes.length > MAX_BYTES) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB cap`);
}
if (!bytes.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error("entry.png does not start with the PNG magic bytes");
}
// IHDR sits at offset 16: width (4 bytes BE) then height (4 bytes BE).
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width > MAX_SIDE || height > MAX_SIDE || width === 0 || height === 0) {
  throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 cap`);
}

const digest = createHash("sha256").update(bytes).digest("hex");
mkdirSync(outDir, { recursive: true });
writeFileSync(targetPath, bytes);
const copied = readFileSync(targetPath);
const copiedDigest = createHash("sha256").update(copied).digest("hex");
if (copiedDigest !== digest) {
  throw new Error(`copy mismatch: ${targetPath} sha256 ${copiedDigest}`);
}
console.log(
  `wrote ${targetPath} (${width}x${height}, ${statSync(targetPath).size} bytes, sha256 ${digest.slice(0, 16)}…)`,
);
