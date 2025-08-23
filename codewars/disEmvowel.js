function disemvowel(str) {
    let vowels = "aeiou";
  let newStr = str.split("").map(el =>
  {
    if(!vowels.includes(el.toLowerCase())){
        return el;
    }
  }
  )
  return newStr.join("");
}

console.log(disemvowel("This website is for losers LOL!"))