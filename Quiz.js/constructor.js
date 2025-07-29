class Person{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const person = new Person("Egide", 12, "female");

console.log(person.name);