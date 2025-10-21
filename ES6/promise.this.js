function wait(ms){
    return new Promise(function(resolve){
        console.log(this)
        resolve()
    })
}

wait(2000).then(info => {
    console.log(info)
})