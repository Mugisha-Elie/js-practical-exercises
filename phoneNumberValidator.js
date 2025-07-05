function validatePhonenumber(phoneNumber){
   let regex = /^(\d{3}[-]\d{3}[-]\d{4}|\d{3}[_]\d{3}[_]\d{4}|\d{3} \d{3} \d{4}|\d{10})/;
   

   if(regex.test(phoneNumber)){
    let pureNumber = phoneNumber.replace(/\D/g, "");
    return pureNumber.length === 10;
   
    }else{
    return false;
   }
   
   
}

console.log(validatePhonenumber("123-45-67890"));