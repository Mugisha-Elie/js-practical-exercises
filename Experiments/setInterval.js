// let count = 0;

// function incrementCount(){
//     count++;
//     console.log("Count is = " +count);
//     if(count === 5){
//     clearInterval(intervalId);
//     console.log("That was it");
// }
// }

// const intervalId = setInterval(incrementCount, 5000);

// // setTimeout(()=>{
// //     clearInterval(intervalId);
// //     console.log("Interval stopped");
// // }, 7000);


const startTime = Date.now();
let intervalCount = 0;

const intervalId = setInterval(()=>{
intervalCount++;
const elapsedTime = Date.now() - startTime;
console.log(`Interval fired at: ${elapsedTime}ms`);

const blockUntil = Date.now() + 500;
while(Date.now() < blockUntil){
}
if(intervalCount >= 3){
clearInterval(intervalId);
}
},100);