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
// let box = 20;
// let snakeH = 20;
let d = 'RIGHT'; //direction


// class Snake {
//     constructor() {
//         this.snake = [];
//         this.box = 20;
//         this.snakeL = 4;
//     }
//     drawSnake(x, y) {
//         ctx.fillStyle = 'red';
//         ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
//         ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
//         ctx.closePath();
//     }

// }


// class Apple {
//     constructor() {
//         this.food = [];
//         this.box = 20;
//     }
//     drawFood(x, y) {
//         ctx.fillStyle = 'green';
//         ctx.fillRect(x * this.box, y * this.box, this.box, this.box)
//         ctx.strokeRect(x * this.box, y * this.box, this.box, this.box);
//         ctx.closePath();
//     }
// }


let snakeClass = new Snake();
let appleClass = new Apple();

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


if (localStorage.getItem('snake-length') !== null) {
    snakeClass.snakeL = parseInt(localStorage.getItem('snake-length'));
}

if (localStorage.getItem('apples') !== null) {
    for (let i = parseInt(localStorage.getItem('apples')); i >= 0; i--) {
        snakeClass.snake.push({
            x: i,
            y: 2
        });
    }
}
else {
    for (let i = snakeClass.snakeL; i > 0; i--) {
        snakeClass.snake.push({
            x: i,
            y: 2
        });
    }
}



//draw the food

if (localStorage.getItem('apples') !== null) {
    for (let i = 0; i < parseInt(localStorage.getItem('apples')); i++) {
        appleClass.food.push({
            x: Math.floor(Math.random() * (cW / appleClass.box)),
            y: Math.floor(Math.random() * (cH / appleClass.box))
        })
    }
}
else {
    appleClass.food = [{
        x: Math.floor(Math.random() * (cW / snakeClass.box)),
        y: Math.floor(Math.random() * (cH / snakeClass.box))
    }]
}

appleClass.drawFood(appleClass.x, appleClass.y);


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
    ctx.fillText('your score is: ' + x, (cW / 2 - cW / 4 + snakeClass.box * 2), cH - snakeClass.box * 2)
}

function draw() {
    // debugger
    ctx.clearRect(0, 0, cW, cH);
    // debugger
    for (let i = 0; i < snakeClass.snake.length; i++) {
        let x = snakeClass.snake[i].x;
        let y = snakeClass.snake[i].y;
        snakeClass.drawSnake(x, y);

    }
    for (let i = 0; i < appleClass.food.length; i++) {
        appleClass.drawFood(appleClass.food[i].x, appleClass.food[i].y)
    }

    let snakeX = snakeClass.snake[0].x;
    let snakeY = snakeClass.snake[0].y;


    if (d == 'RIGHT') snakeX++;
    if (d == 'LEFT') snakeX--;
    if (d == 'UP') snakeY--;
    if (d == 'DOWN') snakeY++;
    if (snakeX < 0 || snakeY < 0 || snakeX >= cW / snakeClass.box || snakeY >= cH / snakeClass.box || checkCollision(snakeX, snakeY, snakeClass.snake)) {
        //function to show the game over
        showGameOver();
        clearInterval(game);
    }

    for (let i = 0; i < appleClass.food.length; i++) {
        if (snakeX == appleClass.food[i].x && snakeY == appleClass.food[i].y) {
            score += 10;
            appleClass.food[i] = {
                x: Math.floor(Math.random() * (cW / appleClass.box)),
                y: Math.floor(Math.random() * (cH / appleClass.box))
            }
        }
        else {
            snakeClass.snake.pop();
        }

        let newHead = {
            x: snakeX,
            y: snakeY
        };
        snakeClass.snake.unshift(newHead);
    }

    scoreFunc(); //localStorage
    drawScore(score);
}



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


}


//check for the levels and the speed in the local storage
function startGame() {
    if (localStorage.getItem('level') !== null) {

        if (localStorage.getItem('level') == 'novice') {
            if (localStorage.getItem('snake-speed') !== null) {
                game = setInterval(draw, 150 - parseInt(localStorage.getItem('snake-speed')))
            }
            else {
                game = setInterval(draw, 150)
            }
        }

        if (localStorage.getItem('level') == 'intermediate') {
            if (localStorage.getItem('snake-speed') !== null) {
                game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')))
            }
            else {
                game = setInterval(draw, 100);
            }
        }
        if (localStorage.getItem('level') == 'hard') {
            if (localStorage.getItem('snake-speed') !== null) {
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


document.getElementById("btn").addEventListener("click", function () {
    startGame();
})