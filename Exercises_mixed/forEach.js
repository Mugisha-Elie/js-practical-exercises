const array = ["agile", "beans", "cucumber"];

array.forEach((element) => console.log(element));

array.forEach((element) => console.log(element.toLocaleUpperCase()));
console.log(array);

let arg = "world";
array.forEach((element)=>{console.log(element +" "+ arg)}, arg);

let fruit;
array.forEach((element) => {
    if(element === "cucumber"){
        fruit = element;
    }
});
console.log(fruit);