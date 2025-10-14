const obj = {
    name : "Bruno",
    age: 34,
    born: "34 years ago",

    [Symbol.iterator](){
        let elems = Object.entries(this);
        let curr = 0;

        return {
            next(){
                if(curr < elems.length){
                    let result = {value: elems[curr++], done: false};
                    return result;
                }
                return {value: undefined, done: true}
            }
        }


    }
}

for(let prop of obj){
    console.log(prop)
}