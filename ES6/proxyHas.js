const user = {
    name: "Mothew",
    age: 18, 
}

const handler = {
    has(target, prop){
        if(prop === "age"){
            throw new TypeError(`You can't access the ${prop}`);
        
        }
        return prop in target;
    }
}

const userProxy = new Proxy(user, handler);

try{
    console.log("age" in userProxy);
}catch(e){
    console.log(`${e.message} using the Proxy`);
}