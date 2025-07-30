function titleCase(str){
    str = str.split(" ");
    for(let i=0; i<str.length; i++){
        let word = str[i];
        let firstChar = word.charAt(0).toUpperCase();
        let restOfWord = word.slice(1).toLowerCase();
        word = firstChar + restOfWord;
        str[i] = word;
    }

    return str;
}

console.log(titleCase("hello world"));