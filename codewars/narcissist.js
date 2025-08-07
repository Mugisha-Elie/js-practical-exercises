function narcissistic(value) {
    let numArr = value.toString().split("").map(num => Number(num));
    let numLen = numArr.length;
    
    numArr = numArr.map(num => num ** numLen);

    let newNum = numArr.reduce((a,b) => a+b);

    return newNum === value;
  
  
}

console.log(narcissistic(153));