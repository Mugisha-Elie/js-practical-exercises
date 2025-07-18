let user = {
    name : "Yves",
    age: 30,
    occupation : "Software Engineer",
    hobbies : ["reading", "hiking", "coding"],
    exists : true,
    goesToGYm: "never",
};

for (let key in user){
    console.log(`${key} : ${user[key]}`);
}