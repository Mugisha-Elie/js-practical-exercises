// function* generateSequence(){
//     yield 1;
//     yield 2;
//     return 3;
// }

// let generator = generateSequence()

// for(let value of generator){
//     console.log(value)
// }


// // const generator = generateSequence();
// // console.log(generator.next());
// // console.log(generator.next())
// // console.log(generator.next())
// // // console.log(generator.next())


async function* getData(){
    yield await fetch("https://jsonplaceholder.typicode.com/todos/1")
}

const data = await getData().next();

console.log(await data.value.json());