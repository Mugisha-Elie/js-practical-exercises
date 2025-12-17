// function generateName(callback){
//     const names = ["Jonas", "Katt", "Djimoun" ,"Wolf"];

//     setTimeout(() => {
//         const randomName = names[Math.floor(Math.random() * names.length)]
//         callback(randomName)
//     }, 2000)
// }

// function handleName(name){
//     console.log("The lucky name is:", name)
// }

// generateName(handleName);


function generateName(){
    return new Promise(resolve => {
        const names = ["Jonas", "Katt", "Djimoun" ,"Wolf"];
        setTimeout(() => {
            const randomName = names[Math.floor(Math.random() * names.length)]
            resolve(randomName)
        }, 2000)
    })
}

generateName()
    .then((data) => console.log("The random name is", data))