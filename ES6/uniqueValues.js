

let user = {
    name: "Alice",
    _id: 12
}

user._id = 999;
console.log(user);

const pid = Symbol("id");

let user2 = {
    name: "Alice",
    [pid]: 12
}

console.log(user.id)