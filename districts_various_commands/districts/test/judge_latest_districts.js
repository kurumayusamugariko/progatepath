import process from "process";
import { strict as assert } from "node:assert";
import ANSWER from "../answer_latest_districts.js";

if (!ANSWER) {
  console.log("Missing default export in answer_latest_districts.js.");
  process.exit(1);
}

const results = [];

const latestDistricts = new Set(ANSWER.latestDistricts);
results.push(
  assert(
    latestDistricts.has("長野県茅野市") &&
      latestDistricts.has("沖縄県うるま市"),
    "missing elements in latestDistricts"
  )
);
results.push(
  assert(latestDistricts.size === 2, "latestDistricts has too many elements")
);

// Filter empty results out.
const errors = results.filter((msg) => !!msg);
if (errors.length > 0) {
  console.log(errors.join("\n"));
  process.exit(1);
}

console.log("Correct. Congratulations!");
