const url = "http://localhost:3000/users/3"

const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort, 5000);

// const newData = {
//     firstname: "Kharim",
//     lastname: "Ludovic",
//     email: "kavic@gmail.com",
//     gender: "female",
//     age: 60
// }


const updateData = {
    firstname: "Kennedy"
}

fetch(url, {
    method : "PUT",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(updateData),
    signal: controller.signal
})
.then(response => {
    clearTimeout(timeoutId);
    return response.json()
})
.then(data => console.log(data))
.catch(error => console.log("Error making request", error.message))


















// const xhr = new XMLHttpRequest();

// xhr.open("PUT", url, true);
// xhr.timeout = 5000;
// xhr.setRequestHeader("Content-Type", "application/json");

// xhr.addEventListener('load', () => {
//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         console.log("Updated (PUT) user successfull", data)
//     }else{
//         console.log("Server Error", xhr.status, xhr.statusText)
//     }
// })

// xhr.onerror = () => {
//     console.log("Request Error")
// }

// xhr.ontimeout = () => {
//     console.log("Request Timeout")
// }

// xhr.send(JSON.stringify(newData))

