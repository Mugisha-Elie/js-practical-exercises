function longestConsec(strarr, k) {
    const newArray = strarr.map((elem, index, arr)=>{
        if(arr.length !== 0 || arr.length >= k || index != arr.length - 1 ){
            elem = elem + arr[index + 1]
            return elem;
        }else{
            return
        }
    })

    return newArray
}

console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3))