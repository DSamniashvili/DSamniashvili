const canvasClass = new Canvas();
const snakeClass = new Snake();
const appleClass = new Apple();

//change the board size using user input values
boardSizeGenerate();

let cW = canvasClass.canvas.width;
let cH = canvasClass.canvas.height;

let d = 'RIGHT';
document.addEventListener('keydown', getDirections);
function getDirections(event) {
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
}


//get the length of a snake
snakeClass.getSnakeLength();

//make the food
createFood();


function draw() {
    canvasClass.ctx.clearRect(0, 0, cW, cH);

    for (let i = 0; i < snakeClass.body.length; i++) {
        let x = snakeClass.body[i].x; 
        let y = snakeClass.body[i].y; 
        snakeClass.draw(x, y, 'green');
    }

    for (let i = 0; i < appleClass.body.length; i++) {
        appleClass.draw(appleClass.body[i].x, appleClass.body[i].y, 'red')
    }

    let snakeX = snakeClass.body[0].x;
    let snakeY = snakeClass.body[0].y;


    if (d == 'RIGHT') snakeX++;
    if (d == 'LEFT') snakeX--;
    if (d == 'UP') snakeY--;
    if (d == 'DOWN') snakeY++;
    if (snakeX < 0 || snakeY < 0 || snakeX >= cW / snakeClass.box || snakeY >= cH / snakeClass.box 
        || snakeClass.checkCollision(snakeX, snakeY, snakeClass.body)) {
        canvasClass.showGameOver();
        changeBtnContent();
        clearInterval(game);

    }


    //main logic goes here
    for (let i = 0; i < appleClass.body.length; i++) {
        if (snakeX == appleClass.body[i].x && snakeY == appleClass.body[i].y) {
            canvasClass.score += 10;
            appleClass.body[i] = {
                x: Math.floor(Math.random() * (cW / canvasClass.box)),
                y: Math.floor(Math.random() * (cH / canvasClass.box))
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

    canvasClass.scoreFunc();
    canvasClass.drawScore(canvasClass.score);
}


function startGame() {

    if (localStorage.getItem('level') !== null) {

        if (localStorage.getItem('level') == 'novice') {
            if (localStorage.getItem('snake-speed') !== null) {
                snakeClass.checkForSpeed();
                game = setInterval(draw, 150 - parseInt(localStorage.getItem('snake-speed')))
            }
            else {
                game = setInterval(draw, 150)
            }
        }

        if (localStorage.getItem('level') == 'intermediate') {
            if (localStorage.getItem('snake-speed') !== null) {
                snakeClass.checkForSpeed();
                game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')))
            }
            else {
                game = setInterval(draw, 100);
            }
        }
        if (localStorage.getItem('level') == 'hard') {
            if (localStorage.getItem('snake-speed') !== null) {
                snakeClass.checkForSpeed();
                game = setInterval(draw, 60 - parseInt(localStorage.getItem('snake-speed')))

            }
            else {
                game = setInterval(draw, 60);
            }
        }
    }
    else {
        if (localStorage.getItem('snake-speed') !== null) {
            game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')));
        }
        else {
            game = setInterval(draw, 100);
        }
    }

}

//button options here
let timesClicked = 0;
document.getElementById("btn").addEventListener("click", function () {

    timesClicked++;
    if (timesClicked % 2 !== 0) {
        startGame();
    }
    else {

        changeBtnContent();
        location.reload();
    }

    console.log(timesClicked)
})

//button content change here
function changeBtnContent() {
    let button = document.getElementById("btn");
    button.innerHTML = 'click to restart';
    button.style.backgroundColor = '#ff5e4c';
}

//change the canvas width and height with user inputs
function boardSizeGenerate(){
    if (localStorage.getItem('boardW') !== null) {
        canvasClass.canvas.width = localStorage.getItem('boardW');
    }
    else {
        canvasClass.canvas.width = 400;
    }
    if (localStorage.getItem('boardH') !== null) {
        canvasClass.canvas.height = localStorage.getItem('boardH');
    }
    else {
        canvasClass.canvas.height = 400;
    }
}


//create the food
function createFood(){
    if (localStorage.getItem('apples') !== null) {
        for (let i = 0; i < parseInt(localStorage.getItem('apples')); i++) {
            appleClass.body.push({
                x: Math.floor(Math.random() * (cW / appleClass.box)),
                y: Math.floor(Math.random() * (cH / appleClass.box))
            })
        }
    }
    else {
        appleClass.body = [{
            x: Math.floor(Math.random() * (cW / snakeClass.box)),
            y: Math.floor(Math.random() * (cH / snakeClass.box))
        }]
    }
    appleClass.draw(appleClass.x, appleClass.y, 'red');
}