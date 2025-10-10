const API_DATA = {id: 42, username: "Promise", status: "active"};

function getUserData(id){
    console.log(`Requesting data for user ${id}...`);
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(id === API_DATA.id){
                resolve(API_DATA);
            }else{
                reject(new Error(`User ID ${id} not found`));
            }
        }, 1500);
    });
}

getUserData(41)
.then((user => {
    console.log("Success: Data recieved!");
    console.log(`Hello, ${user.username}.`);
}))
.catch(error => {
    console.log("Error:", error.message);
});
