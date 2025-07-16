function minMax(arr){
let min = arr[0];
let max = arr[0];
let obj = {};

for(let i=0; i<arr.length; i++){
    if(arr[i] > max){
        max = arr[i];
    }
    if(arr[i] < min){
        min = arr[i];
    }
}
obj.min = min;
obj.max = max;

return obj;
}

console.log(minMax([8,1,9]));