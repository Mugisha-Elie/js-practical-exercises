
function counter(){
    let count = 0;
   
    return {
        increment: function(){
            count++;
        },
        getCount: function(){
            return count;
        }

    }


}

let count = counter();

count.increment();  //1
count.increment();  //2

console.log(count.getCount());