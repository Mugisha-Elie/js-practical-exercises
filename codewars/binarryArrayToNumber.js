function binaryArrayToNumber(arr){
let num = arr.join("");
return parseInt(num, 2);
}

const test = [1, 0, 1, 0];

console.log(binaryArrayToNumber(test));




