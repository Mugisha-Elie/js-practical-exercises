
function declareGlobal(){
    myGlobal = "Global";
}
declareGlobal();
console.log(myGlobal);

console.log(globalThis.myGlobal);

function checkThis(){
    console.log(this);
}

checkThis();

// const pi = 3.14;
// pi = 3.147;

const arr = [];
arr.push(1);

console.log(arr);

// arr = [1];

let key = "10" - "2o";

console.log(key);