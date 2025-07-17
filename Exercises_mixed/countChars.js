function countChars(str){
    let myObj = {};
    let chars = [];
    for (let i = 0; i < str.length; i++) {
        if(!chars.includes(str[i])){
            chars.push(str[i]);
        }
    }

    myObj = chars.reduce((a, key) => Object.assign(a, { [key]: str.split('').filter(c => c === key).length }), {});


    return myObj;

    

}

console.log(countChars("Jimmy"));
