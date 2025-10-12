var a = [];

Array.prototype.first = function(){
    return this[0];
}

Array.prototype.last = function(){
    return this.at(-1);
}

console.log(a.first());
console.log(a.last());