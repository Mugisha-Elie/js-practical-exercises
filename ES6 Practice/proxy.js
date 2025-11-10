const user = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 12
}

const handler = {
    get(target, property){
        console.log(`The Property ${property} has been read`);
        return target[property]
    },

    set(target, property, value){
        if(property === "age"){
            if(typeof value !== "number"){
                throw new Error("Age must be a number")
            }
            if(value < 18){
                throw new Error("User must be 18 and over")
            }
        }
    }
}

const proxyUser = new Proxy(user, handler);

console.log(proxyUser.firstName)

console.log(proxyUser.age = 20)

function add(a, b){
    return a+b;
}

const proxyFunction = new Proxy(add, {
    apply(target, thisArg, args){
        if(args.some(isNaN)){
            throw new TypeError("All arguments must be numbers")
        }

        return Reflect.apply(target, thisArg, args)
    }
})

console.log(proxyFunction(12, 2))

