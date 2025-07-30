function pad(num){
num = num.toString().split("");

for(let i=0; i<3; i++){
    if(num.length < 3){
        num.unshift("0");
    }
    
}

return num.join("")


}

console.log(pad(7));