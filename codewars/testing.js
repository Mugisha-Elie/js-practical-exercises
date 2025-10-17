var number=function(array){
  return array.map((el, index, arr) =>`${index+1}: ${el}`);
}

console.log(number(["a", "b", "c"]));