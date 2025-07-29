function padEnd(str){
    str = str.split("");
    for(let i=0; i<5; i++){
        if(str.length < 5){
            str.push("*");
        }
    }
    return str.join("");
}

console.log(padEnd("JS"))