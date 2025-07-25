const numbers = [1, 2, 3, 4, 5];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) { // If condition to select
//     evenNumbers.push(numbers[i]);
//   }
// }
//console.log(evenNumbers); // [2, 4]

const evenNumbers = numbers.filter((number)=>number%2===0);
console.log(evenNumbers);

let array = [1,2,3,5,6,9];
let even = numbers.filter(function(number){
    return array.includes(number);
}, array);

console.log(even);