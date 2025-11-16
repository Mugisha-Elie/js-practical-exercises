function threeWishes(parcel, wish1, wish2, wish3) {
    let wishes = Array.from(arguments).slice(1);
    if(wishes.length > 3 || wishes.join(" ").split(" ").includes("wishes") || wishes.join(" ").split(" ").includes("wish") ){
        return [];
    }
    wishes.forEach(wish => {
        let quantity = wish.split("").filter(char => !isNaN(Number(char))).join("").trim()
        let item = wish.slice(wish.indexOf(quantity) + 1).trim();
        let singleItem = item.endsWith("s") ? quantity > 1 ? item.replace(/s$/, "") : item : item;

        if(!parcel.includes(singleItem)){
            for(let i=0; i<quantity; i++){
                parcel.push(singleItem);
            }
        }else{
           let indexToAddAfter = parcel.lastIndexOf(singleItem)
           for(let i=0; i<quantity; i++){
                parcel.splice(indexToAddAfter, 0, singleItem)
           }
        }
        
    })
    return parcel;
}

console.log(threeWishes(["gold coin","silver coin", "food", "food", "food", "food","book","book", "weapon"], "I want 5 gold coins", "I want 3 wishes", "I want 1 wish",))

// const arr = ["I want 5 gold coins"];
// arr.forEach(elem => {
//     let q = elem.split("").filter(char => !isNaN(Number(char))).join("").trim()
//     console.log(q)
// })



