// Sort products 
// You are given an array of product objects, each containing a name (string) and a price 
// (number). Your task is to implement a function called sortProducts that sorts the 
// products based on their prices in ascending order.  

function sortProducts(array){
    // let temp;
     
    // for(let i=0; i<array.length; i++){
    //     for(let j=0; j<array.length-1; j++){
    //         if(array[j].price > array[j+1].price){
    //             temp = array[j];
    //             array[j] = array[j+1];
    //             array[j+1] = temp;
    //         }
    //     }

    // }
    // return array;

    return array.sort((a,b)=>a.price - b.price);

}

let productArray = [
    {name: "pen", price: 250}, 
    {name: "book", price: 500},
    {name: "pencil", price:100},
    {name: "rubber", price: 300}
];


console.log(sortProducts(productArray));
