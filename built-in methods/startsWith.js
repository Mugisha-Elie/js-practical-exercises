function startsWith(str, word){
    str = str.split("");
    // let word = word.split("");
    return str.slice(0, word.length).join("") === word;
}

console.log(startsWith("Programming", "Pro"));