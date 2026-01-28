let balance = 0;

let randomDelay = () => {
    return new Promise(resolve => setTimeout(resolve, Math.random() * 1000));
}

async function deposit(amount){
    try{
        const currentBalance = balance;
        console.log(`currentBalance: ${balance}`);

        await randomDelay();

        balance = currentBalance + amount;
        console.log(`Balance: ${balance}`);
    }catch(error){
        console.log("An error occurred: ", error);
    }
}

async function runTransaction(){
    await Promise.all([deposit(100), deposit(100), deposit(100)])
}

runTransaction()