// localStorage.setItem("movie", "The Longest Ride");

// console.log(localStorage.getItem("movie"));

// localStorage.setItem("song", "Bliss - Tyla");
// console.log(localStorage.key(0))
// console.log(localStorage.key(1))

// // for(let key in localStorage){
// //     console.log(localStorage.getItem(key))
// // }

// localStorage.removeItem("movie");

// if("movie" in localStorage){
//     console.log("Movie is in storage");
// }else{
//     console.log("Movie is not in storage");
// }

// localStorage.clear();
// let results = [];
// for (let key in localStorage){
//     results.push(key);
// }
// if(results.length === 0){
//     console.log("(:");
// }else{
//     console.log("):");
//     console.log(results);
// }

// if(localStorage.length === 0){
//     console.log("(:");

// }else{
//     console.log("):");
//     console.log(localStorage)
// }

// let user = {name: "John", age: 30};
// localStorage.setItem("user", JSON.stringify(user));

// const retrieved = localStorage.getItem("user");

// if(retrieved){
//     var loaded = JSON.parse(retrieved);
// }
// console.log(retrieved);
// console.log(loaded.name);
// console.log(loaded.age);

let obj = {
    name: "John",
    age: 30,
    language: "JavaScript", 
}
localStorage.clear();
localStorage.setItem("user", JSON.stringify(obj));

let retrieved = localStorage.getItem("user");
console.log(retrieved);

let loaded = JSON.parse(retrieved);
console.log(loaded);

for(let key in loaded){
    console.log(`${key} : ${loaded[key]}`);
}

let arr = ["chips", "rice", "beans"];
localStorage.setItem("food", JSON.stringify(arr));

let retrievedFood = localStorage.getItem("food"); 

let retrievedArray = JSON.parse(retrievedFood);
console.log(retrievedArray[1]);


console.log(retrievedArray.includes("beans"));

