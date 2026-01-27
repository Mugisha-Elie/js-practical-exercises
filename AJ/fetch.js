const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

console.log(fetchPromise)

// fetchPromise.then(response => {
//     console.log(`Recieved a response ${response.status}`)
//     console.log(response);
//     return response.json();
// })
// .then((data) => {
//     console.log(data);
//     console.log(data[0]);
//     console.log(data[0].name)
// })

// fetchPromise
// .then(response => response.json())
// .then(data => console.log(data[0].name))

// fetchPromise
// .then(response => {
//     if(!response.ok){
//         throw new Error(`HTTP Error ${response.status} ${response.statusText}`)
//     }

//     return response.json();
// })
// .then(data => console.log(data[0].name));

fetchPromise
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP Error ${response.status} ${response.statusText}`)
    }

    return response.json();
})
.then(data => console.log(data[0].name))
.catch(error => console.log("Error getting products", error))


console.log("Started Request")