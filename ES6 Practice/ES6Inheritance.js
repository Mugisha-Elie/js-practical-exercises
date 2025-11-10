class Animal{
    constructor(legs){
        this.legs = legs
    }

    walk(){
        console.log(`I walk on ${this.legs} legs`)
    }
}

class Bird extends Animal{
    constructor(legs){
        super(legs);
    }

    fly(){
        console.log('flying');
    }
}

let bird = new Bird(2)
bird.walk();
bird.fly();

class Queue extends Array{
    addToBack(e){
        super.push(e)
    }

    removeFromFront(){
        return super.shift();
    }
}

let customers = new Queue();
console.log(customers)

customers.addToBack(12);
customers.addToBack(2);

console.log(customers)
