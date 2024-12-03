import process from "process";
import { strict as assert } from "node:assert";
import ANSWER from "../answer_column_names.js";

if (!ANSWER) {
  console.log("Missing default export in answer_column_names.");
  process.exit(1);
}

const results = [];
results.push(
  assert(ANSWER.columnNames[0] === "団体コード", "columnNames[0] is incorrect")
);
results.push(
  assert(ANSWER.columnNames[1] === "団体名", "columnNames[1] is incorrect")
);
results.push(
  assert(ANSWER.columnNames[2] === "更新日", "columnNames[2] is incorrect")
);
results.push(
  assert(ANSWER.columnNames.length === 3, "columnNames has too many elements")
);

// Filter empty results out.
const errors = results.filter((msg) => !!msg);
if (errors.length > 0) {
  console.log(errors.join("\n"));
  process.exit(1);
}

console.log("Correct. Congratulations!");
