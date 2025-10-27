class Person{
    constructor(name){
        this.name = name;
    }

    sayHi(){
        return `Hi ${this.name}`
    }
}

function people(name){
    this.name = name;
}

console.log(people)

console.log(new Person)