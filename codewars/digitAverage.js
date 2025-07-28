function digitsAverage(input) {
 let currentNumberString = input.toString();
 while(currentNumberString.length > 1){
    let digitsArray = currentNumberString.split("");
   const nextIterationAverages = digitsArray.slice(0, digitsArray.length-1).map((currentDig, index)=>{
    const nextDig = digitsArray[index+1];
    const dig1 = Number(currentDig);
    const dig2 = Number(nextDig);
    return Math.ceil((dig1 + dig2)/2);
   });
   currentNumberString = nextIterationAverages.join('');
 }
 return Number(currentNumberString);
  
}

console.log(digitsAverage(246));