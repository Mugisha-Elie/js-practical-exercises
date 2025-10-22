function isValidWalk(walk) {
  if(walk.length !== 10){
    return false;
  }
    
    const uniqueArr = new Set(walk);

    let obj = {}
    let count = 0;

    for(let dir of uniqueArr){
        walk.forEach(d =>{
            if (dir === d){
                obj[dir] = ++count
            }
        
        })

    count = 0;
}

        const up = obj["n"] === obj["s"];
        const down = obj["e"] === obj["w"];

        if(up & down){return true}

        return false




  
}





console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']))
console.log(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))
console.log(isValidWalk(['n', 's', 'w', 'e', 'n', 's', 'n', 's', 'n', 's']))