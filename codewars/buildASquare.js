function generateShape(integer){
    const row = integer;
    const col = integer;
    let colchar = ""

    for(let i = 0; i<row; i++){
        for(let j = 0; j<col; j++){
            colchar += "+";
        }
        colchar += "\n";
    }

    return colchar

    
}

console.log(generateShape(8))