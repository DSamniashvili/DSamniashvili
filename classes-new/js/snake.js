class Snake {
    constructor() {
        this.snake = [];
        this.box = 20;
        this.snakeL = 4;
    }
    drawSnake(x, y) {
        ctx.fillStyle = 'red';
        ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        ctx.closePath();
    }

}