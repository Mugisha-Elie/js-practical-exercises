function spinWords(string){
  let str = string.split(" ").map(word => {
    if(word.length >= 5){
      return word.split("").reverse().join("")
    }else{
        return word;
    }
  });
  
  
  return str.join(" ");
  
}

console.log(spinWords("Seriously this is the last one"))