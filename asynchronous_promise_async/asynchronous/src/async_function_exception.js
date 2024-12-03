import * as fs from "node:fs/promises";

const main = async() =>{
	try{
		await fs.readFile("./src/data/user6.json", "utf-8");
	}catch(err){
		console.error(err.message);
	}
};

main();