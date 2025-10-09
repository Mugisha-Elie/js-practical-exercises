const newSet = new Set();

console.log(newSet.add(12).size);
newSet.add("Junior");

if(newSet.delete("Junior")){
    console.log("Delete Successfully");
}else{
    console.log("item not found")
}

console.log(newSet.has(12));
console.log(newSet.entries());
console.log(newSet.keys());
console.log(newSet.values());

console.log(typeof newSet)