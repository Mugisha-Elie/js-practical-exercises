let lockA = false;
let lockB = false;

const randomDelay = () => new Promise(resolve => setTimeout(resolve, Math.random() * 100));

async function transferAtoB(){
    while(lockA){
        await new Promise(resolve => setTimeout(resolve, 1));
    }

    lockA = true;

    await randomDelay()

    while(lockB){
        await new Promise(resolve => setTimeout(resolve, 1));
    }

    lockB = true;

    console.log("Transfer Complete");

    lockA = false;
    lockB = false;
}

async function transferBtoA(){
    while(lockA){
        await new Promise(resolve => setTimeout(resolve, 1));
    }
    
    lockA = true;
    
    await randomDelay();
    
    while(lockB){
        await new Promise(resolve => setTimeout(resolve, 1));
    }

    lockB = true;

    console.log("Transfer Complete");

    lockA = false;
    lockB = false;
}

async function runSimulation(){
    await Promise.all([transferAtoB(), transferBtoA()])
}

runSimulation()