function objectFromPairs(pairs){
    let newObj = {};
for(let i=0; i<pairs.length; i++){
    let key = pairs[i][0];
    let value = pairs[i][1];
    newObj[key] = value;
}
return newObj;
}

console.log(objectFromPairs([["a",1], ["b",2]]));