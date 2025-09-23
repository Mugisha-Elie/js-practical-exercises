function likes(people){
    let count = people.length;
    let message = "";
    switch(count){
        case 0:
            message = "no one likes this";
        break;

        case 1:
            message = `${people[0]} likes this`;
        break;

        case 2:
            message = `${people.join(" and ")} like this`;
        break;

        case 3:
            message = `${people[0]}, ${people[1]} and ${people[2]} like this`;
        break;

        case people.length:
            message = `${people[0]}, ${people[1]} and ${people.length - 2} others like this`;
        break;

        
    }
    return message;
}

console.log(likes(["Alex", "Jacob", "Mark", 'Max' ]));
console.log(likes(['Max', 'John', 'Mark']));

