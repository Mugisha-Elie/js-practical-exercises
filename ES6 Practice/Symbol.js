const sym = Symbol("example")
console.log(sym.toString());

console.log(typeof sym)



{
  const sym2 = Symbol("example")  
  const citizenId = Symbol.for("Citizen Number");
  console.log(Symbol.keyFor(citizenId))
  console.log(Symbol.for("Citizen Number"))
}
// console.log(Symbol.keyFor("citizenId"));


let statuses = {
	OPEN: Symbol('Open'),
	IN_PROGRESS: Symbol('In progress'),
	COMPLETED: Symbol('Completed'),
	HOLD: Symbol('On hold'),
	CANCELED: Symbol('Canceled')
};

const taskStatus = statuses.COMPLETED

if(taskStatus == "COMPLETE"){
    console.log("The task is done")
}else{
    console.log("The task is still pending")
}

if(taskStatus === statuses.COMPLETE){
    console.log("The task is done")
}else{
    console.log("The task is still pending")
}


let status = Symbol('status');

let task = {
	[status]: statuses.OPEN,
	description: 'LEarn ES6 Symbol'
}

if(task[status] === statuses.OPEN){
    console.log(task.description)
}else{
    console.log("Task not open yet")
}

console.log(task)
console.log(Object.keys(task))
console.log(Object.getOwnPropertyNames(task))
console.log(Object.getOwnPropertySymbols(task))
