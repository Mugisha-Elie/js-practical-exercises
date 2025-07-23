function sumNested(arr){
 arr = arr.flat(1);
 
 return arr.reduce((a,b)=>a+b);
}

console.log(sumNested([1,[2,3],4]));