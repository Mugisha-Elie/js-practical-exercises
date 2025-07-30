function wordCount(str){

    let isCount = 0;
    let count = str.split(" ").map((el)=>{
        if(el.includes("is")){
            isCount += 1;
        }
        return isCount;
    });

    
    return isCount;

}

console.log(wordCount("This is island"));