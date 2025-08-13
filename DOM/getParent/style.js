let note = document.querySelector(".note");
console.log(note.parentNode);

let currentChild = document.querySelector(".current");
let firstChild = document.getElementById("first-child");
console.log(currentChild.nextElementSibling.textContent);
console.log(currentChild.textContent);
console.log(currentChild.previousElementSibling.textContent);



function getSiblings(e){
    let siblings = [];
    if(!e.parentNode){
        return siblings;
    }
    let sibling = e.parentNode.firstChild;

    while(sibling){
        if(sibling.nodeType === 1 && sibling !== e){
            siblings.push(sibling);
        }
        sibling = sibling.nextSibling;
    }
    return siblings;
};

let siblings = getSiblings(currentChild);
siblingText = siblings.map(e => e.innerHTML);
console.log(siblingText);