class Snake {
    constructor() {
        this.body = [];
        this.box = 20;
        this.snakeL = 4;
    }
    draw(x, y, color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        ctx.closePath();
    }

}