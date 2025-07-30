function convertCase(str){
    let newStr = ""
    str = str.split(" ");
    for(let i=0; i<str.length; i++){
        let word = str[i];
        let firstChar = word.charAt(0).toUpperCase();
        let restChars = word.slice(1);
        newStr += firstChar+restChars + " "
    }

    return newStr;

}

console.log(convertCase("hello world"));
