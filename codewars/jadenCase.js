function toJadenCase(thiss) {
    let newArr = thiss.split(" ");
    let capitalized = newArr.map(word => {
        let newWord = word.charAt(0).toUpperCase() + word.slice(1);
        return newWord;
    });

    return capitalized;
}

console.log(toJadenCase("I'm talking backwards"));