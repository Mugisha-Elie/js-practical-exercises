const firstPromise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("First Promise resolved")
    }, 1000)
})


const secondPromise = firstPromise.then((message) => {
    console.log(message)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Second Promise resolved")
        }, 1000)
    })
})

const thirdPromise = secondPromise.then((msg) => {
    console.log(msg)
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve("Third Promise resolved")
        }, 1000)
    })
})

// thirdPromise.then(msg => console.log(msg))

const finalPromise = thirdPromise.then(msg => {
    console.log(msg)
    return new Promise(resolve => {
    setTimeout(()=>{
        resolve("Thank you!")
    }, 1000)
})
})



finalPromise.then(msg => {console.log(msg)})