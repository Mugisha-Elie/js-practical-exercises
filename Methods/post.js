const postBtn = document.getElementById("submit");
const titleInput = document.getElementById("titleInput");
const authorInput = document.getElementById("authorInput");


postBtn.addEventListener("click", (event) => {

    event.preventDefault()

    const title = titleInput.value;
    const author = authorInput.value;

    const xhr = new XMLHttpRequest();

    const newPost = {
        title,
        author
    }


    xhr.open("POST", "http://localhost:3000/posts/");

    xhr.setRequestHeader("Content-Type", "application/json")

    xhr.send(JSON.stringify(newPost));

    xhr.onload = () => {
        if(xhr.status === 201){
            console.log("Post posted successfully");
            console.log(xhr.response)
        }
    }
})

