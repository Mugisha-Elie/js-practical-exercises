function printerErrors(s){
    let varid = "abcdefghijklm";
    let varidArray = varid.split("");
    let inputArray = s.split("");
    let countErrors = 0;

    for(let i=0; i<inputArray.length; i++){
        if(!varidArray.includes(inputArray[i])){
            countErrors++;
        }
    }

    return `${countErrors} / ${inputArray.length}`

    
}
s="aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz";

console.log(printerErrors(s));