function removeSpaces(str){
    return str.split("").filter(char => {
        return char !== " ";
    }).join("")

    

}

console.log(removeSpaces("a b c d"))