const newUser = {
    firstname: "Jameson",
    lastname: "Levi",
    email: "levi@gmail.com",
    gender: "male"
}


async function fetchUsers(){
    const response = await fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    })

    return response;
}

console.log(fetchUsers())


