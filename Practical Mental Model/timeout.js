const controller = new AbortController();
const signal = controller.signal;
const timeoutID = setTimeout(() => controller.abort(), 2000);

function getData(url){
    return fetch(url, {signal});
}

getData("https://jsonplaceholder.typicode.com/users")
.then(response => {
    clearTimeout(timeoutID);

    if(!response.ok){
        throw new Error(`HTTP Error ${response.status} ${response.statusText}`);
    }

    return response.json();
})
.then(data => console.log(data))
.catch(error => {
    if(error === "AbortError"){
        console.log("Request Timeout, try again!");
    }else{
        console.log("An error occured:", error.message);
    }
});