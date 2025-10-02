
const game = {
    score: 0,
    increaseScore: function(){
        setTimeout(() => {
            this.score++;
            console.log("Arrow:", this.score,this);
        }, 100);
    }
}


game.increaseScore();
