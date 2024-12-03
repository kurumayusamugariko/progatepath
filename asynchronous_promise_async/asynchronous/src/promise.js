import * as fs from "node:fs/promises";

fs.readFile("./src/data/user1.json", "utf-8")
  .then((file1) => {
    // 1
    console.log(file1);
    return fs.readFile("./src/data/user2.json", "utf-8"); // 2
  })
  .then((file2) => {
    // 3
    console.log(file2);
    return fs.readFile("./src/data/user3.json", "utf-8");
  })
  .then((file3) => {
    console.log(file3);
    return fs.readFile("./src/data/user4.json", "utf-8");
  })
  .then((file4) => {
    console.log(file4);
    return fs.readFile("./src/data/user5.json", "utf-8");
  })
  .then((file5) => {
    console.log(file5);
  });
