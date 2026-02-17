const xhr = new XMLHttpRequest(); // readystate 0 UNSENT

xhr.open("GET", "http://localhost:3000/users"); // readystate 1 OPENED
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {   // readstate 4 DONE
    if(xhr.status >= 200 && xhr.status < 300){
        const data = xhr.response;
        console.log(data);
    }else{
        console.log("HTTP Error", xhr.status, xhr.statusText);
    }
}

xhr.onerror = () => {
    console.log("A network error occurred");
}

xhr.send(); // readystate 2 HEADERS_RECIEVED after this readystate 3 LOADING also fires if the body starts loading


