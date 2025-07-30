function endsWith(str, word){
    str = str.split("").reverse();
    return str.slice(0, word.length).join("") === word.split("").reverse().join("");

}

console.log(endsWith("sunsets", "sets"));