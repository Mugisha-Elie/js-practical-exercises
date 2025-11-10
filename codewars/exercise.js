function predictDay(name){
    return new Promise((res, rej) => {
        setTimeout(()=>{
            if(name){
                res(`Hi ${name}, Process Starting`)
            }else{
                rej("Processing Failed, Missing information")
            }
        }, 2000)
        setTimeout(()=>{
            if(name){
                res(`Hacking NASA for information on our planet's position in space...`)
            }
            setTimeout(()=>{
            if(name){
                res(`We are on Monday!`)
            }
        }, 4000)
        }, 3000)
        
    })
}

predictDay("David")
.then((data) => console.log(data))
.catch(error => console.log(error))