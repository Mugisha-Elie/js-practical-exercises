self.onmessage = function(message){
    console.log("Worker: Message recieved from main script");
    
    const result = message.data * 2;

    if(isNaN(result)){
        self.postMessage("The sent number is invalid");
    }else{
        console.log("Worker: Posting message back to main script");
        self.postMessage(result);
    }
}