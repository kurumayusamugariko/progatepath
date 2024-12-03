import * as fs from "node:fs/promises";

const main = async () =>{
	const user1 = await fs.readFile("./src/data/user1.json", "utf-8");
	console.log(user1);
	const user2 = await fs.readFile("./src/data/user2.json", "utf-8");
	console.log(user2);
	const user3 = await fs.readFile("./src/data/user3.json", "utf-8");
	console.log(user3);
	const user4 = await fs.readFile("./src/data/user4.json", "utf-8");
	console.log(user4);
	const user5 = await fs.readFile("./src/data/user5.json", "utf-8");
	console.log(user5);
};

main();