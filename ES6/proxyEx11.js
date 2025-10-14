const user = {
    name: "Chuck",
}

const handler = {
    get(target, prop, value){
        if(!(prop in target)){
            throw new ReferenceError(`Value not found`);
        }
        return target[prop];
    }
}

const userProxy = new Proxy(user, handler);

try{
    console.log(userProxy["age"]);
}catch(e){
    console.log(e.message);
}