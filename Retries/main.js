const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function fetchWithRetries(url, maxAttempts){
    for(let attempts = 0; attempts <= maxAttempts; attempts++){
        try{
            const response = await fetch(url);

            if(!response.ok){
                throw new Error("HTTP Error", response.status, response.statusText);
            }

            return await response.json()
        }catch(error){
            const isLastAttempt = attempts === maxAttempts;

            if(isLastAttempt){
                console.log("Last attempts failed, try again later");
                throw error;
            }

            console.log(`Attempts ${attempts + 1} failed`);

            const delay = 500 * Math.pow(2, attempts)

            await sleep(delay);
        }
    }
}


fetchWithRetries("http://localhost:3000/users", 3)
.then(result => console.log(result))
.catch(error => console.log("Error making request: ", error.message))