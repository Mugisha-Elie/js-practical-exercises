const a = [
    {id: 1, value: 100},
    {id: 2, value: 200},
    {id: 3, value: 300},
];

const m = new Map(a.map((o)=>[o.id, o.value]))
console.log(m);