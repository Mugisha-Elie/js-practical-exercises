function accum(s) {
    // let str = s.split("");
    // let result = str.map((elem, index, array) => {
    //     return elem.repeat(index+1).toLowerCase();
    // });

    // let caps = result.map(word => {
    //     return word.split("").toSpliced(0, 1, word[0].toUpperCase()).join("");
    // });

    // return caps.join("-");

    let result = s.split("").map((s, index) => s.toLowerCase().repeat(index + 1));
    for(let i=0; i<result.length; i++){
        result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result;
}


console.log(accum("aBcd"));