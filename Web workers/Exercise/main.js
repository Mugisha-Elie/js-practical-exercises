const myWorker = new Worker("worker.js");

const sumBtn = document.getElementById("sum");
const background = document.getElementById("background")

const colors = ["lightblue", "lightgreen", "lightgray"];
let color = 0;

background.addEventListener("click", () => {
    if(color !== colors.length){
        document.body.style.backgroundColor = colors[color];
        color = color + 1;
    }else{
        color = 0;
    }
})

// sumBtn.addEventListener("click", () => {
//     let sum = 0;
//     for (let i=0; i<10000000000; i++){
//         sum += i;
//     }
//     alert(sum);

    // myWorker.postMessage(colors);
    myWorker.postMessage("start");
});

myWorker.onmessage = function(sum){
    alert(`The sum is: ${sum.data}`);
}

