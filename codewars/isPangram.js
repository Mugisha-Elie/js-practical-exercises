function isPangram(sentence){
    let aToZ = "abcdefghijklmnopqrstuvwxyz";
    let str = sentence.toLowerCase();
    for(let i=0; i<aToZ.length; i++){
        if(!str.includes(aToZ[i])){
            return false;
        }
    }
    return true;
}

let str = "The quick brown fox jumps over the lazy dog"

console.log(isPangram(str));