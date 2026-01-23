function getCars(error=true){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(error){
                return reject("Cars Suck")
            }
            resolve(["bmw", "cadillac", "audi", "mclaren", "ford"]);
        }, 1000)
    })    
}


// Method 1: .then() .catch()
// getCars()
// .then(data => console.log(data))
// .catch(error => console.log(error))








// Method 2: try/catch

// try{
    //     const cars = await getCars();
//     console.log(cars)
// }catch(error){
//     console.log(error)
// }


// Method 3: Mix and Match: 

const cars = await getCars().catch((error) => error)
console.log(cars)






















