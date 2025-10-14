const user = {
    fname: "Arnold",
    lname: "Schwarzenegger",
    age: 12,
}

const handler = {
    set(target, prop, value){
        if(prop === "age"){
            if(typeof value !== "number" || value < 0 ){
                throw new TypeError("The aiigee is not vailied!")
            }
        }
        target[prop] = value;
        return true;
    }
    
}

// const proxyArnold = new Proxy(user, handler); 
const {proxy: proxyArnold, revoke} = Proxy.revocable(user, handler);

try{
    proxyArnold.age = "Twenty";
    console.log(user);
}catch(e){
    console.log(e.message);
}

// revoke();

try{
    proxyArnold.age = "Twenty";
    console.log(user);
}catch(e){
    console.log(e.message);
}