// const sym1 = Symbol('id');
// const sym2 = Symbol('id');

// console.log(sym1 === sym2);
// console.log(sym1);
// console.log(typeof sym1);

const user = {
    name: "James"
}

const id = Symbol('id'); //The description is optional
const id2 = Symbol('id');
user[id] = 12345;

user["id"] = "External Id";

console.log(user);
console.log(user[id]);

console.log(user.id);
console.log(typeof id);

console.log(id === id2);

//console.log(id + " String"); // Type Error
console.log("Symbol: " + id.toString());

