function findEvenIndex(arr) {
    

    for(let i=0; i<arr.length; i++){
        let leftSum = 0;
        let rightSum = 0;
        if(i === 0){
            leftSum = 0;
            rightSum = arr.slice(1).reduce((a,b)=>a+b)
        }else if(i === arr.length-1){
            leftSum = arr.slice(0, i).reduce((a,b)=>a+b);
            rightSum = 0;
        }else{
            leftSum = arr.slice(0, i).reduce((a,b)=>a+b);
            rightSum = arr.slice(i+1).reduce((a,b)=>a+b);
        }

        if(leftSum === rightSum){
            return i;
        }
    }

    return -1;

}

console.log(findEvenIndex([1,2,3,4,3,2,1]));
console.log(findEvenIndex([10,-80,10,10,15,35,20]));