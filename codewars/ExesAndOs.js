function XO(str) {
    const count = { x: 0, o: 0};
    str.toLowerCase().split("").forEach(char => {
        if(char === "x") count.x++;
        if(char === "o") count.o++;
    })
    return count.x === count.o
}

console.log(XO("xoXoxo"))