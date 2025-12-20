async function fetchResources(url){
    return await fetch(url)
                    .then(response => response.json())
                    .catch(error => {throw new Error("Error fetching resources")})
}

// fulfills when all the promises resolve and reject if one of them is not fulfilled

Promise.all([
    fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/74e16b33711d25b0dc066a35f2d01b872e1641a6/gistfile1.json"), 

    fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/aa2168509cfefe24050e14c5346e6891/raw/f5c93849fa7b0666dd28393964ca7a2b66054daa/gistfile2.json"),

    fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/a71e7ec580c5f7e4be6bd703b2b4e0a9/raw/ff08a512c80d29ffb0c1f72e61a11c45b7465fa1/gistfile3.json")
])
.then(values => console.log(values))
.catch(error => console.log("Error fetching resources"))












// fulfills when all the promises settle

// Promise.allSettled([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/74e16b33711d25b0dc066a35f2d01b872e1641a6/gistfile1.json"), 

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/aa2168509cfefe24050e14c5346e6891/raw/f5c93849fa7b0666dd28393964ca7a2b66054daa/gistfile2.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Eli/a71e7ec580c5f7e4be6bd703b2b4e0a9/raw/ff08a512c80d29ffb0c1f72e61a11c45b7465fa1/gistfile3.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log("Error fetching resources"))











// fulfills when any of the promises fulfils rejects when all promises are not fulfilled

// Promise.any([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/74e16b33711d25b0dc066a35f2d01b872e1641a6/gistfile1.json"), 

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/aa2168509cfefe24050e14c5346e6891/raw/f5c93849fa7b0666dd28393964ca7a2b66054daa/gistfile2.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/a71e7ec580c5f7e4be6bd703b2b4e0a9/raw/ff08a512c80d29ffb0c1f72e61a11c45b7465fa1/gistfile3.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log("Error fetching resources"))








// fulfills with the evential state of the first promise to settle

// Promise.race([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/74e16b33711d25b0dc066a35f2d01b872e1641a6/gistfile1.json"), 

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/aa2168509cfefe24050e14c5346e6891/raw/f5c93849fa7b0666dd28393964ca7a2b66054daa/gistfile2.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/a71e7ec580c5f7e4be6bd703b2b4e0a9/raw/ff08a512c80d29ffb0c1f72e61a11c45b7465fa1/gistfile3.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log("Error fetching resources"))