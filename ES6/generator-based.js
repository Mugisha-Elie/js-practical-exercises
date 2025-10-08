class Person{
    constructor(name, age, classroom){
        this.name = name;
        this.age = age;
        this.classroom = classroom;
    }

    *[Symbol.iterator](){
        const entries = Object.entries(this);

        for(let i=0; i<entries.length; i++){
            yield entries[i];
        }
    }
}

const goat =  new Person("Nice", 23, "Room95");
console.log(goat);

// for(let goats of goat){
//     console.log(goats);
// }

console.log(goat.__proto__);