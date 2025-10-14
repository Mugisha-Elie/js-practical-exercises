function* loop(){
    for(let i=0; i<3; i++){
        yield i;
    }
}

const loopHandler = loop();

console.log(loopHandler.next().value);
console.log(loopHandler.next().value);
console.log(loopHandler.next().value);
console.log(loopHandler.next());