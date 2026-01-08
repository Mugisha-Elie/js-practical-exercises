const formula = document.getElementById("formula");
const gt3 = document.getElementById("gt3");
const imageContainer = document.getElementById("imageContainer");

formula.addEventListener("click", () => {
  
  new Promise( resolve => setTimeout(resolve, 500))
    .then(() => {
      imageContainer.style.backgroundImage = "url('./images/f1.jpg')";
      imageContainer.classList.add("bg-cover")
    });
});


gt3.addEventListener("click", () => {
  
  new Promise(resolve => setTimeout(resolve, 5000))
    .then(() => {
      imageContainer.style.backgroundImage = "url('./images/Nissan.jpeg')";
      imageContainer.classList.add("bg-cover")
    });
});