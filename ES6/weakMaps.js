const loginCountMap = new WeakMap();

class User{
    constructor(name){
        this.name = name;
        loginCountMap.set(this, 0);
    }

    login(){
        if(loginCountMap.has(this)){
            let count = loginCountMap.get(this);
            count++;
            loginCountMap.set(this, count);
            console.log(`${this.name} logged in. Total Logins: ${count}`);
        }
    }
}

let alice = new User('Alice');

console.log(loginCountMap);

alice.login();
alice.login();

alice = null;

console.log(loginCountMap);