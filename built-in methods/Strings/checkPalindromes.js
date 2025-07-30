function checkPalindrome(str){
    let ogStr = str;
    let reversed = str.split("").reverse().join("");

    return ogStr === reversed;

}

console.log(checkPalindrome("151"))