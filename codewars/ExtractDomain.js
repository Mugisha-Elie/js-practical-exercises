function domainName(url){
  const pattern = /(?<=(https:\/\/|www\.)).+?(?=\.)/g
  return url.match(pattern).join("")
}

console.log(domainName("http://www.google.co.com"))
console.log(domainName("www.codewars.com"))