function* generator(){
    yield "Potato";
}

const iterator = generator();

console.log(iterator) // {Generator object}
console.log(iterator.next()); // { value: 'Potato', done: false}
console.log(iterator.next()); // { value: undefined, done: true}