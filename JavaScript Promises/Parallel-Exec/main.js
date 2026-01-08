const imageContainer = document.getElementById("imageContainer");
// let imagesObj;

// async function getImages(url){
//     try{
//         const response = await fetch(url);
//         if(response.ok){
//             imagesObj = await response.json();
//             console.log(imagesObj)
//         }else{
//             console.log("Error fetching data with status: ", response.status);
//         }
//     }catch(e){
//         console.log("An Error Occurred: ", e.message);
//     }
// }

// getImages("images.json");

Promise.all([
    fetch("./json/image1.json"),
    fetch("./json/image2.json"),
    fetch("./json/image3.json"),
    fetch("./json/image4.json"),
    fetch("./json/image5.json")
])
.then(responses => {
    return Promise.all(responses.map(res => {
     if(res.ok){
        return res.json()
    }else{
        throw new Error(`Failed to load ${res.url} status: ${res.status}`);
    }
    }))

    // return responses;
    
})
.then(data => 
    data.forEach((image) => {
        const div = document.createElement("div");
        div.classList.add(`bg-[url('${image.url}')]`, "h-50", "rounded-lg", "bg-cover")
        
        setTimeout(() => {
            imageContainer.appendChild(div);
        }, image.timeout)
    })

    // console.log(data)
)
.catch(error => console.log("Application Failed with: ", error))


