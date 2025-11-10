class Person{
    constructor(name){
        this._name = name; // the property name is changed to avoid name collision with getters and setters
    }

    get name(){
            return `The name is: ${this._name}`;    
    }

    set name(newName){
        newName = newName.trim();
        if(newName === ''){
            console.log('the name cannot be empty')
        }
        this._name = newName
    }
}

let john = new Person("John Doe");
console.log(john)

john.name = "John"
console.log(john.name)

function factory(aClass){
    return new aClass();
}

let greeting = factory(class{
    sayHi(){console.log('Hi')}
})

greeting.sayHi();

let app = new class{
    constructor(name){
        this.name = name;
    }
    start(){
        console.log(`Starting the ${this.name}`)
    }
}("Awesome App")

console.log(app)
app.start();

