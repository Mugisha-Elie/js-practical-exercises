function uppercaseLong(words){
    let arr = [];
    for(let i=0; i<words.length; i++){
        if(words[i].length > 3){
            arr.push(words[i].toUpperCase());
        }
    }
    return arr;
}

console.log(uppercaseLong(["hi","javascript","fun"]));