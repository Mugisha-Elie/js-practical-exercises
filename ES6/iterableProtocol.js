let Person = {
    name : "Jack",
    age : "86",
    gender: "Female",
    nationality: "Zimbabwean",
    status: "old",

    [Symbol.iterator](){
        const entries = Object.entries(Person);
        let current = 0;

        return {
            next(){
                if(current < entries.length){
                    return {value: entries[current++], done: false};
                }else{
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

for (let p of Person){
    console.log(p)
}

class People{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    [Symbol.iterator](){
        const entries = Object.entries(this);
        let current = 0;

        return{
            next(){
                if(current < entries.length){
                    return {value: entries[current++], done: false};
                }else{
                    return {value: undefined, done: true};
                }
            }
        }
    }
}

const guy = new People("Tyrese", "67", "male");
console.log(guy);

for(let g of guy){
    console.log(g);
}

// const blue = Object.entries(guy);

// console.log(...blue);

