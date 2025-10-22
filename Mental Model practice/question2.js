const url = "https://jsonplaceholder.typicode.com/todos/1"

async function getTodo(){
    const response = await fetch(url)
    const todo = await response.json()
    return todo;
}

const obj = await getTodo();
console.log(obj)

