function findMissingLetter(array)
{
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    let startIndex = letters.indexOf(array[0]);
    let stopIndex = letters.indexOf(array.at(-1));
    let range = letters.slice(startIndex, stopIndex+1);
    let missing = range.map(el => {
    if(!array.includes(el)){
        return el;
    }
  })
  return missing.join("");
}

console.log(findMissingLetter(['O','Q','R','S']))