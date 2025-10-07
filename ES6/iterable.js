const person = {
    name: "James",
    age: 9,

    *[Symbol.iterator](){
        const entries = Object.entries(this);

        for(const entry of entries){
            yield entries; // Yields [key, value] array pair
        }
    }
};

for(const [key, value] of person){
    console.log(`${key}: ${value}`);
}

const collection = {
    fruit: 'apple',
    spice: 'cinnamon',
    count: 5,

    *[Symbol.iterator](){
        // yield this.fruit;
        // yield this.spice;
        // yield this.count;
        const entries = Object.entries(this);

        for (const entry of entries){
            yield entry;
        }
    }
};

for(const item of collection){
    console.log(item);
}

