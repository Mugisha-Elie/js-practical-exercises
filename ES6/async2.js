async function sayHi(name){
    return new Promise((res, rej)=>{
        setTimeout(()=>
            {
                rej(`Hi ${name}`)
            }, 2000)
    })
}

const hi = await sayHi("Junior").then(data => console.log(data), data => console.log(`rejected: ${data}`)).catch((err) => console.log(`rejected by catch: ${err}`))
console.log(hi);
