function whichPostcode(postcode){
    const bp = /^\s*[a-zA-z]{1,2}\d{1,2}\s[0-9][a-zA-z]{1,2}\s*$/
    const sp = /^\s*[0-9]{3}\s[0-9]{2}\s*$/;
    
    return bp.test(postcode) ? "GB" : sp.test(postcode) ? "SK" : "Not valid";
}

console.log(whichPostcode("G12 8Nu"));
console.log(whichPostcode(" SE21 7AB "));
console.log(whichPostcode("12G 8NU"));

console.log(whichPostcode("012 8N"));
console.log(whichPostcode(" A21 79 "));
console.log(whichPostcode("123 847"));
console.log(whichPostcode(" 123 84 "));

//consist of five numbers where the first three are seperateed with a space from the last 2
