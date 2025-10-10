let success = false
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
                reject("Failed to get the user list");
            }
        }, 1000);
    })
}

const p = getUsers();
p.catch((error) => {
    console.log(error);
})