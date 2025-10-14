const obj = {
    name : "Bruno",
    age: 34,
    born: "34 years ago",

    *[Symbol.iterator](){
        for(let i=0; i<Object.entries(obj).length; i++){
            yield Object.entries(obj)[i];
        }
    }


}

for(let prop of obj){
    console.log(prop);
}
