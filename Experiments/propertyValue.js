function makeUser(name, age) {
  return {
    name,
    age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
console.log(user.age); // John