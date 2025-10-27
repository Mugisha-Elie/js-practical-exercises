async function sayHi(){
    return 'Hi';
    // return Promise.resolve('Hi')
} 

const hi = sayHi().then(console.log)

