function rot13(message){
    const caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lows = "abcdefghijklmnopqrstuvwxyz";

    let newMess = message.split("").map((char)=>{
        

        if(caps.includes(char)){
            let ogIndex = caps.indexOf(char);
            let newIndex = (ogIndex + 13) % 26;
            return caps[newIndex];
            
            
        }else if( lows.includes(char)){
            let ogIndex = lows.indexOf(char);
            let newIndex = (ogIndex + 13) % 26;
            return lows[newIndex];
            
        }else{
            return char;
        }
    });

    return newMess.join("");

    
  
}

console.log(rot13("AbZ 1"))