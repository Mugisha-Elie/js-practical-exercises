function between(a, b) {
  const results = [];

  for(let i=a; i<=b; i++){
    results.push(i);
  }

  return results;
}

console.log(between(1, 4))