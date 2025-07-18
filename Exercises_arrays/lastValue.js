let array = [1,2,3,4,5,6,7,8,9];

console.log(array[-1]);
console.log(array[array.length-1]);
console.log(array.at(-1));

function genius(juice){
    console.log("array[-1]");
    return juice;
}
juice = "mango juice";

console.log(typeof genius(juice));