function delayMessage(message, delay){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            resolve(message)
        }, delay)
    })
}

function executeSequentially(){
    return delayMessage()
    .then()
}

