function swapTwo(array, a, b) {
  let arr = array.slice();
  let aInd = arr.indexOf(a);
  let bInd = arr.lastIndexOf(b);
  
  arr[aInd] = b;
  arr[bInd] = a;
  
  return arr;
  
}

console.log(swapTwo([1, 2, 3, 4], 2, 4))