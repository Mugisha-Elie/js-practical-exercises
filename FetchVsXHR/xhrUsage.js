const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/accounts");

xhr.onload = () => {
    console.log(xhr.response)
}

xhr.send()