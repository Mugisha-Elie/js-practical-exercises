function towerBuilder(nFloors) {
  const result = [];

  for(let i=0; i<nFloors; i++){
    result.push(" ".repeat(nFloors - (i+1)) + "*".repeat(i + (i+1)) + " ".repeat(nFloors - (i+1)) )
  }

  return result;
}

console.log(towerBuilder(3))