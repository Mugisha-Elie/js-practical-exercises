// // let a, b;
// // [a, b] = [10, 20];
// // // console.log({a, b});

// // function getItems(){
// //     return [10, 20];
// // }

// // let items = getItems();
// // let thirdItem = items[2] != undefined ? items[2] : 0;

// // console.log({thirdItem});

// // let [, , thirdItem = 0] = getItems();
// // console.log({thirdItem})

// // let a, b;
// // [a = 1, b = 2] = [,10];
// // console.log(a);
// // console.log(b);

// function stats(a, b){
//     return [a + b, (a+b)/2, a-b, a*b];
// }

// let [add, ave, diff, prod] = stats(3, 4);

// console.log({add, ave, diff, prod});

// function Car(){
//     this.speed = 0;
//     this.speedUp = function(speed){
//         this.speed = speed;
//         let self = this;
//         setTimeout(function(){
//             console.log(self.speed)
//         }, 1000)
//     }
// }

// let car = new Car();
// car.speedUp(50);

// class Person{
//     constructor(a, b){
//         this.a = a;
//         this.b = b;
//         this.sayHi = function(){
//             return "Hi";
//         }
//     }

//     static add(a, b){
//         return a + b;
//     }
// }

// const hi = new Person();
// console.log(hi.sayHi())

class Person{
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }

    add(){
        return this.fname + this.lname; 
    }
}

class User extends Person{
    constructor(fname, lname, age){
        super(fname, lname);
        this.fname = "Margot"
        this.age = age;
    }

    add(){
        return super.add() + "are the details";
    }
}

const user1 = new Person("Junio", "Doe");
const user2 = new User("James", "Doe", 12)

console.log(user2);

