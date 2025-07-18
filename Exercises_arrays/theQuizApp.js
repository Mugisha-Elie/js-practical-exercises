const readline = require('readline');

const r1 = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout,
    }
);

function ask(question, callback){
    r1.question(question, callback);
    
}

ask("What is your name?", function(firstName){});
