// function sayHi(){
//    return `${this.name} says HI`;
// }

// let user = {
//     name : "Kennedy"
// }

// user.sayHI = sayHi;

// console.log(user.sayHI());

let User = {
    firstname : "James",
    printName : function(){
       let arrow =  (firstname) => console.log(this.firstname);
       arrow("Mugisha");
    },
};

User.printName();

