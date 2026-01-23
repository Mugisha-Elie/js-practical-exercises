function counter(){
    const arr = [];

    let number = 1;

    if(arr.length === 5){
        return arr
    }

    arr.push(number)
    number++;
    counter()

}

const count = counter();
console.log(count)