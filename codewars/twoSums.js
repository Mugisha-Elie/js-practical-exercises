function twoSum(numbers, target){
    for(let i=0; i<numbers.length; i++){
        for(let j = i+1; j<numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                return [i, j];
            }
        }
    }
}

let arr = [1, 2, 3];
let target = 4;
console.log(twoSum(arr, target));