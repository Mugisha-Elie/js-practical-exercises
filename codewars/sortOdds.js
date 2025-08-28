function sortArray(array) {
  let oddArray = array.filter(el => el % 2 !== 0).sort((a,b) => a-b);
  let oddIndex = 0;
  let i = 0;

  while(oddIndex < oddArray.length){
    if(array[i] % 2 !== 0){
        array[i] = oddArray[oddIndex];   
        oddIndex++;            
    }
    i++;
  }

  return array;
  
}

console.log(sortArray([5, 8, 6, 3, 4]));
console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));