function getUsers(){
    return [
        {name: "Escanor", age: 21},
        {name: "Russel", age: 10},
        {name: "Max", age: 16}
    ]
}

function findUser(username){
    const users = getUsers();
    const user = users.find((user) => user.name = username);
    return user;
}

console.log(findUser("Escanor"));