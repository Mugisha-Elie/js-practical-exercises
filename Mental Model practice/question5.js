function *rangeGenerator(start, stop){
    for(let i=start; i<=stop; i++){
        yield i;
    }
}

const gen = rangeGenerator(3, 6);
console.log([...gen])