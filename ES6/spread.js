const spr = [1,2,3,4,5];
let spreaded = [...spr];
let obj = {
    a: [...spr]
}
console.log(spreaded);
console.log(obj);

function NoOfElements(...elems){
    return elems.length;
}

console.log(NoOfElements(1,2,3,4,5,6,7,8))