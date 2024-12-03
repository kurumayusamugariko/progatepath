fetch("http://localhost:8000/users/1")
	.then((response) => {
		return response.json();
	})
	.then((user1)=>{
		console.log(user1);
	});
