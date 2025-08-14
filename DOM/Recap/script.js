let timeDisplay = document.querySelector("#timer-display");
let addBtn = document.getElementById("add");
let reduceBtn = document.getElementById("reduce");
let startButton = document.getElementById("start-button");
startButton.dataset.id = 2;
reduceBtn.dataset.id = 1;
addBtn.dataset.id = 0
let startPoint = 0;



addBtn.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;
    if(id === "0"){
        startPoint++;
    }
    timeDisplay.value = startPoint;
});

reduceBtn.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;
    if(id === "1"){
        if(timeDisplay.value > 0){
            startPoint--;
        }
    }
    timeDisplay.value = startPoint;
})

startButton.addEventListener("click", (event) => {
    let id = event.target.dataset.id

    if(id === "2"){
        if(timeDisplay.value != "" && timeDisplay != 0){
            let initialTime = timeDisplay.value;
            for(let i=initialTime; i>=0; i--){
            setTimeout(() => {
                timeDisplay.value = i;
                console.log(timeDisplay.value);
            }, (initialTime - i) * 1000)
        }
        }else{
            alert("Please enter a valid time")
        }
        
    }
})


let person = {name: "John"};

console.log(person)









