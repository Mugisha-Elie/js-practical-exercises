function split(arr){
   const arr1 = arr.flat();
   const arr2 = arr.map(el => [el.length]);
   return join([arr1], [arr2]);
}

function join(arr1,arr2){ 
  return arr1.concat(arr2);
}

const arr= [[1],[2,3],[4,5,6],[7,8,9,10]];
console.log(split(arr));