import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "The email already answered this question, so this meeting is just thirty salaries sitting in a room reading it out loud to each other for an hour.";

if (line.length > 195 || line.trim() !== line || line.endsWith("\n")) {
  throw new Error("Entry must be one short line with no trailing newline.");
}

const target = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(target, { recursive: true });
writeFileSync(join(target, "entry.txt"), line, "utf8");
