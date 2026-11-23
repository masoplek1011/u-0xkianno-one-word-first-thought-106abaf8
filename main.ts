// One Word, First Thought — entry program.
//
// Writes exactly one word to <MAKEFUN_OUTPUT_DIR>/entry.txt:
// "murmuration" — a flock of starlings wheeling as one breathing shape.
// Surprising, vivid, and it even sounds like what it describes.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "murmuration";

// The gate requires 1–24 UTF-8 characters, not only whitespace, with no
// trailing newline. Check the constant up front so a bad word can never
// be written silently.
if (
  WORD.length < 1 ||
  WORD.length > 24 ||
  WORD.trim() !== WORD ||
  /\s/.test(WORD)
) {
  throw new Error("entry word fails the gate: must be one word, 1-24 chars");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
