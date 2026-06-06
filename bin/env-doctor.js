#!/usr/bin/env node
import fs from "node:fs";
if (process.argv.includes("--help")) { console.log("Usage: env-doctor [--json]"); process.exit(0); }
const findings = [];
const has = p => fs.existsSync(p);
if (has(".env")) findings.push(["high", ".env file exists; make sure it is ignored and not committed."]);
if (!has(".env.example")) findings.push(["medium", "Missing .env.example."]);
if (!has(".gitignore") || !fs.readFileSync(".gitignore","utf8").includes(".env")) findings.push(["high", ".gitignore does not clearly ignore .env files."]);
for (const f of fs.readdirSync(".").filter(f=>f.startsWith(".env"))) {
  const text = fs.readFileSync(f,"utf8");
  if (/(token|secret|api[_-]?key|password)=.{8,}/i.test(text)) findings.push(["critical", `${f} may contain a literal secret.`]);
}
if (process.argv.includes("--json")) console.log(JSON.stringify({ findings }, null, 2)); else findings.length ? findings.forEach(f=>console.log(`${f[0].toUpperCase()}: ${f[1]}`)) : console.log("Env hygiene looks good.");
process.exitCode = findings.some(f=>["high","critical"].includes(f[0])) ? 1 : 0;
