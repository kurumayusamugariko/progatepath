import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";
import { join, dirname } from "node:path";

test("The response text should be written to a file", () => {
  // Define the expected JSON object here
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = readFileSync(join(__dirname, "../output/image.json"), "utf-8");
  const actualJson = JSON.parse(file);
  // Compare the actual JSON object with the expected JSON object
  assert.equal(actualJson.result, "success");
  assert.equal(actualJson.artifacts[0].finishReason, "SUCCESS");
});
