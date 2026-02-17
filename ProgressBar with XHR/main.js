// const xhr = new XMLHttpRequest();

// // xhr.open("GET", "https:httpbin.org/delay/5")
// // xhr.open("GET", "https://httpbin.org/stream/20");
// xhr.open("GET", "https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg");

// xhr.responseType = "blob"
// xhr.send()

// xhr.onload = () => {

//     if(xhr.status <= 200 && xhr.status > 300){
//         console.log(`HTTP Error ${xhr.status} ${xhr.statusText}`)
//     }else{
//         // const response = JSON.parse(xhr.response);
//         const response = xhr.response
//         const imageURL = URL.createObjectURL(response)
//         console.log(response);
//         // console.log(imageURL)
//         document.getElementById("image").classList.add(`bg-[url('${imageURL}')]`)
            // imageURL.remove()
//     }

// }

// xhr.onerror = (event) => {
//     console.log("An error occured", event.target.status, event.target.statusText)
// }

// xhr.onprogress = (event) => {
//     if(event.lengthComputable){
//         const percentComplete = (event.loaded / event.total) * 100;
//         document.getElementById("progress-bar").style.width = `${percentComplete}%`
//         console.log(`Completed ${percentComplete}%`)
//     }else{
//         console.log("Size unknown");
//     }
// }




// fetch("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg")
// .then(response => {
//     if(!response.ok){
//         throw new Error("HTTP Error", response.status, response.statusText);
//     }

//     return response.blob();
// })
// .then(data => {
//     const imageUrl = URL.createObjectURL(data);
//     document.getElementById("image").classList.add(`bg-[url('${imageUrl}')]`)
        // imageURL.remove()
// })
// .catch(error => {
//     console.log("An error occured", error);
// });



// async function fetchWitProgress(url){
//     const response = await fetch(url);

//     const contentLength = response.headers.get("Content-Length");
//     const totalBytes = parseInt(contentLength, 10);

//     let loadedBytes = 0;

//     const chunks = [];

//     const reader = response.body.getReader();

//     let percent = 0;

//     while(true){
//         const { done, value } = await reader.read();

//         if(done) break;

//         chunks.push(value);

//         loadedBytes += value.byteLength;
//         percent = (loadedBytes / totalBytes) * 100;
//         console.log(`Fetch Progress ${percent.toFixed(2)}`);
//         document.getElementById("progress-bar").style.width = `${percent}%`

        
        
        
//     }
    
//     const responseOutput = new Blob(chunks, {type: response.headers.get("content-type")});
//     const imageURL = URL.createObjectURL(responseOutput);
    
    
//     if(percent === 100){
//         document.getElementById("image").classList.add(`bg-[url('${imageURL}')]`)
            // imageURL.remove()
//     }




// }






async function fetchWitProgress(url){
    const response = await fetch(url);

    const contentLength = response.headers.get("Content-Length");
    const totalBytes = parseInt(contentLength, 10);

    let loadedBytes = 0;
    const chunks = [];

    const reader = response.body.getReader();

    let percent = 0;

    while(true){
        const {done, value} = await reader.read();

        if(done) break;

        chunks.push(value);

        loadedBytes += value.byteLength;
        percent = (loadedBytes / totalBytes) * 100;

        document.getElementById("progress-bar").style.width = `${percent}%`;
    }

    const responseOutput = new Blob(chunks, {type: response.headers.get("Content-Type")});
    const imageURL = URL.createObjectURL(responseOutput);
    document.getElementById("image").classList.add(`bg-[url('${imageURL}')]`)
    imageURL.remove();
}

fetchWitProgress("https://upload.wikimedia.org/wikipedia/commons/b/b4/JPEG_example_JPG_RIP_100.jpg")







const xhr = new XMLHttpRequest()

xhr.open("POST", "/users");

xhr.setRequestHeader("Content-Type", "application/json");

xhr.send(JSON.stringify({firstname: "John"}));


fetch("/users", {
    method: "POST",
    headers: {"Content-Type": "appliation/json"},
    body: JSON.stringify({firstname: "John"})
})
