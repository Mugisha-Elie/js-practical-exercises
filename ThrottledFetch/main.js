const url1 = "https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json";
const url2 = "https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json";
const url3 = "https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json";
const url4 = "https://gist.githubusercontent.com/Mugisha-Elie/1c705164294b8b4ce5bc36978b70d68e/raw/c830afc6ce4f51a08ca6d4336838a7af3b528f09/gistfile03.json";
const url5 = "https://gist.githubusercontent.com/Mugisha-Elie/d7a8b0bd6c355a5137bd71d813c339de/raw/7657d9707f92632632cf81e0ddacd076de8f7610/gistfile02.json";
const url6 = "https://gist.githubusercontent.com/Mugisha-Elie/bc0e3b62796ebced7255f0340c98587c/raw/347b0daeb3a5f6e7a3b819e11daca2c8867ac915/gitsfile01.json";

const urls = [url1, url2, url3, url4, url5, url6];


async function throttledFetch(urls, limit){
    const results = new Array(urls.length)
    const queue = urls.entries();

    async function worker(){
        for(const [index, url] of queue){
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP Error ${response.status} ${response.statusText}`);
                }

                results[index] = await response.json();
            }catch(error){
                results[index] = {error: error.message}; 
            }
        }
    }

    const workers = [];
    for(let i=0; i<limit; i++){
        workers.push(worker())
    }

    await Promise.all(workers);

    return results
}

throttledFetch(urls, 3)
.then(result => console.log(result))