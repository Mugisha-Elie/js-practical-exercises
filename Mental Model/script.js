let myParagraph = document.getElementById("myParagraph").innerText.toLowerCase().split(" ");
let div = document.getElementById("myWordCloud");
let uniqueWords = [];
let wordCount = {};
let count = 0;

myParagraph.forEach(word => {
    if(!uniqueWords.includes(word)){
        uniqueWords.push(word);
    }
});

uniqueWords.map(word => {
    wordCount[word] = myParagraph.filter(w => w === word).length;
})

let objArr = Object.entries(wordCount).sort(([,a], [,b]) => b - a)
objArr = objArr.slice(0,13);

let words = objArr.map(arr => arr[0]);

console.log(objArr);

let p = document.createElement("p");

words.map((word, index) => {
    let span = document.createElement("span")
    span.textContent = ` ${word} `;
    p.appendChild(span);
    
    
});

div.appendChild(p);





