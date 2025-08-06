const mainTitleElement = document.getElementById("main-title");
const bodyEl = document.body;
console.log(mainTitleElement);

mainTitleElement.textContent = "DOM is Fun!";
mainTitleElement.innerHTML = `<em style="color: red">DOM</em> is Fun!`;
// mainTitleElement.textContent = `<em style="color: red">DOM</em> is Fun!`;
// mainTitleElement.outerHTML = `<div style="background-color: yellow">`+mainTitleElement.textContent+`</div>`


const infoElements = document.getElementsByClassName("info-text");
console.log(infoElements) 

let infoArr = Array.from(infoElements);
console.log(infoArr);

infoArr = infoArr.map((el)=>{
    el.setAttribute('style', "background-color: yellow");
});

let allVariables = document.querySelectorAll(".info-text")

allVariables.forEach(p => {
    p.textContent = "This paragraph has been updated!"
    p.style.color = "red"
    
});

let listItem = document.querySelector("#target-item");
console.log(listItem);

let firstItem = document.querySelector("li");
console.log(firstItem);

let ulChildren = [...document.querySelector("ul").children];

console.log([ulChildren]);

ulChildren.forEach(child => child.setAttribute("class", "list-item" ));

let listItems = document.querySelectorAll('.list-item');
console.log(listItems);

let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent = "Fourth item";

ul.appendChild(li);



listItems.forEach(li => li.textContent = "I've been updated with forEach");
listItems.forEach(li => {
    if(Array.from(listItems).indexOf(li) % 2 === 0){
    return li.style.backgroundColor = "lightgray";
    }
});

let button = document.createElement("button");
let div = document.createElement("div");

button.textContent = "Change Color";
button.setAttribute("id", "changeColorBtn");

div.setAttribute("id", "targetDiv");
div.setAttribute("style", "margin-top: 10px; width: 100px; height: 100px; background-color: blue;");

bodyEl.appendChild(button);
bodyEl.appendChild(div);

function changeDivColor(){
    div.style.backgroundColor = "green";
}

button.addEventListener("click", changeDivColor);

let p = document.createElement("p");
let button2 = document.createElement("button");

p.setAttribute("id", "myParagraph");
p.textContent = "This is the paragraph to highlight.";

button2.setAttribute("id", "toggleBtn");
button2.textContent ="Toggle Highlight";
button2.setAttribute("style", "margin-bottom: 10px;")

button2.addEventListener("click", ()=>{
    p.classList.toggle("highlight");
});

bodyEl.appendChild(p);
bodyEl.appendChild(button2);

let images = ["images/random1.jpeg", "images/random2.jpeg", "images/random3.jpeg"];
let imageIndex = 0;



let img = document.createElement("img");
img.setAttribute("id", "myImage");
img.setAttribute("src", images[imageIndex]);
img.setAttribute("alt", "A placeholder image");
img.classList.add("pos");

function changeIndex(){
    if(imageIndex === images.length-1){
        imageIndex = 0;
    }else{
        imageIndex ++;
    }

    img.setAttribute("src", images[imageIndex]);
    
}


let button3 = document.createElement("button");
button3.setAttribute("id", "changeImageBtn");
button3.textContent = "Change Image";

let breakL = document.createElement("br");


bodyEl.appendChild(breakL);

bodyEl.appendChild(img);

bodyEl.appendChild(breakL);
bodyEl.appendChild(button3);

button3.addEventListener("click", changeIndex);

let button4 = document.createElement("Button");
button4.textContent = "Kill the alert button";
button4.setAttribute("style", "display: block; margin-top: 30px; margin-bottom: 10px;")

bodyEl.appendChild(button4);

let button5 = document.createElement("button");
button5.textContent = "Alert";

bodyEl.appendChild(button5)

function alertUser(){
    alert("Hoooowdy!!!");
}

let listenerActive = true;


button5.addEventListener("click", alertUser);
button4.addEventListener("click", ()=>{
    if(listenerActive){
        button5.removeEventListener("click", alertUser);
        listenerActive = false;
        alert("The alert button has been killed")
    }else{
        alert("Come on, you can't kill it twice it's already dead 😅");
    }
});


document.addEventListener('click', function () {
   console.log('The document was clicked');
});

document.body.addEventListener('click', function () {
    console.log('The document body was clicked');
});


