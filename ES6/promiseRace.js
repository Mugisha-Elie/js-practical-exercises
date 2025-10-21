const promise1 = new Promise((res, rej) => {
    setTimeout(()=>{
        res("Promise 1 resolved")
    }, 1000)
})

const promise2 = new Promise((res, rej) => {
    setTimeout(()=>{
        // res("Promise 2 resolved")
        rej("Promise 2 rejected");
    }, 100)
})

const promise3 = new Promise((res, rej) => {
    setTimeout(()=>{
        res("Promise 3 resolved")
    }, 500)
})

Promise.race([promise1, promise2, promise3])
.then((msg) => {
    console.log("Fastest resolved promise:", msg);
}).catch(error => {
    console.log("Fastest rejected promise:", error);
})

Promise.any([promise1, promise2, promise3])
.then((msg) => {
    console.log("Fastest resolved promise", msg)
})
.catch((err) => {"Fastest rejected promise", err} )