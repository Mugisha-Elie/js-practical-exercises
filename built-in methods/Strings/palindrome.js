function checkPalindrome(str){
    let ogStr = str.toString();
    let charsArray = ogStr.split('');
    let reversedStr = charsArray.slice().reverse().join('');

    return ogStr === reversedStr;

    



}

console.log(checkPalindrome(14141));