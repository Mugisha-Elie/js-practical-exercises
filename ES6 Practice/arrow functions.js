const numbers = [4, 2, 6];

numbers.sort((a, b) => b - a);

// console.log(numbers)

const names = ["John", "Mac", "Peter"]
let lengths = names.map(name => name.length);
// console.log(lengths);

let setColor = function(color){
    return {value: color};
} 

let backgroundColor = setColor('Red');
console.log(backgroundColor.value)