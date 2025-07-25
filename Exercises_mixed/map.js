const numbers = [1, 2, 3];
const doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2); // Creating a new array
}
console.log(doubledNumbers); // [2, 4, 6]


let doubledNumber = numbers.map((number) => number * 2);
console.log(doubledNumber);

let person = {
    name: "Junior",
    age: 30,
    greet: (this.name)(),
};

person.greet