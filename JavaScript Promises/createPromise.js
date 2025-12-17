function createPromise (num){
    return new Promise((resolve, reject) => {
        if(num > 0){
            resolve("The number is positive")
        }else{
            resolve("The number is negative")
        }
    })
}

createPromise(12).then(data => console.log(data))