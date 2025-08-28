var maxSequence = function(arr){
  let max_current = arr[0]; 
  let max_global = arr[0];
  for(let i=1; i<arr.length; i++){
    max_current = Math.max(arr[i], max_current + arr[i]);
    if(max_current > max_global){
        max_global = max_current;
    }
  }
  return max_global ? max_global < 0 ? 0 : max_global: 0;
}

console.log(maxSequence([-2, 3, 2, -1]))
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));