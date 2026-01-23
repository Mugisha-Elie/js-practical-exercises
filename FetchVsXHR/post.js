const url = "http://localhost:3000/users";

const newData = {
    firstname: "James",
    lastname: "Deacon",
    email: "deacon@gmail.com",
    gender: "male",
    age: 4
}

const xhr = new XMLHttpRequest();

xhr.open("POST", url, true);

xhr.setRequestHeader("Content-Type", "application/json")
xhr.timeout = 5000;

xhr.onload = () => {
    if(xhr.status >= 200 && xhr.status < 300){
        try{
            const responseData = JSON.parse(xhr.response);
            console.log("Upload Successfull",responseData)
        }catch(error){
            console.log("Data sent but the server response was not in json format")
        }
    }else{
        console.log(`Response Error ${xhr.status}, ${xhr.statusText}`)
    }
}

xhr.onerror = () => {
    console.log("Network Error: Error reaching the server");
}

xhr.ontimeout = () => {
    console.log("Request Timeout");
}

xhr.send(JSON.stringify(newData));












// const newUser = {
//     firstname: "Lewis",
//     lastname: "Ham",
//     email: "lewis@gmail.com",
//     gender: "male",
//     age: 43
// }

// async function createUser(){
//     try{
//         const response = await fetch(url, {
//             method: 'POST',
//             headers: {"Content-Type":"application/json"},
//             body: JSON.stringify(newUser)
//         })

//         if(!response.ok){
//             throw new Error("Request Error", response.status, response.statusText);
//         }

//         const data = await response.json();
//         console.log("User created", data)
//     }catch(error){
//         console.log("Error making Request to the server")
//     }
// }

// createUser()
