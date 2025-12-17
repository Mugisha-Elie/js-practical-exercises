function mathChain(num){
    let newNum = num * 2
    return new Promise(res => {
        res(newNum)
    })
}

mathChain(5)
    .then(num => num + 10)
    .then(num => num * 3)
    .then(num => console.log(num))