function deleteNth(arr,n){
// let keys = [];

// //Generating Keys to keep count in the obj of each element
// arr.forEach(el => {
//     if(!keys.includes(el)){
//         keys.push(el);
//     }
// }) 

// //Creating an object with the counts of each element
// let obj = {};
// let count = 0;
// for(let i=0; i<keys.length; i++){
//     for(let j=0; j<arr.length; j++){
//         if(arr[j] === keys[i]){
//             count++;
//         }
//     }
//     obj[keys[i]] = count;
//     count = 0;
// }



// //Removing the numbers that appeared more than n times until the times they appear is equal to n


// for (let key in obj){
//     if(obj[key] > n){
//         while(obj[key] > n){
//             arr.splice(arr.lastIndexOf(Number(key)), 1);
//             obj[key] -= 1
//         }
//     }
// }

// return arr;

let counts = {};
let result = [];

for (let el of arr){
    if(!counts[el]){
        counts[el] = 0;
    }

    if(counts[el] < n){
        result.push(el);
        counts[el]++;
    }
}

return result;



}

console.log(deleteNth([12,39,19,39,39,19,12], 1))
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3));
console.log(deleteNth([20,37,20,21], 1));