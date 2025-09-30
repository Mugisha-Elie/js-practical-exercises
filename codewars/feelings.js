function countFeelings(string, array) {
  let newArray = array.map(word => {
    newStr = string.split("").filter(char => word.includes(char));
    if(newStr.length === word.length){
        return newStr.join("");
    }
    
  }).filter(word => word !== undefined);


  return (newArray.length === 1) ? `${newArray.length} feeling` : `${newArray.length} feelings`;
}

console.log(countFeelings('yliausoenvjw', ['anger', 'awe', 'joy', 'love', 'grief', "happy"]));