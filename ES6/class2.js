function getClass(phrase){
    return class{
        sayHi(){
            return phrase
        }
    }
}

let User = getClass("Returning a class...")

console.log(new User().sayHi())