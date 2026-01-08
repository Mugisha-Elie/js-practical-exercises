const controller = new AbortController();

const fetchToDo = async() => {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {signal: controller.signal});
        const todo = await response.json();
        console.log(todo)
    }catch(e){
        if(e.name === "AbortError"){
            console.log("Fetch Request Aborted");
        }else{
            console.log("Error Message: ", e);
        }
        
    }
}

fetchToDo();
controller.abort()


