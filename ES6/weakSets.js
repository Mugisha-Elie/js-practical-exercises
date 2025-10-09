const obj = {name: "James"};
const obj2 = {age: 12};

const newSet = new WeakSet([obj, obj2]);

console.log(newSet);

if(newSet.has(obj)){
    console.log(`Of course we have: ${obj.name} and ${obj2.age}`)
}