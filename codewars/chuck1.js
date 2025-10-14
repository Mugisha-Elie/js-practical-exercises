function chuckPushUps(string) {
    if(typeof string !== "string"){
        return "FAIL!!";
    }

    const binary = parseInt(string.replace(/[^01]/ig, ""), 2);

    return isNaN(binary) ? "CHUCK SMASH!!" : binary;

    // return isNaN(parseInt(string.replace(/[^01]/ig, ""), 2)) ? 'CHUCK SMASH!!' : parseInt(string.replace(/[^01]/ig, ""), 2);
}

// console.log(chuckPushUps("110010a101100"))
// console.log(chuckPushUps("1ee1gf00t10h1011tr00"));
// console.log(chuckPushUps("GENI6KdVkwyG8khJN6eAs07E7Fx1016CksceISVde10I8X8RGtmGbfpXipbEIdpsxKGsLbx4gGJGw4XVPDIDs7C8y5gTEomama"))
// console.log(chuckPushUps("sPJqcSrZHv2DWU45bOUtK8YUdg6pxx9x5MQIvQyu3"))
console.log(chuckPushUps(chuckPushUps("1am0")));