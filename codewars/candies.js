function distributionOfCandy(candies){
    return new Set(candies).size === 1;
}
console.log(distributionOfCandy([1,1,1,1]))