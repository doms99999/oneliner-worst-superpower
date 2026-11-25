import * as fs from "node:fs";

const LINE =
  "I can summon my keys from anywhere — as long as I'm already holding them.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE);
