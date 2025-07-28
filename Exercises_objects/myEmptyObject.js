let myEmptyObject = {};

myEmptyObject.language = "JavaScript";
myEmptyObject["version"] = "ES6";

console.log("Ex 1:", myEmptyObject);
console.log(myEmptyObject.language);
console.log(myEmptyObject["version"]);

let book = {
    title: "The Great Novel",
    author: "J.K. Writer",
};

console.log(book);

book.title = "The Even Greater Novel";
console.log(book);

delete book.author;
console.log(book);

console.log(book.hasOwnProperty("title"));
console.log("title" in book);

let keyName = "publisher";

book[keyName] = "Awesome Books Inc.";
console.log(book);

