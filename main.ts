import { mkdirSync, writeFileSync } from "node:fs";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "🤝", "utf8");
console.log("Wrote 1 emoji to /output/entry.txt");
