// function getCars(error=true){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(error){
//                 return reject("Cars Suck")
//             }
//             resolve(["bmw", "cadillac", "audi", "mclaren", "ford"]);
//         }, 1000)
//     })    
// }


// Method 1: .then() .catch()
// getCars()
// .then(data => console.log(data))
// .catch(error => console.log(error))








// Method 2: try/catch

// try{
    //     const cars = await getCars();
//     console.log(cars)
// }catch(error){
//     console.log(error)
// }


// Method 3: Mix and Match: 

// const cars = await getCars().catch((error) => error)
// console.log(cars)

const url1 = "https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json";
const url2 = "https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json";
const url3 = "https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json";
const url4 = "https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json";
const url5 = "https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json";
const url6 = "https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json";

const urls = [url1, url2, url3, url4, url5, url6];

async function fetchWithConcurrencyLimit(urls, limit){
    const results = [];
    try {
        if(limit > urls.length){
            throw new Error("Limit can't be more than the array of URLs");
        }

        while(urls.length > 0){
            const newUrls = urls.splice(0,limit)
            const response = await Promise.all(newUrls.map((url) => fetch(url)));
            results.push(response)
        }
    } catch (error) {
        console.log(error.message)
    }
    return results.flat()
}


const result = await fetchWithConcurrencyLimit(urls, 0);

console.log(result)




















