import {exec} from "child_process";

const execute = () => {
  return new Promise((resolve, reject) => {
    exec("node ./src/practice.js", (err, stdout) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(stdout);
    });
  });
};

describe("practice", () => {
  it("output results", async () => {
    const out = await execute();
    const lines = out.split("\n");
    expect(lines[0]).toMatch(/^total count 4/);
    expect(lines[1]).toMatch(/^grade2 \[[\s]*$/);
    expect(lines[3]).toMatch(/^[\s]*name:[\s]*'Ken the Ninja',[\s]*$/);
    expect(lines[4]).toMatch(/^[\s]*grade:[\s]*2,[\s]*$/);
    expect(lines[5]).toMatch(
      /^[\s]*points:[\s]*{[\s]*Japanese:[\s]*82,[\s]*Mathematics:[\s]*72,[\s]*Physics:[\s]*80[\s]*}[\s]*$/
    );
    expect(lines[8]).toMatch(/^[\s]*name:[\s]*'Andrew',[\s]*$/);
    expect(lines[9]).toMatch(/^[\s]*grade:[\s]*2,[\s]*$/);
    expect(lines[10]).toMatch(
      /^[\s]*points:[\s]*{[\s]*Japanese:[\s]*80,[\s]*Mathematics:[\s]*72,[\s]*Physics:[\s]*76[\s]*}[\s]*$/
    );
    expect(lines[13]).toMatch(/^average of grade2 and Japanese[\s]*81[\s]*$/);
  });
});
