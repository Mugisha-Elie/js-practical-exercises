function counter(){
    let count = 0;
    

    return function increment(){
        count++;
        return count;
    };
    
}

let myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());