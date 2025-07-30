function replacing(orgStr,repStr, rep){
let index = orgStr.split(" ").findIndex((c)=>c===repStr);
let newStr = orgStr.split(" ").toSpliced(index,1,rep);
return "Transformed: "+ orgStr+ " to " +newStr.join(" ");
}

console.log(replacing("Good morning", "morning", "evening"));