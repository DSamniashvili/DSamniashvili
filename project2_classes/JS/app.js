const myCanvas = new Canvas('snake');
const snakeClass = new Snake(0, 0);
const configClass = new Config();
const appleClass = new Apple(Math.floor(Math.random() * (myCanvas.canvas.width / myCanvas.box)), Math.floor(Math.random() * (myCanvas.canvas.height / myCanvas.box)));



//myCanvas.canvas.heightange the canvas width and height with user inputs
if (localStorage.getItem('boardW') !== null) {
    myCanvas.canvas.width = localStorage.getItem('boardW');
}
if (localStorage.getItem('boardH') !== null) {
    myCanvas.canvas.height = localStorage.getItem('boardH');
}


//get the width and height of a snake at the beginning
// let snakeH = 20;

let d = 'RIGHT'; //direction

document.addEventListener('keydown', function(event){
    let key = event.keyCode;
    if (key == 37 && d != "RIGHT") {
        d = "LEFT";
    } else if (key == 38 && d != "DOWN") {
        d = "UP";
    } else if (key == 39 && d != "LEFT") {
        d = "RIGHT";
    } else if (key == 40 && d != "UP") {
        d = "DOWN";
    }
});

console.log(snakeClass.body.length)
// debugger
//draw a snake in canvas
if (localStorage.getItem('snake-length') !== null) {
    for (let i = parseInt(localStorage.getItem('snake-length'))-1; i > 0; i--) {
        snakeClass.body.push([{x:i,y:0}]);

    }
}

console.log(snakeClass.body.length)


if (localStorage.getItem('apples') !== null) {
    for (let i = snakeClass.body.length * parseInt(localStorage.getItem('apples'))/2; i > 0; i--) {
        snakeClass.body.push({
            x: i,
            y: 0
        });
    }
}


console.log(snakeClass.body.length)

//draw the food

if (localStorage.getItem('apples') !== null) {
    for (let i = 0; i < parseInt(localStorage.getItem('apples'))-1; i++) {
        appleClass.body.push({
            x: Math.floor(Math.random() * (myCanvas.canvas.width / myCanvas.box)),
            y: Math.floor(Math.random() * (myCanvas.canvas.height / myCanvas.box))
        })
    }
}
// console.log(food)



function draw() {
    // debugger
    myCanvas.ctx.clearRect(0, 0, myCanvas.canvas.width, myCanvas.canvas.height);
    // debugger
    for (let i = 0; i < snakeClass.body.length; i++) {
        let x = snakeClass.body[i].x;
        let y = snakeClass.body[i].y;
        snakeClass.draw(x, y, "red");
    }
    for (let i = 0; i < appleClass.body.length; i++) {
        appleClass.draw(appleClass.body[i].x, appleClass.body[i].y, "green")
    }

    let snakeX = snakeClass.body[0].x;
    let snakeY = snakeClass.body[0].y;

    // console.log(snakeX)


    if (d == 'RIGHT') snakeX++;
    if (d == 'LEFT') snakeX--;
    if (d == 'UP') snakeY--;
    if (d == 'DOWN') snakeY++;
    if (snakeX < 0 || snakeY < 0 || snakeX >= myCanvas.canvas.width / myCanvas.box || snakeY >= myCanvas.canvas.height / myCanvas.box || snakeClass.checkCollision(snakeX, snakeY, snakeClass.body)) {
        //function to show the game over
        myCanvas.showGameOver();
    }

    for (let i = 0; i < appleClass.body.length; i++) {
        if (snakeX == appleClass.body[i].x && snakeY == appleClass.body[i].y) {
            myCanvas.score += 10;
            appleClass.body[i] = {
                x: Math.floor(Math.random() * (myCanvas.canvas.width / myCanvas.box)),
                y: Math.floor(Math.random() * (myCanvas.canvas.height / myCanvas.box))
            }
        }

        else {
            snakeClass.body.pop();
        }
        let newHead = {
            x: snakeX,
            y: snakeY
        };
        snakeClass.body.unshift(newHead);
    }

    myCanvas.scoreFunc(); //localStorage
    myCanvas.drawScore(myCanvas.score);
}


// game = setInterval(draw, 60);

//myCanvas.canvas.heighteck for the levels and the speed in the local storage
document.getElementById("btn").addEventListener("click",function(){
    configClass.startGame();
})