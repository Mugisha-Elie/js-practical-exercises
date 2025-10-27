class Person{
    constructor(age){
        this.age = age;
    }

    set age(value){
        if(value > 18){
            console.log("You are a grown man")
            this._age = value;
        }else{
            console.log("You are a young man");
            return;
        }
    }
}

const user = new Person(12);
const user2 = new Person(30);