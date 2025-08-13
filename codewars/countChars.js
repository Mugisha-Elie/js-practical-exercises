function count(string) {
    let uniqueArr = [];
    let strArr = string.split("");
    for(let el of strArr){
        if(!uniqueArr.includes(el)){
            uniqueArr.push(el);
        }
    }

    let count = 0;
    let obj = {};

    for(let i=0; i<string.length; i++){
        if(uniqueArr.includes(string[i])){
            for(let j = 0; j<string.length; j++){
                if(string[i] === string[j]){
                    count += 1;
                }
                obj[string[i]] = count;
            }
            
        }
    }
  
    return obj;
}

console.log(count("ABA"))