// async function getData(){
//     const data = await Promise.resolve("data")
//     return data;
    
// }

// const data = await getData();
// console.log(data)

function getFastPosts() {
  return Promise.race([
    fetch("https://dummyjson.com/posts").then(res => res.json()),
    fetch("https://this-may-not-exist.com/posts").then(res => res.json(), err => err.message),
    fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
  ]);
}

getFastPosts().then(posts => {
  console.log(posts);
});