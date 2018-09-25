class Snake extends Canvas {
    
    constructor(x, y) {
        super("snake");
        this.body = [];
        this.body.push({
            x: x,
            y: y
        });
    }

    draw(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        this.ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        this.ctx.closePath();
    }

    checkCollision(x, y, array) {
        for (let i = 0; i < array.length; i++) {
            if (x == array[i].x && y == array[i].y) {
                return true;
            }
        }
        return false;
    }
}