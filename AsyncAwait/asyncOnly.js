// async function generate(){
//     return new Date();
// }

// console.log(generate());
// generate().then(data => console.log(data))








// function generate(){
//     return Promise.resolve(new Date());
// }

// console.log(generate())
// generate().then(data => console.log(data));









// async function generate(){
//     return fetch("https://jsonplaceholder.typicode.com/todos/1")
// }

// console.log(generate());

// generate().then(data => {
//     const result = data.json();
//     console.log(result);
// }
// )

// generate().then(async data => {
//     const result = await data.json();
//     console.log(result);
// }
// )


// generate().then(data => data.json())
//           .then(result => console.log(result))











async function generate(){
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const result = await data.json();
    return result;
}

    const dataFetched = await generate();
    console.log(dataFetched);

// (async () => {
//     const dataFetched = await generate();
//     console.log(dataFetched);
// })()


console.log("1")
