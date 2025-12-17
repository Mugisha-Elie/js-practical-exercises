const promis = new Promise((resolved, rejected) => {
    // resolved("Hi")
    rejected("Bye")
})

promis.then((data) => console.log(data)).catch((error) => console.log(error))