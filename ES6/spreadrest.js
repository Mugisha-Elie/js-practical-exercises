// let nums = [1,2,3,4,5];
// let numbers = [0, ...nums];

// console.log(numbers);

// function stringClean(s){
//   let pattern = /\d/g;
//   return s.replace(pattern, "")
// }

// console.log(stringClean("123456"));

function lowercaseCount(str){
    return str.match(/\d/g).length;
}

console.log(lowercaseCount("ama2ta y um8ana"));