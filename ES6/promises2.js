function getUsers(){
    let users = [];

    setTimeout(()=>{
        users = [
            {name: "Escanor", age: 21},
            {name: "Russel", age: 10},
            {name: "Max", age: 16}
        ];
    },2000);

    return users;
}

function findUser(username){
    const users = getUsers();
    const user = users.find(user => user.name === username);
    return user;
}

console.log(findUser("Escanor"))