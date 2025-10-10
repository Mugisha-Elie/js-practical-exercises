const myMap = new Map(
    [
        ['name', "Junior"],
        [{age: 27, academic: "Year 3"}, "Details"]
    ]
);

const newMapKeys = myMap.keys();

let result = newMapKeys.next();

while(!result.done){
    console.log(result.value);
    result = newMapKeys.next();
}