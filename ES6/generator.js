function *numberSequence(){
    yield 1;
    yield 2;
    yield "Final value";
    return 3;
}

const iterate = numberSequence();

console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
console.log(iterate.next().value);
// console.log(iterate.next().value);