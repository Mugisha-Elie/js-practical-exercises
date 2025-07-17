let inputObj = {
    firstName : "Mugisha",
    lastName : "Elie",
    age: 21
};

function transformKeys(obj, transformFunction){
    
    for(let key in obj){
        const value = obj[key];
        const newKey = transformFunction(key, value, obj);
        
        if(newKey != key){
            obj[newKey] = value;
            delete obj[key];
        }
    }
    return obj;

}

transformKeys(inputObj, key=>key.toUpperCase());

console.log(inputObj);