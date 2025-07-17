// Array statistics 
// You are given an array of numbers. Your task is to implement a function called 
// arrayStats that returns an object containing various statistics about the array. 
// The returned object should have the following properties: 
// sum: The sum of all numbers in the array. 
// average: The average of all numbers in the array (rounded to two decimal places). 
// min: The minimum value in the array. 
// max: The maximum value in the array. 
// Example: 
// arrayStats([1, 2, 3, 4, 5]); // should return { sum: 15, average: 3.00, min: 1, max: 5 }

function arrayStats(array){
    //calculating sum and average
    let sum = array.reduce((a, b)=> a+b, 0);
    let ave = parseFloat((sum / array.length).toFixed(2));

    //calculating min and max
    let min = array[0];
    let max = array[0];
    for(let i=0; i<array.length; i++){
        if(array[i] > max){
            max = array[i];
        }
        if(array[i] < min){
            min = array[i];
        }
    }
    
    // creating object to store stats
    let obj = {sum: sum, average: ave, min: min, max:max};

    return obj;

  }

  let arr = [5, -4, 6, 7, 9];
console.log(arrayStats(arr));