let arr = [10, 20, 30];
console.log(arr.length);

arr.push(40);
console.log(arr);

let popped = arr.pop();
console.log("Popped "+popped, arr);

arr.unshift(5);
console.log(arr);

let shifted = arr.shift();
console.log("Shifted "+shifted, arr); 