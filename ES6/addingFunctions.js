function one(callback){
    callback(callback);
    return 1;
}

function two(){
    return 2
}

function add(a, b){
    return a() + b()
}


console.log(add(one, two));