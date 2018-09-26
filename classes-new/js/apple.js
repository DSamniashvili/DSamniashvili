class Apple {
    constructor() {
        this.food = [];
        this.box = 20;
    }
    drawFood(x, y) {
        ctx.fillStyle = 'green';
        ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        ctx.closePath();
    }
}
