const myWorker = new Worker('doublingWorker.js');
const number = document.getElementById("number");
const button = document.getElementById("sendNumber");

button.addEventListener("click", () => {
    const value = Number(number.value);
    console.log(`Sending the number`, value, `to myWorker`);
    myWorker.postMessage(value);
    myWorker.onmessage = function(message){
        console.log("Main: Message recieved from worker");
        console.log("Result: ", message.data);
    }
})


