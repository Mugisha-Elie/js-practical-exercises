function errorFunction(){
    return new Promise((resolve, reject) => {
        if(Math.random() < 0.5){
            setTimeout(()=>{
                reject(new Error("ERROR!!!"))
            }, 2000)
        }else{
            setTimeout(()=>{
                setTimeout(()=>{
                    resolve({name: "James", age: 2})
                })
            }, 2000)
        }
    })
}


async function getData(){
    try{
        const response = await errorFunction();
        console.log(`Success:`, response)
        return response;
    }catch(e){
        console.log(`An error ocurred`)
    }
}

console.log(getData())

