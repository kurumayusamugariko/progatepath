const port = process.env.PORT || 8000;

const fetchUser = async(userId) =>{
	const response = await fetch(`http://localhost:${port}/users/${userId}`);
	if(!response.ok){
		throw new Error("User not found");
	}
	return await response.json();
};

const main = async() => {
	try{
		const user1 = await fetchUser(1);
		console.log(user1);
		const user2 = await fetchUser(2);
    console.log(user2);
		const user3 = await fetchUser(3);
    console.log(user3);
		const user4 = await fetchUser(4);
    console.log(user4);
		const user5 = await fetchUser(5);
    console.log(user5);
		const user6 = await fetchUser(6);
    console.log(user6);
	}catch(err){
		console.error(err.message);
	}
};

main();