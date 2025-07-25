let array = [1,2,4,5];
console.log(array.reduce((a,b)=>{
return a+b;
}), array);

console.log(array.findIndex((el)=>el%2===0));