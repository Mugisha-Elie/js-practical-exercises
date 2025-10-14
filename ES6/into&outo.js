function* display(){
    yield 2
    const response = yield;
    console.log(`Your response is "${response}"!`);
}

const iterator = display();

console.log(iterator.next());
iterator.next();
iterator.next("Response");//The value passed to the next() will be used as the result of the yield expression where the generator was last paused

// console.log(iterator.next("James"));
