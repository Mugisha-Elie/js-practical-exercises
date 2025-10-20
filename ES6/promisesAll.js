const promise1 = new Promise((resolve, rejected) => {
    setTimeout(()=>{
        resolve("Promise 1 resolved")
    }, 1000)
})

const promise2 = new Promise((resolve, rejected) => {
    setTimeout(()=>{
        resolve("Promise 2 resolved")
        // rejected("Promise 2 rejected")
    }, 2000)
})

const promise3 = new Promise((resolve, rejected) => {
    setTimeout(()=>{
        resolve("Promise 3 resolved")
    }, 3000)
})

Promise.all([promise1, promise2, promise3])
.then((msgs) => {
    console.log("All promises results are here:")
    msgs.forEach((message, index) => {
        console.log(`Promise ${index+1} was resoved with message: ${message} `)
    })
})
.catch((error) => {
    console.log("One of the promises was rejected: ", error)
})