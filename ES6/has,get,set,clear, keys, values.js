const newMap = new Map();

newMap.set("name", "John");
newMap.set("age", 12);
newMap.set({}, "obj");

console.log(newMap.set("gender", "male"));

// console.log(newMap.clear());
// console.log(newMap.size);

console.log(newMap.entries());
console.log(newMap.values());
console.log(newMap.keys());

console.log(newMap.has("name"));

console.log(newMap.get("name"));

console.log(newMap.delete("name"));