// The Houseplant Out-of-Office — make.fun entry.
// One out-of-office auto-reply, written as if by a houseplant:
// the fern, ignored since March, has filed for emancipation.
// Writes exactly one line to /output/entry.txt (UTF-8, 1-120 chars).
import { mkdirSync, writeFileSync } from "node:fs";

const raw =
  "Day 247 without water: the fern has filed for emancipation. It will be accepting sunlight elsewhere.";

// One line, no newline: the gate counts every character in the file.
const entry = raw.replace(/\r?\n/g, " ").trim();
if (entry.length < 1 || entry.length > 120) {
  throw new Error(`entry must be 1-120 characters, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
