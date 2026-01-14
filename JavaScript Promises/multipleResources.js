async function fetchResources(url){
    return await fetch(url)
                    .then(response => response.json())
                    .catch(error => {throw new Error("Error fetching resources")})
}

// fulfills when all the promises resolve and reject if one of them is not fulfilled

// Promise.all([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json"), 

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log(error))












// fulfills when all the promises settle

// Promise.allSettled([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json"), 

//     fetchResources("https://gistgithubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log(error))











// fulfills when any of the promises fulfils rejects when all promises are not fulfilled

// Promise.any([
//    fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json"), 

    // fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json"),

    // fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log("Error fetching resources"))








// fulfills with the evential state of the first promise to settle

// Promise.race([
//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json"), 

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json"),

//     fetchResources("https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json")
// ])
// .then(values => console.log(values))
// .catch(error => console.log(error))


const {promise, resolve, reject} = Promise.withResolvers()

setTimeout(() => {
    resolve(20);
}, 1000)

promise.then((data) => console.log(data))