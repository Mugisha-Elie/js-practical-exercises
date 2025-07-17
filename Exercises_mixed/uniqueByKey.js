function uniqueByKey(arr, key){
    let uniqueValues = [];
    let uniqueKeys = [];
    let newArray = [];

    for(let i=0; i<arr.length; i++){
        if(uniqueValues.indexOf(arr[i][key]) === -1){
            uniqueValues.push(arr[i][key]);
            uniqueKeys.push(arr[i][key]);
            newArray.push(arr[i]);
        }

    }



    

return newArray;
}

console.log(uniqueByKey([{k:3},{n:1},{n:1},{n:2}, ],"k"));