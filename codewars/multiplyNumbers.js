function multiplyNumbers(a, b){
    let num1 = a.toString().split("");
    let num2 = b.toString().split("");

    if(num1.length > num2.length){
        for(let i= 0; i<(num1.length - num2.length); i++){
            num2.unshift("0")
        }
    }else if(num2.length > num1.length){
        for(let i= 0; i<(num2.length - num1.length); i++){
            num1.unshift("0");
        }
    }
    let result = [];
    for(let i=0; i<num1.length; i++){
        return
    }

    return result;
}

console.log(multiplyNumbers(1, 123));