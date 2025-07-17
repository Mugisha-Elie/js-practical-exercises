function range(start, end, step=3){
    let newArray = [];
    for(let i=start; i<end; i+=step){
        newArray.push(i);
    }
    return newArray;
}

console.log(range(2,7));