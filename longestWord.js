function longestWord(sentence){
    let words = sentence.split(" ");
    let maxLength = words[0];
    

    for(let i=0; i<words.length; i++){
        
        if(words[i].length > maxLength.length){
            maxLength = words[i];
        }
    }
    return maxLength;
}

console.log(longestWord("The quick browning fox"));