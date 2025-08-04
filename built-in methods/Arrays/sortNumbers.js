let arr = [10,20,25, 100, 40];

console.log(arr.sort());

console.log(arr);

console.log(arr.sort((a,b) => a-b));

let a = ["JS", "HTML", "CSS"];
console.log(a);
console.log(a.sort());

console.log(a.sort((x, y) => x.localeCompare(y)))