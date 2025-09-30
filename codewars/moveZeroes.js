function moveZeros(arr) {
  let zeroArr = arr.filter(val => val === 0);
  let newArr = arr.filter(val => val !== 0);

  return newArr.concat(zeroArr);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))