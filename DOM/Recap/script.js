let timeDisplay = document.querySelector("#timer-display");
let addBtn = document.getElementById("add");
let reduceBtn = document.getElementById("reduce");
let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let pauseButton = document.getElementById("pause-button");
let playButton = document.getElementById("play-button")


addBtn.dataset.id = 0
reduceBtn.dataset.id = 1;
startButton.dataset.id = 2;
stopButton.dataset.id = 3;
playButton.dataset.id = 4;
pauseButton.dataset.id = 5


let intervalId = null;
let isPaused = false;
let initialTime = 0;
let remainingTime = 0;


function countDown(){
    remainingTime--;
    updateDisplay(remainingTime);

    if(remainingTime <= 0){
        clearInterval(intervalId);
        intervalId = null;
        initialTime = 0;
        updateDisplay(0);
        showMessage("Time's up!");
        startButton.disabled = false;
        pauseButton.disabled = true;
        playButton.disabled = true;
        stopButton.disabled = true;
        addBtn.disabled = false;
        reduceBtn.disabled = false;
        
    }
}

function showMessage(message){
    if(!("Notification" in window)){
        alert("Error sending notification")
    }else if(Notification.permission === "granted"){
        const notification = new Notification(message)
    }else if (Notification.permission !== "denied"){
        Notification.requestPermission().then((permission) => {
            if(permission === "granted"){
                const notification = new Notification(message)
            }
        });
    }
}


function updateDisplay(time){
    timeDisplay.value = time;
}



addBtn.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;
    if(id === "0"){
        initialTime++;
        updateDisplay(initialTime);
    }
});

reduceBtn.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;
    if(id === "1"){
        if(initialTime > 0){
            initialTime--;
        }
        
        updateDisplay(initialTime);
    }
})

startButton.addEventListener("click", (event) => {
    let id = event.target.dataset.id;
    if(id === "2"){
        if(!intervalId){
        if(isPaused){
            isPaused = false;
            intervalId = setInterval(countDown, 1000);
            startButton.disabled = true;
            playButton.disabled = true;
        }else{
            const time = timeDisplay.value;

            if(time === 0 || time === ""){
                alert("Enter a valid timelapse");;
                return;
            }

            initialTime = time;
            remainingTime = time;
            updateDisplay(remainingTime)
            intervalId = setInterval(countDown, 1000);
            showMessage("Timer Started!")

            startButton.disabled = true;
            addBtn.disabled = true;
            reduceBtn.disabled = true;
            stopButton.disabled = false
        }
    }
    }
    
})

stopButton.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;   
    if(id === "3"){
        clearInterval(intervalId); 
        intervalId = null; 
        timeDisplay.value = "";
        isPaused = false;
        updateDisplay(0);
        showMessage("Timer stopped!")

        startButton.disabled = false;
        stopButton.disabled = true;
        pauseButton.disabled = true;
        playButton.disabled = true;
        addBtn.disabled = false;
        reduceBtn.disabled = false;
    }
})













