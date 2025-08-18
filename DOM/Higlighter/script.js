let input = document.getElementById("searchbar");
let searchbutton = document.getElementById("search-button");
let paragraph = document.getElementById("paragraph");
let text = input.value;
let message = ""
searchbutton.dataset.id = 0;

function notification(message){
    
    if(!("Notification" in window)){
        alert("Enter valid text to search");
    }else if(Notification.permission === "granted"){
        const notification = new Notification(message);

    }else if(Notification.permission !== "denied"){
        Notification.requestPermission().then((permission) => {
            const notification = new Notification(message);
        })
    }

}

function findAndHightlight(input){
    let text = input.value;
    let paragraphArr = paragraph.innerHTML.split(" ");
    let newParagraph = paragraphArr.map((word)=>{
        if(word.toLowerCase() === text.toLowerCase()){
            word = word.replace(word, `<span class="highlight">${word}</span>`)
            return word;
        }else{
            
            return word;
        }
    })

    paragraph.innerHTML = newParagraph.join(" ")


    
    
}


searchbutton.addEventListener("click", (event)=>{
    let id = event.target.dataset.id;
    if(id === "0"){
        if(input.value === ""){
            notification("Invalid text");
        }else{
            findAndHightlight(input);
        }
    }
});
