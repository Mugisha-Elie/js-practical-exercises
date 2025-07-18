let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
//console.log(user);

function isEmpty(obj){
    let keys = [];
for (let key in obj){
    keys.push(key);
}
if(keys.length == 0){
    return true;
}
return false;
}

let schedule = {};

console.log( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

console.log( isEmpty(schedule) ); // false