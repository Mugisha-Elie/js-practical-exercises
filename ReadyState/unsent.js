const xhr = new XMLHttpRequest();

console.log(`Current State: ${xhr.readyState}`)

const userQuery = document.getElementById("userInput");
const searchBtn = document.getElementById("searchBtn")

searchBtn.addEventListener("click", () => {
    if(userQuery.value.trim() === ""){
        alert("Type keywords in the search area to get results");
    }else{
        xhr.open("GET", `http://localhost:3000/${userQuery}`);
    }

    onOpenState();
    xhr.send();
    onSentState();

})

function onOpenState(){
    console.log("Current Ready State", xhr.readyState)

    if(xhr.readyState === 1){
        xhr.setRequestHeader("Accept", "application/json")
        xhr.timeout = 5000;
    }else{
        console.log("Wait what's wrong!!!, Something is wrong.");
    }
}

function onSentState(){
    console.log("Current Ready State", xhr.readyState);


    if(xhr.readyState === 2){
        console.log("Headers Recieved");
        const contentType = xhr.getResponseHeader("Content-Type");
        const contentLength = xhr.getResponseHeader("Content-Length");
        const status = xhr.status
        const statusText = xhr.statusText;

        if(status <= 200 && status > 300){
            console.log("There was an issue with the request", status, statusText)
        }else{
            console.log("The request went through")
            console.log({
                contentType,
                contentLength, 
                status, 
                statusText
            })
        }
    }else{
        console.log("Something is wrong on the ready state", xhr.readyState)
    }
}

