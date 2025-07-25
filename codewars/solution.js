function solution(string){
  let str = string.split("");
  str = str.map((x, index)=>{
    if(x === x.toUpperCase()){
        return x =" "+x;
    }else{
        return x;
    }
  });
  return str.join("");
  }




let str = "camelCasing";
console.log(solution(str));