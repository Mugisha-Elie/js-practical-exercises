function createCounter() {
    let counter = 0;
    function counterFn(){
        counter++;
        return counter;
    }
    return counterFn;
    
}

const count = createCounter();

count();
count();
console.log(count());