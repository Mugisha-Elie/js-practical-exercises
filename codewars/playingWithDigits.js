function digPow(n, p){
    let sum = 0;
    p = p - 1;
    let num = n.toString().split("").map((n)=>{
        p++;
    return parseInt(n) ** p;
  });

  sum = num.reduce((a, b) => a + b);

  let k = sum/n;
  k = Math.floor(k);

  return (sum === n * k) ? k : -1;
}

console.log(digPow(89, 1));
console.log(digPow(46288, 5));
