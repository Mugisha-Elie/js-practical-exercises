const url1 = "https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json";
const url2 = "https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json";
const url3 = "https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json";

Promise.any([
    fetch(url1), 
    fetch(url2), 
    fetch(url3)
])
.then(response => response.json())
.then(data => {
    const name = data["user-details"].name
    console.log(`Hello, ${name}`);
})
.catch(error => console.log("An error occurred: ", error.message))
