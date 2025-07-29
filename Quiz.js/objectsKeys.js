function getObjKeys(obj){
    let objKeys = [];
    for(let key in obj){
        objKeys.push(key);
    }
    return objKeys;
}

console.log(getObjKeys({a: 1, b: 2, c: 3}))