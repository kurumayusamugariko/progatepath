import assert from "node:assert/strict";
import { test } from "node:test";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "url";
import { join, dirname } from "node:path";

test("The response text should be written to a file", () => {
  const expectedResponseJson = {
    // Define the expected JSON object here
    type: "message",
    role: "assistant",
    content: [
      {
        type: "text",
        text: "こんにちは",
      },
    ],
    model: "claude-3-haiku-48k-20240307",//"claude-3-haiku-20240307"
    stop_reason: "end_turn",
    stop_sequence: null,
    usage: { input_tokens: 12, output_tokens: 114 },
  };

  // const file = readFileSync("../output/text.json", "utf-8");
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const file = readFileSync(join(__dirname, "../output/text.json"), "utf-8");
  const actualJson = JSON.parse(file);
  // Compare the actual JSON object with the expected JSON object
  assert.equal(actualJson.type, expectedResponseJson.type);
  assert.equal(actualJson.role, expectedResponseJson.role);
  assert.equal(
    actualJson.content[0].type,
    expectedResponseJson.content[0].type,
  );

  assert.equal(actualJson.model, expectedResponseJson.model);
});
