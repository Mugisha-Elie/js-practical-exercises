function swapEnds(arr){
    let temp;
    temp = arr[0];
    arr[0] = arr[arr.length-1];
    arr[arr.length-1] = temp;

    return arr;
}

console.log(swapEnds([1,2,3,4]))