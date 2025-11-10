class User{
    constructor(name){
        this.name = name;
    }
}

const newUser = new User("JOhn")
console.log(newUser)

const classHandler = {
    construct(target, args){
        const instance = Reflect.construct(target, args);

        instance.isInitialized = true;
        instance.createdAt = new Date()

        return instance;
    }
}

const proxiedUser = new Proxy(User, classHandler);

const userFromProxy = new proxiedUser("Jane")

console.log(userFromProxy)

const obj = {
    john: {name: "John Doe"},
    lily:{name: 'Lily Bush'},
    peter:{name: 'Peter Drucker'},
    james: {name: "James Hunt"},

    *[Symbol.iterator](){
        const entries = Object.entries(this);
        for(const entry of entries){
            yield entry
        }
    }
}

for(prop of obj){
    console.log(prop)
} 