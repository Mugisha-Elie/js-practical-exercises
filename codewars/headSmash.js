function headSmash(array) {
  
  if(array.length === 0){
    return "Gym is empty";
  }else if(!Array.isArray(array)){
    return "This isn't the gym!!"
  }
  
  return array.map(line => {
    return line.split("").map(char=>{
        if(char === "O"){
            char = " ";
            return char.join
        }else{
            return char.join
        }
    })
  })
}


console.log(headSmash(
    [
    '*****************************************',
    '**  _O_   *   _O_   *   _O_   *   _O_  **',
    '** C(.)J  *  /(.)J  *  /(.)J  *  C(.)J **',
    '** _/ |_  *  _| |_  *  _( )_  *  _/ )_ *']))