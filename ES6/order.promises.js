function orderDessert(dessert){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const result = `${dessert} is ready to be topped`
            resolve(result);
        }, 1000)
    })
}

function addToppings(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const toppings = "whipped cream";
            const result = `Toppings added: ${toppings}`;
            resolve(result);
        }, 1000)
    })
}

function serveOrder(toppingResult){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const finalMessage = `Serving completed! Your desset with ${toppingResult.split(`: `)[1]} is here.`;
            resolve(finalMessage);
        }, 1000)
    })
}

orderDessert("Cake")
.then(result1 => {
    console.log(result1);
    return addToppings();
}).then(result2 => {
    console.log(result2)
    return serveOrder(result2);
}).then(result3 => {
    console.log(result3);
}).catch(err => {
    console.log(err);
})



























































// const arr = [1,2,3,4];

// function nothing(arr){
//     return arr.map((value, index, arr) => {
//         return `${value} : length: ${arr.length}`; 
//     })
// }

// console.log(nothing(arr))