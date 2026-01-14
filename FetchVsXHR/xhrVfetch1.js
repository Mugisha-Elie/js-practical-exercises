const xhr = new XMLHttpRequest();

xhr.onreadystatechange = () => {
    if(xhr.readyState === 1){
        console.log("Connection opened")
    }else if(xhr.readyState === 2){
        console.log('Headers recieved');
        console.log(xhr.getAllResponseHeaders());
    }else if(xhr.readyState === 3){
        console.log("Downloading data")
    }else if(xhr.readyState === 4){
        console.log("Success");
    }
}

xhr.open('GET', 'https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg');

xhr.send();

xhr.onerror = () => {
    console.log("Request failed");
}



// async function getData(){
//     return await fetch('https://upload.wikimedia.org/wikipedia/commons/3/3d/LARGE_elevation.jpg');
// }

// getData().then(response => console.log(response))