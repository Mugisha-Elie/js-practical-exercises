const userProfile = {
    name: 'Samus',
    role: 'Hunter'
};

const handler = {
    get(target, property, receiver){
        if(!(property in target)){
            throw new TypeError(`Come on! Use we don't have ${property}`);
        }

        return Reflect.get(target, property, receiver);
        // return target[property];
    }
}

const userProxy = new Proxy(userProfile, handler);

try{
    console.log(userProxy.james);
}catch(e){
    console.log(e.message);
}