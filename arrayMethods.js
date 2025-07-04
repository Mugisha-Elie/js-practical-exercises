//part 1: myMap

Array.prototype.myMap = function(callback){
    let result = [];
    for(let i = 0; i<this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
};

let array1 = [1,2,3,4,5];

let squares = array1.myMap(n => n*n);
console.log(squares);

//part 2: myFilter
Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i=0; i<this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result
};

let even = array1.myFilter(function(n){
    return n%2==0;
});

console.log(even);

//part3: myReduce

Array.prototype.myReduce = function(callback, initialValue){
    let accumulator = initialValue;
    let startIndex = 0;

    //if no initial value is provided use the first element as the initial value
    if(accumulator === undefined){
        accumulator = this[0];
        startIndex = 1;
    }

    for(let i = startIndex; i < this.length; i++){
        accumulator = callback(accumulator, this[i], i, this);
    }
    return accumulator;
};

let sum = squares.myReduce((acc, curr) => acc + curr);
console.log(sum);

//part4: myForEach()
Array.prototype.myForEach = function(callback){
    for(let i=0; i<this.length; i++){
        callback(this[i], i, this);
    }
};

array1.myForEach((item, index)=>console.log(index+" : "+item)  );



