function sumTwoSmallestNumbers(numbers) {  
  let smallest = [];
  
  

  while (smallest.length < 2){
      let min = numbers[0];
      numbers.forEach(num => {
          if(num < min){
              min = num;
          }
      });
      smallest.push(min);
      let indexOfMin = numbers.indexOf(min);
      numbers.splice(indexOfMin, 1);
  }
    return smallest.reduce((a,b) => a+b);
}

console.log(sumTwoSmallestNumbers([1,2,3,4,5]))