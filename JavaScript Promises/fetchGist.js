// function fetchGist(){
//     return new Promise((res, rej) => {
//         const response = fetch("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/91a18e4ce56e769ac298b23ad34fdb86d8b6adab/gistfile1.txt")
//         if(response.ok){
//             const data = response.json()
//             res(data)
//         }else{
//             rej("Error fetching gist")
//         }
//     })
// }

async function fetchGist(){
    return await fetch("https://gist.githubusercontent.com/Mugisha-Elie/4c176028b4bc43c2d34eecde175bf9f0/raw/74e16b33711d25b0dc066a35f2d01b872e1641a6/gistfile1.json")
    .then(response => response.json())
    .catch(error => error)
}

fetchGist()
    .then(data => console.log(data))


    