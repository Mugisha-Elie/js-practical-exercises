const mathWorker = new Worker("dedicatedWorker.js");
// const mathWorker = new Worker(new URL("dedicatedWorker.js", import.meta.url));

const arr = [4, 2]

mathWorker.postMessage(arr)

console.log("Waiting for the work to give us results");

mathWorker.onmessage = ((message) => {
    console.log(message);
    console.log(message.data);
})

mathWorker.onerror = (error) => {
    console.log("The worker has issues", error.data)
}
