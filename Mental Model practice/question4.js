class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        return `Hi, I'm ${this.name} and I'm ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name, age, grade){
        super(name, age)
        this.grade = grade;
    }

    introduce(){
        return super.introduce() + `My grade is ${this.grade}`
    }
}

const person1 = new Person("James", 20, "A")
console.log(person1.introduce())

const student1 =  new Student("Kimi", 25, "B")
console.log(student1.introduce())
