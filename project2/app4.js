let canvas = document.querySelector('#snake');
let ctx = canvas.getContext('2d');

//change the canvas width and height with user inputs
if (localStorage.getItem('boardW') !== null) {
    canvas.width = localStorage.getItem('boardW');
}
else {
    canvas.width = 400;
}
if (localStorage.getItem('boardH') !== null) {
    canvas.height = localStorage.getItem('boardH');
}
else {
    canvas.height = 400;
}

let cW = canvas.width;
let cH = canvas.height;
let score = 0;
//get the width and height of a snake at the beginning
let box = 20;
// let snakeH = 20;
let d = 'RIGHT'; //direction
let snakeL;
let snake = [];
let food = [];

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

//draw a snake in canvas
function drawSnake(x, y) {
    ctx.fillStyle = 'red';
    ctx.fillRect(x * box, y * box, box, box)
    ctx.strokeRect(x * box, y * box, box, box);
    ctx.closePath();
}


if (localStorage.getItem('snake-length') !== null) {
    snakeL = parseInt(localStorage.getItem('snake-length'));
}
else {
    snakeL = 4;
}



if(localStorage.getItem('apples') !== null){
    for(let i = parseInt(localStorage.getItem('apples')); i >= 0; i--){
        snake.push({
            x: i,
            y: 2
        });
    }
}
else {
    for (let i = snakeL; i > 0; i--) {
        snake.push({
                x: i,
                y: 2
            });
    }
}



//draw the food

if(localStorage.getItem('apples') !== null){
    for(let i=0; i < parseInt(localStorage.getItem('apples')); i++){
        food.push({
            x: Math.floor(Math.random() * (cW / box)),
            y: Math.floor(Math.random() * (cH / box))
        })
    }
}
else {
    food = [{
        x: Math.floor(Math.random() * (cW / box)),
        y: Math.floor(Math.random() * (cH / box))
    }]
}
// console.log(food)




function drawFood(x, y) {
    ctx.fillStyle = 'green';
    ctx.fillRect(x * box, y * box, box, box)
    ctx.strokeRect(x * box, y * box, box, box);
    ctx.closePath();
}


function checkCollision(x, y, array) {
    for (let i = 0; i < array.length; i++) {
        if (x == array[i].x && y == array[i].y) {
            return true;
        }
    }
    return false;
}


function drawScore(x) {
    ctx.font = '15pt Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('your score is: ' + x, (cW / 2 - cW / 4 + box * 2), cH - box * 2)
}

function draw() {
    // debugger
    ctx.clearRect(0, 0, cW, cH);
    // debugger
    for (let i = 0; i < snake.length; i++) {
        let x = snake[i].x;
        let y = snake[i].y;
        drawSnake(x, y);
        
    }
    for (let i = 0; i < food.length; i++) {
        drawFood(food[i].x, food[i].y)
    }

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    console.log(snakeX)


    if (d == 'RIGHT') snakeX++;
    if (d == 'LEFT') snakeX--;
    if (d == 'UP') snakeY--;
    if (d == 'DOWN') snakeY++;
    if (snakeX < 0 || snakeY < 0 || snakeX >= cW / box || snakeY >= cH / box || checkCollision(snakeX, snakeY, snake)) {
        //function to show the game over
        showGameOver();
        clearInterval(game);
        // return;
    }

    for(let i=0; i < food.length; i++){
        if (snakeX == food[i].x && snakeY == food[i].y) {
            score += 10;
            food[i] = {
                x: Math.floor(Math.random() * (cW / box)),
                y: Math.floor(Math.random() * (cH / box))
            }
        } 
        else {
            snake.pop();
        }
        
        let newHead = {
            x: snakeX,
            y: snakeY
        };
        snake.unshift(newHead);
}

    scoreFunc(); //localStorage
    drawScore(score);
}


// game = setInterval(draw, 60);


function scoreFunc() {
    if (localStorage.getItem('highest') !== null) {
        let newValue = score;
        let oldValue = localStorage.getItem('highest');
        if (newValue > oldValue) {
            localStorage.setItem('highest', newValue)
        }
    }
    else {
        localStorage.setItem('highest', score);
    }
}

function showGameOver() {
    ctx.clearRect(0, 0, cW, cH);
    ctx.beginPath();
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, cW, cH);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = '#fff';
    ctx.font = '20pt Arial';
    ctx.fillText('Game Over', cW / 3, cH / 2);
    ctx.closePath();

    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.font = '15pt Arial';
    ctx.fillText(`Your max score achieved is: ${localStorage.getItem('highest')}`, 10, 20)
    ctx.fillText(`your current score is: ${score}`, 10, 50);
    ctx.closePath();

    // clearInterval(game)

}


//check for the levels and the speed in the local storage

if(localStorage.getItem('level') !== null) {

    if(localStorage.getItem('level') == 'novice'){
        if(localStorage.getItem('snake-speed') !== null){
            game = setInterval(draw, 150 - parseInt(localStorage.getItem('snake-speed')))
        }
        else {
            game = setInterval(draw, 150)
        }
    }
    
    if(localStorage.getItem('level') == 'intermediate'){
        if(localStorage.getItem('snake-speed') !== null){
        game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')))
        }
        else {
            game = setInterval(draw, 100);
        }
    }
    if(localStorage.getItem('level') == 'hard'){
        if(localStorage.getItem('snake-speed') !== null){
        game = setInterval(draw, 60 - parseInt(localStorage.getItem('snake-speed')))
        
        }
        else {
        game = setInterval(draw, 60);
        }
    }
    
    }
    else {
        if(localStorage.getItem('snake-speed') !== null){
        game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')));
        }
        else {
            game = setInterval(draw, 100);
        }
    }