function dup(s){
    let result = [];

    for(let i=0; i<s.length; i++){
        let word = s[i];
        let uniqueStr = "";

        for(let j=0; j<word.length; j++){
            if(j === 0 || word[j] !== word[j-1]){
                uniqueStr += word[j];
            }
        }
        result.push(uniqueStr);
    }
    return result;
}

console.log(dup(["abracadabra","allottee","assessee"]));


// function dup(s){
// let result = s.map(value => {
//     let word = value.split("")
//     let uniqueStr = word.filter((value) => {
//         return value !== word[word.indexOf(value)-1] || word.indexOf(value) === 0
//     });
//     return uniqueStr.join("");
// });
// return result;
// }

// console.log(dup(["abracadabra","allottee","assessee"]));