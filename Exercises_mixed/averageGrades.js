function averageGrades(arr){
    let sum =0;
    arr.map(function(item, index, array) {
        sum += item.grade;
    });

    let average = sum / arr.length;
    return average;
    
}

console.log(averageGrades([{name:"A",grade:10},{name:"B",grade:8}]));