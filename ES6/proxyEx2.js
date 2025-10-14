const user = {
    name: `Alice`, 
    age: 30,
};

const validationHandler = {
    set(target, prop, value){
        if(prop === 'age'){
            if(typeof value !== `number` || value < 0){
                throw new TypeError(`Age must be a positive number`);
            }
        }
        target[prop] = value;
        return true;
    }
}

const userProxy = new Proxy(user, validationHandler);

console.log(user.age);
user.age = "thirty";
console.log(user.age);

try{
    userProxy.age = "Forty";
}catch(e){
    console.log(e.message);
}

userProxy.age = 40;
console.log(user);