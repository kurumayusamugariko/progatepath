import * as fs from "fs";

fs.readFile("./src/data/user1.json", "utf-8", (err, file1) => {
  if (err) {
    console.error(err.message);
    return;
  }
  console.log(file1);

  fs.readFile("./src/data/user2.json", "utf-8", (err, file2) => {
    if (err) {
      console.error(err.message);
      return;
    }
    console.log(file2);

    fs.readFile("./src/data/user3.json", "utf-8", (err, file3) => {
      if (err) {
        console.error(err.message);
        return;
      }
      console.log(file3);

      fs.readFile("./src/data/user4.json", "utf-8", (err, file4) => {
        if (err) {
          console.error(err.message);
          return;
        }
        console.log(file4);

        fs.readFile("./src/data/user5.json", "utf-8", (err, file5) => {
          if (err) {
            console.error(err.message);
            return;
          }
          console.log(file5);
        });
      });
    });
  });
});
