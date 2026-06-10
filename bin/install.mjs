#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const targetDir = join(homedir(), ".codex", "skills", "premium-motion-pipeline");

const required = [join(repoRoot, "SKILL.md"), join(repoRoot, "references")];
const missing = required.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error("Premium Motion Pipeline installer could not find required files:");
  for (const path of missing) console.error(`- ${path}`);
  process.exit(1);
}

mkdirSync(dirname(targetDir), { recursive: true });
rmSync(targetDir, { recursive: true, force: true });
mkdirSync(targetDir, { recursive: true });

cpSync(join(repoRoot, "SKILL.md"), join(targetDir, "SKILL.md"));
cpSync(join(repoRoot, "references"), join(targetDir, "references"), {
  recursive: true,
});

console.log("Premium Motion Pipeline skill installed.");
console.log(`Location: ${targetDir}`);
