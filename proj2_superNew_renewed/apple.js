class Apple extends Canvas{
    constructor(){
        super();
        this.body = [];
    }
    draw(x, y, color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
        this.ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
        this.ctx.closePath();
    }
    createFood(){
        if (localStorage.getItem('apples') !== null) {
            for (let i = 0; i < parseInt(localStorage.getItem('apples')); i++) {
                this.body.push({
                    x: Math.floor(Math.random() * (this.canvas.width / this.box)),
                    y: Math.floor(Math.random() * (this.canvas.width / this.box))
                })
            }
        }
        else {
            this.body = [{
                x: Math.floor(Math.random() * (this.canvas.width / this.box)),
                y: Math.floor(Math.random() * (this.canvas.height / this.box))
            }]
        }
        this.draw(this.body.x, this.body.y, 'red');
    }
}