function hero(bullets, dragons){
    return dragons * 2 > bullets ? false : true
}

console.log((hero(10, 5)));
console.log((hero(7, 4)));