function alphaSeq (str) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let newArr = str.toLowerCase().split("");
    let capitalized = newArr.map(c => {
        let index = letters.indexOf(c);
        let newWord = c.toUpperCase() + c.repeat(index);
        return newWord;
    });
    return capitalized.join(",");
    
}

console.log(alphaSeq("abcdef"));
console.log(alphaSeq("ZpglnRxqenU"));