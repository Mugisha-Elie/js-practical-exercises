function countChars(str){
    // let obj = {};
    // let count = 0;
    // let newStr = str.split("").set();
    // for(let i=0; i<newStr.length; i++){
    //     if(newStr.includes(newStr[i])){
    //         obj[newStr[i]] = count++;
    //     }
    // }
    // return newStr;

    let unique = [];
    let newStr = str.split("");
    for(let i=0; i<newStr.length; i++){
        if(!unique.includes(newStr[i])){
            unique.push(newStr[i]);
        }

        
    }

}

console.log(countChars("danny"));
