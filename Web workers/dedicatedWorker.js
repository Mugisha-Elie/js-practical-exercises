onmessage = (message) => {
    const[num1, num2] = message.data;
    
    console.log(num1, num2)

    const product = num1 * num2;
    const sum = num1 + num2;
    const difference = num1 - num2

    let division;
    if(num2 === 0 || (num1 === 0 && num2 === 0)){
        division = "Math Error"
    }else{
        division = num1 / num2;
    }

    const modulo = num1 % num2;
    const largest = Math.max(num1, num2)
    const smallest = Math.min(num1, num2)

    const mathObj = {product, sum, difference, division, modulo, largest, smallest};

    postMessage(mathObj)
}