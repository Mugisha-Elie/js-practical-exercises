function removeSmallest(numbers) {

    if(numbers.length === 0){
        return [];
    }

    let minNumber = numbers[0];
    let minIndex = 0;
    
    for(let i=1; i<numbers.length; i++){
        if(numbers[i] < minNumber){
            minNumber = numbers[i];
            minIndex = i;
        }
    }

    const newArr = [
        ...numbers.slice(0, minIndex),
        ...numbers.slice(minIndex + 1)
    ];

    return newArr;
  
}

console.log(removeSmallest([1,2,3,4,5]))
console.log(removeSmallest([2, 2, 1, 2, 1]));
console.log(removeSmallest([]));