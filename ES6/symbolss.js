let sym = Symbol("new symbol");
sym = "24"

let regSymbol = Symbol.for("mySym");


console.log(sym);
console.log(Symbol.keyFor(regSymbol));
