function findUniq(arr) {
    let obj = {};
    for(let element of arr){
        if(obj[element]){
            obj[element] += 1;
        }else{
            obj[element] = 1;
        }
    }
    return Number(arr.filter(el => 
        obj[el] === 1
    ).join(""));
}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));

