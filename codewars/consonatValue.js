


function solve(s) {
    let vowels = ["a", "e", "i", "o", "u"];
    let letters = "abcdefghijklmnopqrstuvwxyz";
    letters = letters.split("");
    let nums = [];

    let str = s.toLowerCase().split("");
    str = str.filter((elem)=>{
        if(!vowels.includes(elem)){
            return elem;
        }
    });

    return str;

    

   
  
};

console.log(solve("strength"));