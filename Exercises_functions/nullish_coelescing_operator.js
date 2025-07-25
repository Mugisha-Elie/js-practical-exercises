function sayHi(name, text){
name = name ?? "Anonymous";
return name + ":" + text; 
}
let message = "Hi";
let user;
console.log(sayHi(user, message));