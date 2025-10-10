function getUsers(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve([
                
                {name: "Escanor", age: 21},
                {name: "Russel", age: 10},
                {name: "Max", age: 16}
            
            ]);
        }, 1000);
    });
}

function onFulfilled(users){
    console.log(users);
}

const promise = getUsers();
promise.then(onFulfilled);

