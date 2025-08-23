function humanReadable (seconds) {

let hour = Math.floor(seconds / 3600);
let min = Math.floor((seconds % 3600)/60); //>= 60 ? 0 : Math.floor((seconds % 3600)/60);
let sec = Math.floor(seconds % 60)// >= 60 ? 0 : Math.floor(seconds % 60);


return (hour < 10 ? "0"+hour : hour )+ ":" + (min < 10 ? "0"+min : min )+ ":" + (sec < 10 ? "0"+sec : sec);
}

console.log(humanReadable( ));