function high(x){
    let wordArr = x.toLowerCase().split(" ");
    let chars = "abcdefghijklmnopqrstuvwxyz";
    
    let newArray = wordArr.map(word => {
        let newArr = word.split("").map(c => {
            return (chars.indexOf(c) + 1);
        });
        return newArr;
    });

    let scores = newArray.map(arr => arr.reduce((a, b) => a+b));

    let max = scores[0];
    for(let i=0; i<scores.length; i++){
        if(scores[i] > max){
            max = scores[i];
        }
    }

    let indexOfScore = scores.indexOf(max);
    let word = x.split(" ")[indexOfScore]
    

    return word;
}

console.log(high("aa aabd"));
console.log(high("Junior and me"))

