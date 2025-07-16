function isPalindrome(input){
    let reversed = [];
    for(let i=input.length-1; i>=0; i--){
        reversed.push(input[i]);
    }

    if(reversed.join("") === input){
        return true;
    }
    return false;
}

console.log(isPalindrome("level"));