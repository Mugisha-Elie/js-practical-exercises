function getData(callback){
    setTimeout(()=>{
        callback("Internal error", null);
    }, 1000);
}

function getDataPromise(){
    return new Promise((res, rej) => {
        getData((err, data) => {
            if(err){
                rej(err);
            }else{
                res(data)
            }
        });
    });
}

getDataPromise()
.then((data) => {
    console.log("Promise resolved with:", data)
})
.catch((err) => {
    console.log("Promise rejected with:", err)
})