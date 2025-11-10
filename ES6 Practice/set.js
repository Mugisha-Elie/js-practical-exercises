let values = [1,2,3,4,5,6,7,7,8,9,9]
const setObject = new Set(values)
console.log(setObject)

console.log(setObject.delete(4));
console.log(setObject.size)
console.log(setObject.entries())
console.log(setObject.keys())
console.log(setObject.values())

// console.log(setObject.iterator)

const weakS = new WeakSet();

let john = {name: "John Doe"},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'},
    james = {name: "James Hunt"}

weakS.add(john).add(lily)

console.log(weakS);
console.log(weakS.has(john))

let obj = {
    name: "John",
    gender: "male",
    age: 12,

    getAge: function(){
        return this.age
    }
}

console.log(Object.entries(obj))