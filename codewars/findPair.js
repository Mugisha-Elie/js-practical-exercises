function hasPair(A, sum){
    let pair = A.find(x => A.includes(sum - x))
    return pair ? true : false
}

console.log(hasPair([1,5,6,9,10,14,16,20,27,30],3))