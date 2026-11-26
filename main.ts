// entry.txt: the robot vacuum's excuse, 120 chars at most.
import { mkdirSync, writeFileSync } from "node:fs";
// vacTANGO: second pass, the cat wins the corner.
const LINE =
  "Tried the corner. A cat claimed it before I did. I vacuumed respectfully " +
  "around the issue and regret nothing.";
const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, LINE, "utf8");
