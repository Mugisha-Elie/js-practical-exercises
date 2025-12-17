function findNextSquare(sq) {
    if(!Number.isInteger(Math.sqrt(sq))) return -1

    let start = sq + 1;
    while(true){
        if (Number.isInteger(Math.sqrt(start))){
            return start;
        }else{
            start++;
        }
    }
}

console.log(findNextSquare(144))