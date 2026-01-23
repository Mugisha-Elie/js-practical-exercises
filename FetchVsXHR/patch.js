const url = "http://localhost:3000/users/1";

const newUpdate = {
    age : 50
}

// fetch(url, {
//     method: "PATCH",
//     headers: { "Content-Type" : "application/json" },
//     body: JSON.stringify(newUpdate)
// })
// .then(response => response.json())
// .then(data => console.log("REquest Successful", data))
// .catch(error => console.log("Request Error", error.message))

const xhr = new XMLHttpRequest()

xhr.open("PATCH", url);
xhr.responseType = "json"
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onload = () => {
    const data = JSON.parse(xhr.response);
    console.log("Request Successfulll", data);
}

xhr.onerror = () => {
    console.log("Request Errorr")
}

xhr.send(JSON.stringify(newUpdate))