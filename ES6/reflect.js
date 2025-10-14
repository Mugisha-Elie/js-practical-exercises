class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
};

let args = ["John", "Doe"];

let john = Reflect.construct(Person, args)

console.log(john instanceof Person);
console.log(john.fullName);