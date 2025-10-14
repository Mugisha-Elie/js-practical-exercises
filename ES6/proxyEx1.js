const user = {
    firstname: "James", 
    lastname: "foxx",
    email: "jamiefoxx@gmail.com"
}

const handler = {
    get(target, property){
        console.log(`Property: ${property} has been read`);
        return target[property]
    }
}

const proxy = new Proxy(user, handler);

console.log(proxy.firstname);