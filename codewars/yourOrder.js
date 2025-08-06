function order(words){
    if(!words){
        return "";
    }
let wordsCopy = words.split(" ");
let numbers = wordsCopy.map((word) => {
    let wordNumber = word.split("").map((char)=>{
        if(!isNaN(char) && parseInt(char) !== undefined){
            return parseInt(char);
        }
    }).join('')
    return wordNumber;
});
numbers = numbers.map(num => parseInt(num));
let sortedNums =  numbers.sort((a,b) => a-b);

let sortedArray = [];


for(let i=0; i<wordsCopy.length; i++){
    let word = wordsCopy[i];
    let index;
    let temp;
   
    for(let j=0; j<word.length; j++){
        if(numbers.includes(parseInt(word[j]))){
            
            index = numbers.indexOf(parseInt(word[j]))
            temp = wordsCopy[index];
            wordsCopy[index] = word;
            wordsCopy[i] = temp;
            
        }
    }
}


return wordsCopy.join(" ");


}

console.log(order("is2 Thi1s T4est 3a"));
console.log(order("Fo1r g3ood the2 4of th5e pe6ople"));
console.log(order("wha1t sh2all 3we d4o a6 w5ith dru7nke…"));


