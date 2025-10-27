Promise.any([promise1, promise2, promise3])
.then((msg) => {
    console.log("Fastest resolved promise", msg)
})
.catch((err) => {"Fastest rejected promise", err} )