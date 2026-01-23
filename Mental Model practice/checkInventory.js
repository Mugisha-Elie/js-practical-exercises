const inventory = ["laptop", "phone", "tablet"];

function checkInventory (item) {
    return new Promise((res, rej) => {
        if(inventory.includes(item)){
            res(`${item} was found in inventory`);
        }else{
            rej(`${item} was not found in inventory`)
        }
    })
    
}

checkInventory("laptoop")
.then(response => console.log(response))
.catch(error => console.log(error))
