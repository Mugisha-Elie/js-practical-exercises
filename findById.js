function findById(arr, id){
for(let i=0; i<arr.length; i++){
    if(arr[i].id === id){
        return arr[i];
    }
}
}

let arr = [{id:1},{id:2}];

console.log(findById(arr, 2))