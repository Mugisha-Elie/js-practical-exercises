const url = "http://localhost:3000/users";

const xhr = new XMLHttpRequest();


xhr.open("GET", url);
xhr.timeout = 5000;
xhr.responseType = "json";

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        console.log("Request Success");
        console.log(xhr.response);
    }else{
        console.log(`HTTP Error: ${xhr.status}, ${xhr.statusText}`);
    }
}

xhr.onerror = () => {
    console.log("Network Error: Error Reaching the server");
}

xhr.ontimeout = () => {
    console.log("Request Timeout");
}

xhr.send();





// const controller = new AbortController();
// const timeoutId = setTimeout(() => controller.abort(), 5000)

// fetch(url, {
//     methods: "GET",
//     signal: controller.signal
// })
// .then(response => {
//     clearTimeout(timeoutId);

//     if(!response.ok){
//         throw new Error(`HTTP Error: ${response.status}, ${response.statusText}`)
//     }

//     return response.json()
// })
// .then(data => {
//     console.log("REquest Success");
//     console.log(data)
// })
// .catch(error => {
//     if(error.name === "AbortError"){
//         console.log("Request Timeout");
//     }else{
//         console.log("Error: Failed to reach the server");
//     }
// })