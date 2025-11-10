function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name
}

Person.createAnonymous = function(gender){
    let name = gender == "male" ? "John Doe" : "Jane Doe";
    return new Person(name)
}

let anonymous = Person.createAnonymous("male");
console.log(anonymous)