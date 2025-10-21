function parse( data )
{
    let value = 0;
    const result = [];

    // const result = data.split("").map(char => {
    //     if(char === "i"){
    //         count++;
    //     }else{

    //     }
    //     return count
    // })
    
    data = data.split("");
    for(let i=0; i<data.length; i++){
        if(data[i] === "i"){
            value++
        }else if(data[i] === "s"){
            value *= value;
        }else if(data[i] === "d"){
            value--;
        }else if(data[i] === "o"){
            result.push(value)
        }
    }
    return result;
}

console.log(parse("iiioxxdso"))
