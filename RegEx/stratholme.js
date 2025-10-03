function purifyTheStratholme(s) {
 return s.replace(/.?i+.?/gi, "")
}

console.log(purifyTheStratholme("STRING"));