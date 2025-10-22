function getUserInfo({name, age, country = "Unknown"} = {}){
    return `${name} (${age}) - Country: ${country}`
}

let obj = {
    name: 'James',
    age: 2,
    // country: "Kenya"
}

console.log(getUserInfo(obj))


