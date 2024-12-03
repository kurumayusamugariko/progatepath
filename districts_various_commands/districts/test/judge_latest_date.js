import process from "process";
import { strict as assert } from "node:assert";
import ANSWER from "../answer_latest_date.js";

if (!ANSWER) {
  console.log("Missing default export in answer_latest_date.js.");
  process.exit(1);
}

const results = [];

results.push(
  assert(ANSWER.latestDate === "2023/3/1", "latestDate is incorrect")
);

// Filter empty results out.
const errors = results.filter((msg) => !!msg);
if (errors.length > 0) {
  console.log(errors.join("\n"));
  process.exit(1);
}

console.log("Correct. Congratulations!");
