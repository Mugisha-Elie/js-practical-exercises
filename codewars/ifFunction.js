function _if(bool, func1, func2) {
  return bool ? func1() : func2()
}

function one(){
    return "I'am function one"
}

function two(){
    return "I'm function two"
}

console.log(_if(false, one, two))