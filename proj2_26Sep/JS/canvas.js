class Canvas {
    constructor(canvasN) {
        this.canvas = document.querySelector('#' + canvasN);
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = 400;
        this.canvas.height = 400;
        this.score = 0;
        this.box = 20;
    }
    drawScore(x) {
        this.ctx.font = '15pt Arial';
        this.ctx.fillStyle = 'black';
        this.ctx.fillText('your score is: ' + x, (this.canvas.width / 2 - this.canvas.width / 4 + this.box * 2), this.canvas.height - this.box * 2)
    }

    scoreFunc() {
        if (localStorage.getItem('highest') !== null) {
            let newValue = this.score;
            let oldValue = localStorage.getItem('highest');
            if (newValue > oldValue) {
                localStorage.setItem('highest', newValue)
            }
        }
        else {
            localStorage.setItem('highest', this.score);
        }

    }

    showGameOver() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.beginPath();
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.closePath();
    
        this.ctx.beginPath();
        this.ctx.fillStyle = '#fff';
        this.ctx.font = '20pt Arial';
        this.ctx.fillText('Game Over', this.canvas.width / 3, this.canvas.height / 2);
        this.ctx.closePath();
    
        this.ctx.beginPath();
        this.ctx.fillStyle = 'red';
        this.ctx.font = '15pt Arial';
        this.ctx.fillText(`Your max score achieved is: ${localStorage.getItem('highest')}`, 10, 20)
        this.ctx.fillText(`your current score is: ${this.score}`, 10, 50);
        this.ctx.closePath();
    
        // clearInterval(game)
    
    }
}