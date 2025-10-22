function upArray(arr){
  let result = arr.map((num) => {
    let numL = num.toString().length;
    if(numL > 1){
        return null;
    }
})
  return result;
}

console.log(upArray([1,2,3,4]))
console.log(upArray([1,2,3,4,9]))
console.log(upArray([12,2,1]))
console.log(upArray([1,2,-1]))