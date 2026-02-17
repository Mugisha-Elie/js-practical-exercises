// function getUsers(url){
//     return fetch(url);
// }

// getUsers("http://localhost:3000/userss")
// .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP Error ${response.status} ${response.statusText}`)
//     }

//     return response.json();
// })
// .then(result => console.log(result))
// .catch(error => console.log("An error occured:", error.message))













const controller = new AbortController();
const signal = controller.signal;
const timeoutId = setTimeout(() => controller.abort(), 3000)

function
