// function narcissistic(value) {
//     let numArr = value.toString().split("").map(num => Number(num));
//     let numLen = numArr.length;
    
//     numArr = numArr.map(num => num ** numLen);

//     let newNum = numArr.reduce((a,b) => a+b);

//     return newNum === value;
  
  
// }

// console.log(narcissistic(153));

function getSum(a, b)
{
  let sum = 0;
   if(a < b){
    for(let i=a; i<=b; i++){
     sum += i;
    }
    }else if(a > b){
    for(let i=b; i<=a; i++){
     sum += i;
   }

  }else if(a === b){
    return a || b;
  }

  return sum;
   
}

console.log(getSum(1,4));