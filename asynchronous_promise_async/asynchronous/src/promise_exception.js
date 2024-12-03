import * as fs from "node:fs/promises";

fs.readFile("./src/data/user6.json", "utf-8")
	.then((file)=>{
		console.log(file);
	})
	.catch((err)=>{
		console.error(err.message);
	});