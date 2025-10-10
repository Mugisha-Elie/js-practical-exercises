function getUsers(callback){
    setTimeout(()=>{
        callback(
            [
                {name: "Escanor", age: 21},
                {name: "Russel", age: 10},
                {name: "Max", age: 16}
            ]
        )
    }, 1000);
}

function findUser(username, callback){
    getUsers((users) =>{
        const user = users.find(user => user.name === username);
        // return user
        callback(user)
    });
}
// console.log(findUser("Escanor"));
findUser("Escanor", console.log);