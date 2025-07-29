function findIndexOf(str, charac){
    return str.split("").findIndex(c => c === charac);
}

console.log(findIndexOf("banana", "a"));