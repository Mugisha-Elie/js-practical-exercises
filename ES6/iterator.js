const array = [1,2,3,5]

const it = array[Symbol.iterator]()
// for(let i of it){
//     console.log(i)
// }

let obj = {
    nums: [1,2,3,4,5],
    [Symbol.iterator](){
        let i = 0;
        return {
            next: ()=>({
                value : this.nums[i],
                done: i++ >= this.nums.length
            })
        }
    },
}

for (let x of obj){
    console.log(x)
}