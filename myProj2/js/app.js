// let canvas = document.querySelector('#snake');
// let ctx = canvas.getContext('2d');

// //change the canvas width and height with user inputs
// if (localStorage.getItem('boardW') !== null) {
//     canvas.width = localStorage.getItem('boardW');
// }
// else {
//     canvas.width = 400;
// }
// if (localStorage.getItem('boardH') !== null) {
//     canvas.height = localStorage.getItem('boardH');
// }
// else {
//     canvas.height = 400;
// }

// let cW = canvas.width;
// let cH = canvas.height;
// let score = 0;
// let d = 'RIGHT'; //direction


// let snakeClass = new Snake();
// let appleClass = new Apple();

// document.addEventListener('keydown', getDirections);
// function getDirections(event) {
//     let key = event.keyCode;
//     if (key == 37 && d != "RIGHT") {
//         d = "LEFT";
//     } else if (key == 38 && d != "DOWN") {
//         d = "UP";
//     } else if (key == 39 && d != "LEFT") {
//         d = "RIGHT";
//     } else if (key == 40 && d != "UP") {
//         d = "DOWN";
//     }
// }

// //get the length of a snake
// if (localStorage.getItem('snake-length') !== null) {
//     snakeClass.snakeL = parseInt(localStorage.getItem('snake-length'));
// }
// //get the quantity of apples
// // if (localStorage.getItem('apples') !== null) {
// //     for (let i = parseInt(localStorage.getItem('apples')); i >= 0; i--) {
// //         snakeClass.body.push({
// //             x: i,
// //             y: 2
// //         });
// //     }
// //     console.log(snakeClass.body)
// // }

// // else
//  {
//     for (let i = snakeClass.snakeL; i > 0; i--) {
//         snakeClass.body.push({
//             x: i,
//             y: 2
//         });
//     }
// }



// //draw the food
// if (localStorage.getItem('apples') !== null) {
//     for (let i = 0; i < parseInt(localStorage.getItem('apples')); i++) {
//         appleClass.body.push({
//             x: Math.floor(Math.random() * (cW / appleClass.box)),
//             y: Math.floor(Math.random() * (cH / appleClass.box))
//         })
//     }
// }
// else {
//     appleClass.body = [{
//         x: Math.floor(Math.random() * (cW / snakeClass.box)),
//         y: Math.floor(Math.random() * (cH / snakeClass.box))
//     }]
// }
// appleClass.draw(appleClass.x, appleClass.y, 'red');


// function drawScore(x) {
//     ctx.font = '15pt Arial';
//     ctx.fillStyle = 'black';
//     // ctx.fillText('your score is: ' + x, (cW / 2 - cW / 4 + snakeClass.box * 2), cH - snakeClass.box * 2)
//     ctx.fillText('your score is: ' + x, 20, cH-20)
// }

// function draw() {
//     // debugger
//     ctx.clearRect(0, 0, cW, cH);
//     // debugger
//     for (let i = 0; i < appleClass.body + snakeClass.body.length; i++) {
//         let x = snakeClass.body[i].x; // x coordinates of snake
//         let y = snakeClass.body[i].y; //y coordinates of snake
//         console.log(snakeClass.body)
//         snakeClass.draw(x, y, 'green');

//     }

//     for (let i = 0; i < appleClass.body.length; i++) {
//         appleClass.draw(appleClass.body[i].x, appleClass.body[i].y, 'red')
//     }

//     let snakeX = snakeClass.body[0].x;
//     let snakeY = snakeClass.body[0].y;


//     if (d == 'RIGHT') snakeX++;
//     if (d == 'LEFT') snakeX--;
//     if (d == 'UP') snakeY--;
//     if (d == 'DOWN') snakeY++;
//     if (snakeX < 0 || snakeY < 0 || snakeX >= cW / snakeClass.box || snakeY >= cH / snakeClass.box || snakeClass.checkCollision(snakeX, snakeY, snakeClass.body)) {
//         //function to show the game over
//         showGameOver();
//         changeBtnContent();
//         clearInterval(game);

//     }


// //main logic goes here
//     for (let i = 0; i < appleClass.body.length; i++) {
//         if (snakeX == appleClass.body[i].x && snakeY == appleClass.body[i].y) {
//             score += 10;
//             appleClass.body[i] = {
//                 x: Math.floor(Math.random() * (cW / appleClass.box)),
//                 y: Math.floor(Math.random() * (cH / appleClass.box))
//             }
//         }
//         else {
//             snakeClass.body.pop();
//         }

//         let newHead = {
//             x: snakeX,
//             y: snakeY
//         };
//         snakeClass.body.unshift(newHead);
//     }

//     scoreFunc(); 
//     drawScore(score);
// }



// function scoreFunc() {
//     if (localStorage.getItem('highest') !== null) {
//         let newValue = score;
//         let oldValue = localStorage.getItem('highest');
//         if (newValue > oldValue) {
//             localStorage.setItem('highest', newValue)
//         }
//     }
//     else {
//         localStorage.setItem('highest', score);
//     }
// }

// function showGameOver() {
//     ctx.clearRect(0, 0, cW, cH);
//     ctx.beginPath();
//     ctx.fillStyle = 'black';
//     ctx.fillRect(0, 0, cW, cH);
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.fillStyle = '#fff';
//     ctx.font = '20pt Arial';
//     ctx.fillText('Game Over', cW / 3, cH / 2);
//     ctx.closePath();

//     ctx.beginPath();
//     ctx.fillStyle = 'red';
//     ctx.font = '15pt Arial';
//     ctx.fillText(`Your max score achieved is: ${localStorage.getItem('highest')}`, 10, 20)
//     ctx.fillText(`your current score is: ${score}`, 10, 50);
//     ctx.closePath();


// }

// //check for the levels and the speed in the local storage
// function startGame() {

//     if (localStorage.getItem('level') !== null) {

//         if (localStorage.getItem('level') == 'novice') {
//             if (localStorage.getItem('snake-speed') !== null) {
//                 game = setInterval(draw, 150 - parseInt(localStorage.getItem('snake-speed')))
//             }
//             else {
//                 game = setInterval(draw, 150)
//             }
//         }

//         if (localStorage.getItem('level') == 'intermediate') {
//             if (localStorage.getItem('snake-speed') !== null) {
//                 game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')))
//             }
//             else {
//                 game = setInterval(draw, 100);
//             }
//         }
//         if (localStorage.getItem('level') == 'hard') {
//             if (localStorage.getItem('snake-speed') !== null) {
//                 game = setInterval(draw, 60 - parseInt(localStorage.getItem('snake-speed')))

//             }
//             else {
//                 game = setInterval(draw, 60);
//             }
//         }
//     }
//     else {
//         if (localStorage.getItem('snake-speed') !== null) {
//             game = setInterval(draw, 100 - parseInt(localStorage.getItem('snake-speed')));
//         }
//         else {
//             game = setInterval(draw, 100);
//         }
//     }

// }

// //button options here
// let timesClicked = 0;
// document.getElementById("btn").addEventListener("click", function () {
//     timesClicked++;
//     if(timesClicked % 2 !== 0){
//         startGame();
//     }
//     else {

//         changeBtnContent();
//         location.reload();
//     }
      
// console.log(timesClicked)
// })
// function changeBtnContent(){
//     let button = document.getElementById("btn");
//     button.innerHTML = 'click to restart';
//     button.style.backgroundColor = '#ff5e4c';
// }





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
let d = 'RIGHT'; //direction


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

//get the length of a snake
if (localStorage.getItem('snake-length') !== null) {
    snakeClass.snakeL = parseInt(localStorage.getItem('snake-length'));
}
//get the quantity of apples
// if (localStorage.getItem('apples') !== null) {
//     for (let i = parseInt(localStorage.getItem('apples')); i >= 0; i--) {
//         snakeClass.body.push({
//             x: i,
//             y: 2
//         });
//     }
//     console.log(snakeClass.body)
// }

// else
 {
    for (let i = snakeClass.snakeL; i > 0; i--) {
        snakeClass.body.push({
            x: i,
            y: 2
        });
    }
}



//draw the food
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


function drawScore(x) {
    ctx.font = '15pt Arial';
    ctx.fillStyle = 'black';
    // ctx.fillText('your score is: ' + x, (cW / 2 - cW / 4 + snakeClass.box * 2), cH - snakeClass.box * 2)
    ctx.fillText('your score is: ' + x, 20, cH-20)
}

function draw() {
    // debugger
    ctx.clearRect(0, 0, cW, cH);
    // debugger
    for (let i = 0; i < snakeClass.body.length; i++) {
        let x = snakeClass.body[i].x; // x coordinates of snake
        let y = snakeClass.body[i].y; //y coordinates of snake
        console.log(snakeClass.body)
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
    if (snakeX < 0 || snakeY < 0 || snakeX >= cW / snakeClass.box || snakeY >= cH / snakeClass.box || snakeClass.checkCollision(snakeX, snakeY, snakeClass.body)) {
        //function to show the game over
        showGameOver();
        changeBtnContent();
        clearInterval(game);

    }


//main logic goes here
    for (let i = 0; i < appleClass.body.length; i++) {
        if (snakeX == appleClass.body[i].x && snakeY == appleClass.body[i].y) {
            score += 10;
            appleClass.body[i] = {
                x: Math.floor(Math.random() * (cW / appleClass.box)),
                y: Math.floor(Math.random() * (cH / appleClass.box))
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

    scoreFunc(); 
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

//button options here
let timesClicked = 0;
document.getElementById("btn").addEventListener("click", function () {
    timesClicked++;
    if(timesClicked % 2 !== 0){
        startGame();
    }
    else {

        changeBtnContent();
        location.reload();
    }
      
console.log(timesClicked)
})

function changeBtnContent(){
    let button = document.getElementById("btn");
    button.innerHTML = 'click to restart';
    button.style.backgroundColor = '#ff5e4c';
}
