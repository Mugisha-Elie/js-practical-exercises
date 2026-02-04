const xhr = new XMLHttpRequest();

xhr.open("GET", "http://localhost:3000/users");

xhr.onreadystatechange = () => {
    if(xhr.readyState === 1){
        xhr.setRequestHeader("Accept", "application/json")
        xhr.timeout = 5000;
    }
}

xhr.onload = () => {
    console.log("Current Ready State", xhr.readyState);

    if(xhr.status >= 200 && xhr.status < 300){
        const data = JSON.parse(xhr.response);

        if(data.length === 0){
            console.log("No data found")
        }else{
            console.log("Requested Data")
            console.log(data);
        }
    }else{
        console.log("HTTP Error", xhr.status, xhr.statusText)
    }
}

xhr.onabort = () => {
    console.log("Request was aborted")
    // hideSpinner();
}

xhr.onprogress = (event) => {
    if(event.lengthComputable){
        const percentComplete = (event.loaded / event.total) * 100;
        console.log(`Completed ${percentComplete}%`)
    }else{
        console.log("Downloading... size unknown")
    }
}

xhr.onerror = (event) => {
    console.log("An error occured")
    console.log(event)
    console.log(event.target.status)
    console.log(event.target.statusText)
}

xhr.onloadend = () => {
    // hide spinner()
}

xhr.send()