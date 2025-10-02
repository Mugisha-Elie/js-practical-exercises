const html = "<a href='link.html'>Link</a>";
const p = "<p>Element</p>";

const pattern = /<(\w+)\s*[^>]*>(.*?)<\/\1>/;

const match = pattern.exec(html);

console.log(match);
console.log(match[0]);
console.log(match[1]);
console.log(match[2]);
console.log(match[3]);