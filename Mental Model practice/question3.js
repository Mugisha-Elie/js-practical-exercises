function mergeAndFilter(arr1, arr2){
    return Array.from(new Set([...arr1, ...arr2])).sort()
}

console.log(mergeAndFilter([3, 1, 4], [4, 2, 3]))