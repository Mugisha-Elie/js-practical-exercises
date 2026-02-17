function getData(){
    return new Promise((resolve, reject) => resolve("data"))
};

getData()
.then(data => console.log("data"))
.catch(error => console.log("error"))