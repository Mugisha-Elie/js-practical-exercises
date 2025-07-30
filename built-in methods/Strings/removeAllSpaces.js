function removeAllSpaces(str){
    str = str.split("").filter(el=>el !== " ").join("");
    return str;
}

console.log(removeAllSpaces("a b c d"));