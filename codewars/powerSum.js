function powerSumDigTerm(n) {
    let number = 10
    
    let narcissist = [];

    while(narcissist.length < n){
        const digLength = number.toString().split("").length;
        const sumOfDigits = number.toString().split("").map(num => Number(num)).reduce((a,b) => a + b)

        if(Math.pow(sumOfDigits, digLength) === number){
            narcissist.push(number)
            number++;
        }else{
            number++;
        }
    }

    return narcissist.at(-1)   
}

console.log(powerSumDigTerm(1))