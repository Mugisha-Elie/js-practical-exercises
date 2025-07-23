function rotate(arr, k){
    let temp = 0;
    for(let i=0; i<k; i++){
        temp = arr.at(-1);
        arr[arr.length - 1] = arr[0]; 
        arr[0] = temp;
    }
    return arr;
}

let arr = [1,2,3,4]

console.log(rotate([1,2,3,4],1 ));