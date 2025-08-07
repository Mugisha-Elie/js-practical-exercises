// function greet(){
//     console.log("Hoooowdy!");
// }

// const timerId = setTimeout(greet, 5000);


console.log("Start of script");

setTimeout(()=>{
    console.log("This should come second");
}, 0);

for(let i=0; i<1000; i++){
console.log(i);
}

console.log("End of script");