let romanNum = {
    i : 1 ,
    v : 5,
    x : 10,
    l : 50 ,
    c : 100 ,
    d : 500,
    m : 1000,
}
function romanNumerals(str){
    let result = [];
    let total = 0;
    let strArr = str.toLowerCase().split("");
    strArr.map((value) => {
        if(romanNum.hasOwnProperty(value)){
            result.push(romanNum[value]);
        }
    });

    result.forEach((res, index) => {
        if(index != result.length-1){
            if(res < result[index+1]){
                total += result[index+1] - res;
                res = result[index+2];
            }else if(res >= result[index+1]){
                total += res;
            }
        }else{
            total += res;
        }
        
    });

    return total;
}

console.log(romanNumerals("MCMXC"));
