let calculator = {
    value: 0,
    add: function(num){
        return this.value += num;
    },
};

calculator.add(5);
// calculator.add(6);

console.log(calculator.value);

let person = {
    firstname: "John",
    lastName: "Doe",
    fullName: function(){
        return this.firstname +" "+ this.lastName;
    },
};

console.log(person.fullName());

calculator.multiply = function(num){
    let newValue = this.value;
    return num * newValue;
};

console.log(calculator.multiply(4));
console.log(calculator.value);

let counter = {
    count: 0,
    increment: function(){
        this.count += 1;
        return this.count
    },
    reset: function(){
        this.count = 0;
        return this.count;
    },
};

counter.increment();
console.log(counter.count);
counter.reset();
console.error(counter.count);

let timer = {
    seconds: 0,
    start: function(){
        console.log("Starting timer...");
        let self = this;
        this.intervalId = setInterval(()=>{
            self.seconds++;
            console.log(`${self.seconds} seconds`);
            if(self.seconds >= 10){
                clearInterval(self.intervalId);
                console.log("Timer stopped at", self.seconds);
            }
        }, 1000);
    },
};

timer.start();
