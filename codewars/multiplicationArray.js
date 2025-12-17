function multiplicationTable(size) {
    let result = [];
    let nestedresult = [];
    let count = 1;
  for(let i=0; i<size; i++){
    for(let j=0; j<size; count++){
        nestedresult.push(count)
        j++;
    }
    result.push(nestedresult)
    nestedresult = [];
  }
  return result;
}


console.log(multiplicationTable(5))