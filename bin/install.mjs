#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { homedir } from "node:os";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");
const skillName = "premium-motion-pipeline";

function expandHome(path) {
  if (!path || path === "~") return homedir();
  if (path.startsWith("~/")) return join(homedir(), path.slice(2));
  return path;
}

function parseTargetRoot() {
  const args = process.argv.slice(2);

  if (args.includes("--help") || args.includes("-h")) {
    console.log("Install the Premium Motion Pipeline skill.");
    console.log("");
    console.log("Usage:");
    console.log("  npx github:greenpeez/Premium-Motion-Pipeline");
    console.log("  npx github:greenpeez/Premium-Motion-Pipeline -- --target ~/.agents/skills");
    console.log("");
    console.log("Options:");
    console.log("  --target <dir>    Skills root or final skill directory.");
    console.log("");
    console.log("Environment:");
    console.log("  PREMIUM_MOTION_SKILL_DIR    Skills root or final skill directory.");
    process.exit(0);
  }

  const targetArg = args.find((arg) => arg.startsWith("--target="));
  if (targetArg) return targetArg.slice("--target=".length);

  const targetIndex = args.indexOf("--target");
  if (targetIndex >= 0 && args[targetIndex + 1]) return args[targetIndex + 1];

  return process.env.PREMIUM_MOTION_SKILL_DIR || join(homedir(), ".codex", "skills");
}

const targetRoot = resolve(expandHome(parseTargetRoot()));
const targetDir = targetRoot.endsWith(skillName) ? targetRoot : join(targetRoot, skillName);

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
