const port = process.env.PORT || 8000;

const fetchUser = (userId) =>{
	return fetch(`http://localhost:${port}/users/${userId}`)
		.then((response)=>{
			if(!response.ok){
				throw new Error("User not found");
			}
			return response.json();
		})
};


const main = () => {
	fetchUser(1).then((user1)=>{
		console.log(user1);
		return fetchUser(2);
	}).then((user2)=>{
		console.log(user2);
		return fetchUser(3);
	}).then((user3)=>{
		console.log(user3);
		return fetchUser(4);
	}).then((user4)=>{
		console.log(user4);
		return fetchUser(5);
	}).then((user5)=>{
		console.log(user5);
		return fetchUser(6);
	}).then((user6)=>{
		console.log(user6);
	})
	.catch((err)=>{
		console.error(err.message);
	});
};

main();