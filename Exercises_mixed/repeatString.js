function repeatString(str, n){
    let input = "";

    for(let i=0; i<n; i++){
        input += str;
    }

    return input;

}

console.log(repeatString("ha",3));