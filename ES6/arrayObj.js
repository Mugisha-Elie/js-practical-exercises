const arr = [1,2,3,4,5];

function objNot(arr){
    return arr.map((val, i, arr) => {
        return {[i] : val};
    })
}

console.log(objNot(arr));