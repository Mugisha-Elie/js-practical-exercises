function findUniq(arr) {
    let result = [];
    arr.forEach((elem, index, arr) => {
        if(elem !== arr[index-1] && elem !== arr[index+1]){
            result.push(elem);
        }
    });
    
    //result.forEach(num);
    return result;
}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]));
console.log(findUniq([1, 0, 0]));
console.log(findUniq([0, 1, 0]));
console.log(findUniq([0, 0, 1]));

