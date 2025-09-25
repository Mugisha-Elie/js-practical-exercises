function removeEveryOther(arr){
  return arr.filter((elem, index) => index % 2 == 0);
}

console.log(removeEveryOther(["keep", "remove", "keep", "remove", "keep"]));