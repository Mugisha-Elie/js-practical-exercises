function nextBigger(n){
    let numArray = n.toString().split("");
    if(numArray.length === 2){
        let y = numArray[numArray.length - 2]
        let x = numArray.at(-1)
        return x, y
    }
    
}

console.log(nextBigger(12))
console.log(nextBigger(10))