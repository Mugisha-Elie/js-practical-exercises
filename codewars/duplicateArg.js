function solution(){
    return arguments.length === new Set(arguments).size;
}

console.log(solution(1, 2, 3));