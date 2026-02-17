function getFastPosts(){
    return Promise.any([
        fetch("https://dummyjson.com/posts"),
        fetch("https://this-may-not-exist.com/posts"),
        fetch("https://jsonplaceholder.typicode.com/posts")
    ])
}




getFastPosts()
.then(response => {
    if(!response.ok){
        throw new Error(`HTTP Error ${response.status} ${response.statusText}`)
    }

    return response.json();
})
.then(result => console.log(result))
.catch(error => {
    console.log(error.message);
})