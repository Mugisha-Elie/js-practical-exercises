function findGlasses(arr){
  let p = /o([^o]*)o/gi;
  return arr.map(word => p.test(word)).filter(word => word === true).length;
}

console.log(findGlasses(["phone", "O-O", "coins", "keys"]));
console.log(findGlasses(["floor","the floor again","pockets","bed","cabinet","the top of my head O-O"]));
console.log(findGlasses(["O--#--O", "dustO---Odust", "more dust"]));