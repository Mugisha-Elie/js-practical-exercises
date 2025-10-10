function processFile(file){
    return new Promise((resolve, reject) => {
        console.log("Checking File type ....");
        setTimeout(()=>{
            if(file.endsWith("json")){
                resolve("JSON File confirmed");
            }else{
                reject(new Error(`Invalid File, ${file} not supported`));
            }
        }, 2000);
    })
}

processFile("package.json")
.then((data) => {
    console.log(`Submitted:`, data);
}).catch((error) => {
    console.log("Error Submitting:", error.message);
}).finally(()=>{
    console.log("Thank You !!!");
})