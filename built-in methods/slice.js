function slicer(str, start, stop){
return str.split("").slice(start, stop).join("")
}

console.log(slicer("JavaScript", 4, 10));