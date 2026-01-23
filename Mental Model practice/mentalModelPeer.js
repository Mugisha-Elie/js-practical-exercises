// const numbers = [];

// async function asyncCounter(){
//     numberGenerator()
//     return numbers
// }


// function numberGenerator(){
//     let number = 0;
    
//     const intervalId = setInterval(() => {
//         numbers.push(++number)
//         console.log(number)

//         if(numbers.length === 5){
//             clearInterval(intervalId)
//         }
//     }, 1000)
    
// }

// console.log(await asyncCounter())


// let number = 0;
// const numbers = [];

// function countGenerator(){
//     let newNumber = ++number;
//     console.log(newNumber)
//     numbers.push(newNumber)
// }

// const intervalId = setInterval(countGenerator, 1000)

// if(numbers.length === 5){
//     clearInterval(intervalId)
// }

// console.log(numbers)

// const arr = []

// function counter(){

//     let counter = 0;

//     const intervalId = setInterval(() => {
//         let variable = ++counter
//         arr.push(variable)

//         if(arr.length === 5){
//             clearInterval(intervalId)
//         }
//     }, 1000);
//     return arr
// }





// function asyncCounter(){
//     return new Promise((res, rej) => {
//         res(counter())
//     })
// }

// asyncCounter()
// .then(data => console.log(data))



// function counter(){
//     const arr = [];

//     let number = 1;

//     if(arr.length === 5){
//         return arr
//     }

//     arr.push(number)
//     number++;
//     counter()

// }

// const count = counter();
// console.log(count)


function asyncCounter(){
    const arr = [];
    let counter = 0;
    return new Promise((res, rej) => {

        const intervalId = setInterval(() => {
            arr.push(++counter)
            if(arr.length === 5){
                clearInterval(intervalId)
                res(arr)
            }
        }, 1000);
        })
}

asyncCounter()
.then(data => console.log(data))
.catch(error => console.log(error))






