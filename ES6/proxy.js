const user = {name: "Jonas"};

const userProxy = new Proxy(user, {});

console.log(userProxy);