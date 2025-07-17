function filterOdds(obj){
    let odds = {};
    for(let key in obj){
        if(obj[key] % 2 != 0){
            odds[key] = obj[key];
        }
    }
    return odds;
}

console.log(filterOdds({a:2,b:3}));