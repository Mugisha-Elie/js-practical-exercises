function queueTime(customers, n) {
    if(n === 1) return customers.reduce((a,b) => a+b)
    if(n >= customers.length) return Math.max(...customers)
    
    
    
  
  


}

console.log(queueTime([10,2,3], 1))
console.log(queueTime([1,2,3,4,5], 10))

console.log(queueTime([10,3,6,4], 2))

