function Animal(legs){
    this.legs = legs;
}

Animal.prototype.walk = function(){
    console.log(`I walk on ${this.legs} legs`)
}

function Bird(legs){
    Animal.call(this, legs)
}

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Animal;

Bird.prototype.fly = function(){
    console.log("flying")
}

let pigeon = new Bird(2);
pigeon.fly()
pigeon.walk()