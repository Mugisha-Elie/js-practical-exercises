const url = "https://jsonplaceholder.typicode.com/todos/1";

function fetchh(url){
    return new Promise((res, rej) => {
        const response = fetch(url)
        if(response.ok){
            res(response.json())
        }else{
            rej(new Error("Something went wrong"))
        }
    })
}

fetchh(url)
.then(response => {
    console.log(response)
}).catch(error => {
    console.log(error.message)
})



