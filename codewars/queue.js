function queueTime(customers, n) {
    let totalTime;
  if(n === 1){
    totalTime = customers.reduce((a,b) => a + b)
  }else if(n >= customers.length){
    totalTime = Math.max(...customers);
  }

  
  
  return totalTime
    
}


console.log(queueTime([2, 12, 10,], 4))
console.log(queueTime([10, 2, 3, 7], 2))