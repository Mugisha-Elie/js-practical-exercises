async function getData(){
    return "data"
}

console.log(getData()); // Promise { 'data' }

getData()
.then(data => console.log(data))