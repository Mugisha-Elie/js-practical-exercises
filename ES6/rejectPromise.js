const rejecting = new Promise((resolve, reject) => {
    setTimeout(()=>{
        reject("Error retrieveing data")
    }, 1000)
})

// rejecting.then(msg => {
//     console.log(msg)
// }).finally(()=>{console.log("Thank you!")})



// rejecting.then(msg => {console.log(msg)}, errmsg => {console.log(errmsg)}).finally(()=>{console.log("Thank you!")})



rejecting.then((resMsg) => {
    console.log(resMsg)
}).catch(rejMsg => {
    console.log(rejMsg)
}).finally(()=>{
    console.log("Thank you!")
})