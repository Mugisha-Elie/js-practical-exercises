let success = false;

function greatUsers(){
    console.log("Wassup Users!!!");
}

function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(success){
                resolve([
                    {name: "Escanor", age: 21},
                    {name: "Russel", age: 10},
                    {name: "Max", age: 16}
                ]);
            }else{
                reject("Failed to get user list");
            }
        }, 1000);
    }) 
}

const p = getUsers();
// p.then((users) => {
//     greatUsers();
//     console.log(users);
// }).catch((error) => {
//     greatUsers();
//     console.log(error);
// });

p.then((users) => {
    console.log(users);
}).catch((error) => {
    console.log(error);
}).finally(()=>{
    greatUsers();
})