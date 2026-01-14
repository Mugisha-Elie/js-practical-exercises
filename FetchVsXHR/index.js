const xhr = new XMLHttpRequest();

// xhr.open('GET', "https://jsonplaceholder.typicode.com/todos/1");
xhr.open('GET', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg',);

xhr.responseType = "blob";

xhr.send();


xhr.onload = () => {
    if(xhr.status != 200){
        console.log(`${xhr.status}: ${xhr.statusText}`);
    }else{
        console.log(`Done got ${xhr.response.length} bytes`);
        // console.log(xhr.response)
    }
}



xhr.onprogress = (event) => {
    if(event.lengthComputable){
        console.clear()
        let perc = Math.floor((event.loaded / event.total) * 100);
        console.log(`${perc}%`)
            if(perc > 50){
                xhr.abort();
                console.log("Request Aborted");
            }

    }else{
        console.log(`Recieved: ${event.loaded}`);
    }
}

xhr.onerror = () => {
    console.log("Request failed");
}



