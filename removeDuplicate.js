let array = [1,2,3,4,4,5,7,5,7,2,1];


function removeDuplicates(array){
    let unique = [];
    for(let i=0; i<array.length; i++){
        if(!unique.includes(array[i])){
            unique.push(array[i]);
        }
    }
    return unique;

};

let noDuplicates = removeDuplicates(array);
onsole.log(noDuplicates);

