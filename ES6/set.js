const myArray = [1,2,3,4,5];
const mySet = new Set(myArray);


let obj = {name: "john"};

mySet.add(6);
mySet.add(obj);
mySet.add()
mySet.add([1,2,3]);
mySet.add(new Set([4,5,6]));
mySet.add(function name(){return "Hi"});

console.log(mySet);

console.log(mySet.has(6));
console.log(mySet.size);
console.log(mySet.keys())
console.log(mySet.entries());
console.log(mySet.values());

// mySet.clear();
console.log(mySet.size);
console.log(mySet.delete(obj));
console.log(mySet.size);

const iter = mySet.values();
let result = iter.next();

while(!result.done){
   console.log("Step: " + result.value);
   result = iter.next();
}


