function everyNth(arr, n){
    let newArray = [];
    for(let i=0; i<arr.length; i+=n){
        newArray.push(arr[i]);
    }
    return newArray;
}

console.log(everyNth([0,1,2,3,4,5],2));