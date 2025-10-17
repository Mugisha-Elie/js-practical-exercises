function orderDessert(dessert, callback){
    setTimeout(()=>{
        const error = null;
        const result = `${dessert} is ready to be topped`;
        callback(error, result, dessert);
    },1000)
}

function addToppings(callback){
    setTimeout(()=>{
        const error = null;
        const toppings = "whipped cream";
        const result = `Toppings added: ${toppings}`;
        callback(error, result);
    }, 1000)
}

function serveOrder(result, callback){
    setTimeout(()=>{
        const error = null;
        const finalMessage = `Serving completed! Your dessert with ${result.split(': ')[1]} is here.`;
        callback(error, finalMessage);
    }, 1000)
}

orderDessert("brownie", (err, result1, dessert) => {
    if(err){
        return console.log(err);
    }else{
        console.log(result1);
    }

    addToppings((err, result2)=>{
        if(err) return console.log(err);
        console.log(result2);

        serveOrder(result2, (err, result3)=>{
            if(err) return console.log(err);
            console.log(result3);
        })
    })

    
})