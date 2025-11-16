function bingo(ticket, win){
    let wins = 0;
    let newArr = []
    let result = ticket.map(subArr => {
        let str = subArr.filter(elem => typeof elem === "string").join("");
        let code = Number(subArr.filter(elem => typeof elem === "number").join(""))
        let winArr = str.split("").filter(c => str.charCodeAt(str.indexOf(c)) === code).join("") 
        return winArr 
    });

    result.forEach(elem => {
        if(elem){
            wins += 1
        }
    })

    
    return wins >= win ? "Winner" : "Looser";
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2))