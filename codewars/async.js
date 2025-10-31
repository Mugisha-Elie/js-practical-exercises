const url = "https://jsonplaceholder.typicode.com/todos/1";

async function fetchh(url){
    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Error fetching data from data check link and try again");
        }else{
            return response.json()
        }
    }catch(error){
        return `Error fetching data: ${error.message}`
    }
}

const fetchResults = await fetchh(url)
console.log(fetchResults)