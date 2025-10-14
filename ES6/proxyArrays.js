const arr = [0, 1, 2, 3, 4];

const handler = {
    set(target, prop, value, reciever){
        if(isNaN(value)){
            throw new TypeError("Unsupported Value");
        }
        return Reflect.set(target, prop, value, reciever); 
        
    }
}

const arrProxy = new Proxy(arr, handler);

try{
    console.log(arrProxy.push(12));
}catch(e){
    console.log(e.message);
}

console.log(arr);

