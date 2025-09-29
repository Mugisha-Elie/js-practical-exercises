function wave(str){
    let newStr = str.split("");
    let wave = [];

    for(let i=0; i<newStr.length; i++){
        if(i === 0){
            if(newStr[i] === " "){
                continue;
            }else{
                wave.push(newStr[i].toUpperCase() + newStr.slice(i+1).join(""))
            }
        }else if(i === (newStr.length-1)){
            if(newStr[i] === " " ){
                continue;
            }else{
                wave.push(newStr.slice(0, newStr.length-1).join("") + newStr[i].toUpperCase());
            }
        }else{
            if(newStr[i] === " "){
                continue;
            }else{
                wave.push(newStr.slice(0, i).join("") + newStr[i].toUpperCase() + newStr.slice(i+1).join(""))
            }
        }

        
    }

    return wave;
}

console.log(wave("hello"));
console.log(wave("s p a c es"));
console.log(wave(" "));