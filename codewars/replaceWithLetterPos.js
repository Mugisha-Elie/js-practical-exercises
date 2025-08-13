function alphabetPosition(text) {
    let alphs = "abcdefghijklmnopqrstuvwxyz".split("");

    text = text.toLowerCase().split("").filter(char => alphs.includes(char));
    let alphPos = text.map(char => {
        if(alphs.includes(char)){
            return alphs.indexOf(char) + 1;
        }
    }); 
  return alphPos.join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));