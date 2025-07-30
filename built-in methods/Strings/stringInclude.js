function stringInclude(str, word){
    return str.split(" ").includes(word);
}

console.log(stringInclude("I love coding", "love"));