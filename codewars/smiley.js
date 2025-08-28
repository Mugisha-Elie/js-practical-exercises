function countSmileys(arr) {
  let pattern = /(:|;)(-|~)*{1}(\)|D)/;
  let count = 0;
  arr.forEach(smiley => {
    if(pattern.test(smiley)){
        count++
    }
  })
  return count;
}

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));