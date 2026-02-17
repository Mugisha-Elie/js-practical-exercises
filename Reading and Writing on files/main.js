import {readFile, writeFile} from "node:fs/promises";

const filePath = 'C:/Users/hp/Documents/js-practical-exercises/Reading and Writing on files/fileName.json';

const myData = JSON.stringify({fistname: "John", age: 5});

try{
    await writeFile(filePath, myData);

    const rawText = await readFile(filePath, 'utf-8');
    const data = JSON.parse(rawText);

    console.log(data)
}catch(error){
    console.log("There was an error", error.message);
}