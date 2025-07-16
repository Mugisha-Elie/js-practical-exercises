let obj = {};
    let count = 0;
    let newStr = str.split("").set();
    for(let i=0; i<newStr.length; i++){
        if(newStr.includes(newStr[i])){
            obj[newStr[i]] = count++;
        }
    }
    return newStr;