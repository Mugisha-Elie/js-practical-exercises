import Resource from './sharing.js';

const sharedIDAccess = Symbol.for("app_id");

const instance = new Resource("Secret Data");

console.log(instance[sharedIDAccess])
console.log(Symbol.keyFor(sharedIDAccess));

