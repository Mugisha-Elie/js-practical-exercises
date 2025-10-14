//The object we are protecting
const user = {
    name: 'Alex',
    age: 30,
    country: 'US'
}

//The proxy handler
const validationHandler = {
    set(target, prop, value, receiver){
        if(prop === 'age'){
            if(typeof value !== 'number' || value <= 0){
                throw new TypeError(`Cannot set age to invalid value: ${value}`)
            }
        }

        return Reflect.set(target, prop, value, receiver)
        //target[prop] = value;
    }
}

const userProxy = new Proxy(user, validationHandler);

try{
    userProxy.age = "Ten";
    console.log(user)
}catch(e){
    console.log(e.message);
}

