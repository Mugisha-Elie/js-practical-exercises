function grabscrab(anagram, dictionary) {
 function isAnagram(s){
    if(anagram.length === s.length){
        let anag = anagram.split("").sort().join("");
        let sWord = s.split("").sort().join("");
        if(anag === sWord){
            return true;
        }else{
            return false
        }
    }else{
        return false;
    }
 }
 let newArr = dictionary.filter(word => {
    if(isAnagram(word)){
        return word;
    }
 });

 return newArr;


}

//console.log(grabscrab("sport", ["sport", "parrot", "ports", "matey"]));
console.log(grabscrab("sport", ["sport", "ports"]));