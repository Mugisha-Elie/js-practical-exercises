// // function getData(url, callback){
// //     const xhr = new XMLHttpRequest();
// //     xhr.open("GET", url);

// //     xhr.onload = () => {
// //         if(xhr.status >= 200 && xhr.status < 300){
// //             const data = JSON.parse(xhr.responseText);

// //             callback(null, data);
// //         }else{
// //             callback(`Server Error: ${xhr.status} ${xhr.statusText}`, null);
// //         }
// //     }

// //     xhr.onerror = () => {
// //         callback("Network Error", null)
// //     }

// //     xhr.send();

// // }


// // getData("http://localhost:3000/users", (error, user) => {
// //     if(error){
// //         console.log("Operation failed", error);
// //         return;
// //     }

// //     console.log("User recieved", user.firstname, user.lastname, user.gender, user.age);
// // })


// function getData(){
//     console.log("Data");
// }


// setTimeout(getData, 2000);











function tossCoin(){
    return new Promise((resolve, reject) => {
        const outcome = Math.random()
        if(outcome > 0.5){
            resolve("Heads")
        }else{
            reject("Tails")
        }
    })
}

tossCoin()
.then(outcome => console.log(outcome))
.catch(error => console.log(error))




const ids = [1, 2, 3, 5];

ids.forEach(async (id) => {
    const user = await fetch(id);
    console.log(user);
})

console.log("all done");