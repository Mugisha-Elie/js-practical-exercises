const formula = document.getElementById("formula");
const gt3 = document.getElementById("gt3");
const imageContainer = document.getElementById("imageContainer");

let activeController = null

formula.addEventListener("click", () => {
  
  if(activeController){
    activeController.abort();
  }

  activeController = new AbortController();
  const currentSignal = activeController.signal;

  new Promise( resolve => setTimeout(resolve, 500))
    .then(() => {
      if(currentSignal.aborted){
        console.log("F1 Image cancelled");
        return;
      }
      imageContainer.style.backgroundImage = "url('./images/f1.jpg')";
      imageContainer.classList.add("bg-cover")
    });
});


gt3.addEventListener("click", () => {

  if(activeController){
    activeController.abort();
  }

  activeController = new AbortController();
  const currentSignal = activeController.signal;
  
  new Promise(resolve => setTimeout(resolve, 3000))
    .then(() => {
      if(currentSignal.aborted){
        console.log("GT3 Image Aborted");
        return;
      }
      imageContainer.style.backgroundImage = "url('./images/Nissan.jpeg')";
      imageContainer.classList.add("bg-cover")
    });
});