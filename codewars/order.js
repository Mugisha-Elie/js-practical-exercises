function order(words){
  if(words === ""){
    return ""
  }
  let wordArr = words.split(" ");
  return wordArr.sort((a, b) => {
    return Number(a.split("").filter(char => !isNaN(Number(char))).join("")) - Number(b.split("").filter(char => !isNaN(Number(char))).join(""));
  });
}

console.log(order('is2 Thi1s T4est 3a'));