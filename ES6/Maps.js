const errorData = [
    [404, "Not Found"],
    [401, "Unauthorized"],
    [500, "Internal Server Error"]
]

const errorD = new Map(errorData);
console.log(errorD);


const errorCodes = new Map();

errorCodes.set(404, "Not Found");
errorCodes.set(401, "Unauthorized");
errorCodes.set(500, "Internal Server Error");

console.log(errorCodes);


