// fetch("http://localhost:3000/posts")
//     .then(res => res.json())
//     .then(data => console.log(data));
//     .catch(error => console.log("Error sending Request", error))



const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/posts/")


xhr.send();
xhr.responseType = 'json'

xhr.onload = () => {
    if(xhr.status === 200){
        console.log(xhr.response);
    }else{
        console.error("Bad Request")
    }
}

xhr.onerror = () => {
    console.log("Error Sending Request");
}