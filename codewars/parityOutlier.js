function findOutlier(integers){
    let oddCount = 0;
    let evenCount = 0;
    let result = [];
    
    integers.forEach(num => {
        if(num % 2 === 0){
            evenCount += 1;
        }else{
            oddCount += 1;
        }
    });

    if(oddCount > evenCount){
        result = integers.filter(num => num % 2 === 0).join("")
    }else{
        result = integers.filter(num => num % 2 !== 0).join("")
    }

    return Number(result);
}

console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))