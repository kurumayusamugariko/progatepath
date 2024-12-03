fetch("http://localhost:8000/users/6")
  .then((response) => {
		if(!response.ok){
			throw new Error("User not found");
		}
    return response.json();
  })
  .then((user6) => {
    console.log(user6);
  })
	.catch((err) => {
		console.error(err.message);
	});
