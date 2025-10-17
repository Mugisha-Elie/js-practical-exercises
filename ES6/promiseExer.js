const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback){
    if(userLeft){
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    }else if(userWatchingCatMeme){
        errorCallback({
            name: "User Watching Cat Meme",
            message: "Dev tutorial < Cat"
        })
    } else{
        callback('Thumbs up!!')
    }
}


watchTutorialCallback((message) => {
    console.log(`Success: ${message}`)
}, (error) => {
    console.log(error.name + ' ' + error.message);
})