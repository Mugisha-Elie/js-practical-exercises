const userdata = {
    name: 'Neo',
    email: 'neo@gmail.com',
    _password: '123'
};

const hidehandler = {
    has(target, property){
        if(property.startsWith('_')){
            throw new Error("Access Denied.")
        }
        return Reflect.has(target, property);
    }
}

const publicUser = new Proxy(userdata, hidehandler);

try{
    // console.log(publicUser.hasOwnProperty("_password"));
    console.log("_password" in publicUser)
}catch(e){
    console.log(e.message);
}