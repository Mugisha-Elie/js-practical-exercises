let john = {name: "John Doe"},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'},
    james = {name: "James Hunt"}

let userRoles = new Map([
    [john, 'admin'],
    [lily, 'editor'],
    [peter, 'subscriber']
]);

console.log(typeof userRoles)
console.log(userRoles instanceof Map)
console.log(userRoles)

// console.log(userRoles.clear())

console.log(userRoles.get(john))
console.log(userRoles.has(james))
console.log(userRoles.size);

for(const user of userRoles.keys()){
    console.log(user.name)
}

for(const user of userRoles.values()){
    console.log(user)
}

userRoles.forEach((role, user) => console.log(`${user.name}: ${role}`))

const keys = [...userRoles.keys()];
// const keys = userRoles.keys();
console.log(keys);
// console.log(userRoles.set(john, 'admin').set(lily, 'editor').set(peter, 'subscriber'));

console.log(userRoles.delete(john))