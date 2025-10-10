let success = true;

function getUsers(){
    return new Promise((resolve, rejected) => {
        setTimeout(()=>{
            if(success){
                resolve([
                {name: "Escanor", age: 21},
                {name: "Russel", age: 10},
                {name: "Max", age: 16}
            ])
            }else{
                rejected("Faild to get user list");
            }
        }, 1000);
    });
}

function onFulfilled(users){
    console.log(users);
}

function onRejected(error){
    console.log(error);
}

const p = getUsers();
p.then(onFulfilled, onRejected);