let rateButton = document.querySelector("#btnRate");
let bodyEl = document.body;
let output = document.createElement("p");
    bodyEl.appendChild(output);

rateButton.addEventListener('click', ()=>{
    let rates = document.getElementsByName("rate");

    const nonChecked = Array.of(...rates).filter(el => el.checked);

    if(nonChecked.length === 0){
        alert("Try rating us first genius");
        
    }
    

    rates.forEach(rate => {
        if(rate.checked){
            output.innerText = `You Selected: ${rate.value}`;
        }
        
    });
});

let div2 = document.createDocumentFragment();

let tNode = document.createTextNode("Example text for this text node");

bodyEl.appendChild(tNode);