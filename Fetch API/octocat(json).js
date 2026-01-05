// async function getData(url){
//     const response = await fetch(url);

//     if(response.ok){
//         const data = await response.json();
//         const following = await fetch(data.followers_url);

//         // console.log(data)
        
//         if(following.ok){
//             const following_data = await following.json();
//             console.log(following_data[0])
//         }
//     }else{
//         console.log(response.status)
//     }
// }

function getData(url){
    return fetch(url)
}

getData("https://api.github.com/users/octocat")
.then(response => response.json())
.then(data => fetch(data.followers_url))
.then(followers => followers.json())
.then(followersData => console.log(followersData[0]))
.catch(error => console.log(error));
