function range(start, stop){
    let arr = [];
    for(let i=start; i<stop; i++){
        arr.push(i);
    }
    return arr;
}

console.log(range(1,11));