class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
    }
    getSummary(){
        return `${this.title} by ${this.author}`;
    }

    static describeType(){
        return "This is a class for managing book instances.";
    }
}

console.log(Book.describeType());

const b = new Book("1984", "Orwell");
const c = new Book("1984", "Orwell");
console.log(b.getSummary() === c.getSummary());
console.log(b.title);
console.log(b.getSummary());
// console.log(b.describeType())



class Rectangle{
    #width
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        return this.width * this.height;
    }

    static MAX_INSTANCES = 100;

    // get width(){
    //     return this.#width;
    // }
}

const r = new Rectangle(3,7); //Type error
console.log(r.width);
console.log(r.getArea());
// console.log(r.MAX_INSTANCES);
console.log(Rectangle.MAX_INSTANCES)
class Magazine extends Book{
    constructor(title, author, issueNumber){
        super(title, author);
        this.issueNumber = issueNumber;
    }

    getSummary(){
        return `${super.getSummary()} (Issue #${this.issueNumber})`;
    }
}

const m = new Magazine("alchemist", "Guy", 1222);
console.log(m.getSummary());
console.log(Object.getPrototypeOf(m));

class DateMagazine extends Magazine{}

const dm = new DateMagazine("weekly");
console.log(dm.getSummary())


console.log(Object.getPrototypeOf(dm));

console.log(Object.getPrototypeOf(Magazine));
console.log(Object.getPrototypeOf(DateMagazine));

console.log(dm instanceof DateMagazine);
console.log(dm instanceof Magazine);
console.log(dm instanceof Book);