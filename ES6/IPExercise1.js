let arr = [1,2,3,4,5,6];

let arrIterator = arr[Symbol.iterator]();
let result = arrIterator.next();

while(!result.done){
    console.log(`Value: ${result.value}`);
    result = arrIterator.next();
    console.log(`Done: ${result.done}`);
}