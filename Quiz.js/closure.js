// function counter(){
//     let count = 0;
    

//     return function increment(){
//         count++;
//         return count;
//     };
    
// }

// let myCounter = counter();
// console.log(myCounter());
// console.log(myCounter());
// console.log(myCounter());


function counter(){
    let count = 0; 
return function(){
    count++;
    return count;
};


}

let countingFunc = counter();


console.log(countingFunc());
console.log(countingFunc());
console.log(countingFunc());





