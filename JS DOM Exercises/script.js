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

let div2 = document.createElement("div");
div2.setAttribute("id", "colorBox");
div2.setAttribute("style", "margin-top: 10px; height: 100px; width: 100px; background-color: lightgray;")

bodyEl.appendChild(div2);

let p2 = document.createElement("p");
p2.textContent = "I am a message";
p2.setAttribute("id", "message" );

bodyEl.appendChild(p2);

let button6 = document.createElement("button");
button6.textContent = "Change Both"
button6.setAttribute("id", "triggerButton");

bodyEl.appendChild(button6);

const myChange = new Event("click");

div2.addEventListener('click', ()=>{
    div2.style.backgroundColor = "lightBlue";
});

p2.addEventListener('click', ()=>{
    p2.textContent = "I have changed";
})

button6.addEventListener("click", ()=>{
    div2.dispatchEvent(myChange);
    p2.dispatchEvent(myChange);
});





const div3 = document.createElement("div");
div3.setAttribute("class", "colorBox3");

bodyEl.appendChild(div3);

const div4 = document.createElement("div");
div4.setAttribute("class", "colorBox4");

div3.appendChild(div4);

const div5 = document.createElement("div");
div5.setAttribute("class", "colorBox5");

div4.appendChild(div5);

const div6 = document.createElement("div");
div6.setAttribute("class", "colorBox6");

div5.appendChild(div6);



const button7 = document.createElement("button");
button7.textContent = "Target";
button7.setAttribute("class", "button7");
button7.dataset.id = 0;

div6.appendChild(button7);

const div7 = document.createElement("div");
div7.setAttribute("id", "parent-div");

const p3 = document.createElement("p");
p3.setAttribute("id", "child-p");
p3.textContent = "Hover over me!";

div7.appendChild(p3);
bodyEl.appendChild(div7);

// div7.addEventListener('mouseover', ()=>{
//     console.log("Mouseover event on the Parent Div")
// })

// p3.addEventListener('mouseover', ()=>{
//     console.log("Mouseover event on the Child P")
// })


button7.addEventListener("click", (event)=>{
    

        if(event.target.dataset.id === "0"){
            setTimeout(()=>{
        button7.classList.add("button-shadow");
        alert("Event reached at target phase")
        button8.style.opacity = "100%";
        button7.style.opacity = "30%";
        }, 2500);
        }
    
}, true)

div3.addEventListener("click", (event)=>{
    
    if(event.target.dataset.id === "0"){
            setTimeout(()=>{
        div3.classList.add("div3-color");
    }, 500);
        }

}, true)

div4.addEventListener("click", (event)=>{
    if(event.target.dataset.id === "0"){
    setTimeout(()=>{
        div4.classList.add("div4-color");
    }, 1000);
}
}, true)

div5.addEventListener("click", (event)=>{
    if(event.target.dataset.id === "0"){
    setTimeout(()=>{
        div5.classList.add("div5-color");
    }, 1500);
}
}, true)

div6.addEventListener("click", (event)=>{
    if(event.target.dataset.id === "0"){
    setTimeout(()=>{
        div6.style.borderColor = "yellow";
    }, 2000);
}
})

div3.addEventListener("click", (event)=>{
    if(event.target.dataset.id === 1){
    setTimeout(()=>{
        div3.classList.add("div3-color");
    }, 500);
}
})

div4.addEventListener("click", (event)=>{
    if(event.target.dataset.id === 1){
    setTimeout(()=>{
        div4.classList.add("div4-color");
    }, 1000);
}
})

div5.addEventListener("click", (event)=>{
    if(event.target.dataset.id === 1){
    setTimeout(()=>{
        div5.classList.add("div5-color");
    }, 1500);
}
})

div6.addEventListener("click", ()=>{
    if(event.target.dataset.id === 1){
    setTimeout(()=>{
        div6.style.borderColor = "yellow";
    }, 2000);
}
})


const button8 = document.createElement("button");
button8.textContent = "Bubble";
button8.dataset.id = 1;

button8.classList.add("bubble-button");

div6.appendChild(button8);

// button8.addEventListener('click', (event)=>{
//     if(event.target.dataset.id === "1"){
//         alert("Feature Coming soon");
//     }
// });

div6.addEventListener('click', (event)=>{
    if(event.target.dataset.id === "1"){
        setTimeout(()=>{
       div6.style.borderColor = "lightgrey" ;
        }
        ,500)
    }
});

div5.addEventListener('click', (event)=>{
    if(event.target.dataset.id === "1"){
        setTimeout(()=>{
       div5.style.borderColor = "lightgrey" ;
        }
        ,1000)
    }
    
})

div4.addEventListener('click', (event)=>{
    if(event.target.dataset.id === "1"){
        setTimeout(()=>{
       div4.style.borderColor = "lightgrey" ;
        }
        ,1500)
    }
})

div3.addEventListener('click', (event)=>{
    if(event.target.dataset.id === "1"){
        setTimeout(()=>{
       div3.style.borderColor = "lightgrey" ;
        }
        ,2000)
    }
})

button8.addEventListener('click', (event)=>{
    if(event.target.dataset.id === "1"){
        setTimeout(()=>{
        button8.classList.add("button-shadow");
        alert("Event reached at target phase")
        button7.style.opacity = "100%";
        button8.style.opacity = "30%";
        }
        ,3000)
    }
});

