class Item{
    constructor(id){
        this.id = id;
    }
}

// const inst = new Item(12);
// console.log(inst);

const handler = {
    construct(target, argumentsList, newTarget){
        const newInstance = Reflect.construct(target, argumentsList, newTarget);

        newInstance.createdAt = new Date().toLocaleString();
        return newInstance;
    }
}

const proxied = new Proxy(Item, handler);

const newInst = new proxied(12);
console.log(newInst);