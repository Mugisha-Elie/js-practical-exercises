const message = new Promise((resolve, reject) => {
    setTimeout(()=>{
        resolve("Message resolved after 2 seconds")
    }, 2000)
})

message.then((msg) => {console.log(msg)});