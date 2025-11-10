class Person{
    constructor(name){
        this.name = name;
    }

    getName(){
        return this.name
    }

    static createAnonymous(gender){
        let name = gender == "male" ? "John Doe" : "Jane Doe";
        return new Person(name);
    }
}

let anonymous = Person.createAnonymous("female");
console.log(anonymous)

let newAn = new Person("JAmes")
console.log(newAn)
// console.log(newAn.createAnonymous("male"))

// console.log(this.Person.createAnonymous("male"))

const createObject = (key, value) => {
    return {
        [key] : value,
    }
}

const person = createObject('name', 'John')
console.log(person)