function fetchGithubName(username){
    return new Promise((resolve, reject) => {
        const response = fetch(`https://docs.github.com/en/rest/users/${username}`)
        if(response.ok){
            const user = response.json();
            resolve(user.name)
        }else{
            reject(`Error finding the user with username: ${username}`)
        }
    })
}

fetchGithubName("Mugisha-Elie")
    .then((data) => console.log("Fullname: ", data))
    .catch(errMsg => console.log(errMsg))