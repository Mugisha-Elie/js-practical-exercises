function reverseWords(sentence){
    let words = sentence.split(" ");
    let reversed = ""
    for(let i=0; i<words.length; i++){
        let word = words[i].split("");
        word = word.reverse().join("");

        reversed += word + " "; 


        
    }
    return reversed;
}

console.log(reverseWords("hello world"));