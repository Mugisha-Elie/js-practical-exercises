function squareEveryDigit(digit){
let digitArr = digit.toString().split("");
for(let i=0; i<digitArr.length; i++){
    digitArr[i] = Math.pow(digitArr[i], 2);
}
let num = digitArr.join("")
return Number(num);
}

let dig = 0;


console.log(squareEveryDigit(dig));

