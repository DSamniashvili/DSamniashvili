const canvasClass = new Canvas();
const snakeClass = new Snake();
const appleClass = new Apple();

let game;

//change the board size using user input values
canvasClass.boardSizeGenerate();
let cW = canvasClass.canvas.width;
let cH = canvasClass.canvas.height;

//mouse direction part
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
appleClass.createFood();

console.log(appleClass.body)


function draw() {
    canvasClass.ctx.clearRect(0, 0, cW, cH);


    for (let i = 0; i < appleClass.body.length; i++) {
        appleClass.draw(appleClass.body[i].x, appleClass.body[i].y, '#ff5e4c')
    }
    for (let i = 0; i < snakeClass.body.length; i++) {
        let x = snakeClass.body[i].x;
        let y = snakeClass.body[i].y;
        snakeClass.draw(x, y, '#3CB371');
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
    checkIfEncounter();
    eatApple(snakeX, snakeY, appleClass.body);

    let newHead = {
        x: snakeX,
        y: snakeY
    };

    snakeClass.body.unshift(newHead);
    canvasClass.scoreFunc();
    canvasClass.drawScore(canvasClass.score);
}

function checkIfEncounter(){
    for(let i=0; i < snakeClass.body.length; i++){
        for(let j=0; j< appleClass.body.length; j++){
            if( appleClass.body[j].x == snakeClass.body[i].x && appleClass.body[j].y == snakeClass.body[i].y ){
                canvasClass.score += 10;
            appleClass.body[j] = {
                x: Math.floor(Math.random() * (cW / canvasClass.box)),
                y: Math.floor(Math.random() * (cH / canvasClass.box))
            };
            }
        }
    }
}

function eatApple(headX, headY, body) {
    for (let i = 0; i < body.length; i++) {
        if (headX == body[i].x && headY == body[i].y) {
            canvasClass.score += 10;
            body[i] = {
                x: Math.floor(Math.random() * (cW / canvasClass.box)),
                y: Math.floor(Math.random() * (cH / canvasClass.box))
            };

            return;
        }

    }
    snakeClass.body.pop();
}


function startGame() {
    let level = localStorage.getItem('level');
    let speed = parseInt(localStorage.getItem('snake-speed'));
    let maxSpeed = 60;  //max speed for each level
    if (level !== null) {
        if (level == 'novice' && speed < maxSpeed) {
            game = setInterval(draw, 180 - speed);
        }
        else if (level == 'novice' && speed > maxSpeed) {
            alert(`You\'re automatically moved to the next Level - intermediate!`);
            localStorage.setItem('level', 'intermediate')
            localStorage.removeItem('snake-speed');
            game = setInterval(draw, 120);
        }
        else  if (level == 'novice') {
            game = setInterval(draw, 180);
        }


        if (level == 'intermediate' && speed < maxSpeed) {
            game = setInterval(draw, 120 - speed);
        }
        else if (level == 'intermediate' && speed > maxSpeed) {
            alert(`You\'re automatically moved to the next Level - hard!`);
            localStorage.setItem('level', 'hard')
            localStorage.removeItem('snake-speed');
            game = setInterval(draw, 60);
        }
        else  if (level == 'intermediate') {
            game = setInterval(draw, 120);
        }


        if (level == 'hard' && speed < maxSpeed) {
            game = setInterval(draw, 60 - speed);
        }
        else if (level == 'hard' && speed > maxSpeed) {
            alert(`Maximum level avialable`);
            localStorage.setItem('snake-speed', 50)
            return;
        }
        else  if (level == 'hard') {
            game = setInterval(draw, 60);
        }

    }

    else if (localStorage.getItem('snake-speed') !== null) {
            game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')));
        }
        else {
            game = setInterval(draw, 100);
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






