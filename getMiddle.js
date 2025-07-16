function getMiddle(s){
    let sArray = s.split("");
    let sArrayLength = sArray.length;
    let middle = "";
    if(sArrayLength % 2 == 0){
        middle += sArray[(sArrayLength/2) -1] + sArray[(sArrayLength/2)]
    }else if (sArrayLength % 2 != 0){
        middle += sArray[Math.floor(sArrayLength/2)];
    }

    return middle;
}

console.log(getMiddle("tes"));