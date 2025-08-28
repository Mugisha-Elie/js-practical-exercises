function rgb(r, g, b) {
function getHex(d){
   if(d === 0){
    return "00";
   }
   if(d > 255){
    return "FF";
   }

   let hexChars = "0123456789ABCDEF";
   let hexResult = "";
   let currentNum = d;

   while(currentNum > 0){
    let rem = currentNum % 16;
    let hexChar = hexChars[rem];
    hexResult = hexChar + hexResult;
    currentNum = Math.floor(currentNum / 16);
   }
   if(hexResult.length === 1){
    return "0"+hexResult;
   }
   return hexResult;
}

    let values = [getHex(r), getHex(g), getHex(b)];
    return values.join("");
}
console.log(rgb(300, 255, 255));
