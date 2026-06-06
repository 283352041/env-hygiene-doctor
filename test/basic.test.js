import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
test("prints help", () => assert.match(execFileSync(process.execPath, ["bin/env-doctor.js", "--help"], { encoding: "utf8" }), /Usage/));