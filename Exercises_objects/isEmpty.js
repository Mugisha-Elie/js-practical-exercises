function isEmpty(obj){
    let result = [];
    for(key in obj){
        result.push(key)
    }
    return result.length === 0;
}
function sum(obj){
    let sum = 0;
    for(key in obj){
        sum += obj[key];
    }
    return sum;
}

let obj = {name: "Josh"};
console.log(isEmpty(obj));

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
console.log(sum(salaries))

