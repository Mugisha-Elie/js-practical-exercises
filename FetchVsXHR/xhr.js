const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/3');

xhr.send();

xhr.onload = () => {
    if(xhr.status != 200){
        console.log(`${xhr.status}: ${xhr.statusText}`);
    }else{
        console.log(xhr.response);
    }
}

xhr.onerror = () => {
    console.log("Request failed");
}


// fetch("https://jsonplaceholder.typicode.com/todos/3")
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log("Error Fetching data: ", error))