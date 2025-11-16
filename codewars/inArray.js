function inArray(array1,array2){
    let results = []
  array1.forEach(item => {
    array2.forEach(a2Item => {
        if(a2Item.includes(item) && !results.includes(item)){
            results.push(item);
        }
    })
  })
  return results.sort()
}



a1 = ["xyz", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

a3 = ["live","strong","arp"];
a4 = ["lively","alive","harp","sharp","armstrong"]

console.log(inArray(a1, a2))
console.log(inArray(a3, a4))