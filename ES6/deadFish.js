function parse( data )
{
    let value = 0;
    const result = [];
    
    data = data.split("");
    for(let i=0; i<data.length; i++){
        if(data[i] === "i"){
            value++
        }
        if(data[i] === "d"){
            value--
        }
        if(data[i] === "o"){
            result.push(value)
        }
        if(data[i] === "s"){
            value = Math.pow(value, 2)
        }
    }
    return result;
}

console.log(parse("iiioxxdso"))
