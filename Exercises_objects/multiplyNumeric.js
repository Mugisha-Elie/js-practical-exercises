function multiplyNumeric(obj){
    for(let key in obj){
        if(!parseInt(obj[key])){
            return obj[key];
            
        }else{
            obj[key] *= 2;
        }
    }
    return obj;
}

let menu = {
  width: 20.1,
  height: 30.3,
  title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

