let canvas, canvasContext;
canvas = document.querySelector('#gameCanvas');
let ballX = 40;
let ballSpeedX = 5;


let ballY = 80;
let ballSpeedY = 10;

    
let stick1Y = 250;
const stickHeight = 100;
const paddleThickness = 20;
const winningScore = 3;
let isFinished = false;


let player1Score = 0;
let player2Score = 0;

// let stick2Y = ((canvas.height/2) -10);

let stick2Y = 250;







window.onload = function(){
    canvas = document.querySelector('#gameCanvas');
    canvasContext = canvas.getContext('2d');
 
    let framesPerSecond = (function(frame){
        setInterval (draw, 1000/frame);
    })(40);


   //move stick when the arrow keys move
    canvas.addEventListener('mousemove', function(ev){
        let mousePosition = calculateMousePosition(ev);
        stick1Y = mousePosition.y - (stickHeight/2);
    })

    canvas.addEventListener('mousedown', renewTheGame)
    
    
}

function renewTheGame(event){
    player1Score = 0;
    player2Score = 0;
    isFinished = false;
}


function computerMovement(){
//move the right 
let stick2Center = stick2Y + (stickHeight/2);
if(stick2Y < ballY - 35){
    stick2Y +=6;
}
else if(stick2Y > ballY + 35){
    stick2Y -=6;
}
}

function move(){
    if(isFinished) {
        return;
    }
    computerMovement();

    ballX = ballX + ballSpeedX;
    ballY = ballY + ballSpeedY;


    if(ballX > canvas.width){
        // ballSpeedX = -ballSpeedX;
        if((ballY > stick2Y) &&(ballY < stick2Y + stickHeight )){
            ballSpeedX = -ballSpeedX;

            let deltaY = ballY - (stick2Y + stickHeight / 2)
            ballSpeedY = deltaY * 0.35;
        } 
        else {
            player2Score +=1;
            ballReset();
            
            }
         }

    if(ballX < 0) {
        if((ballY > stick1Y) && (ballY < stick1Y + stickHeight )){
            ballSpeedX = -ballSpeedX;

            // here we measure delta of the ball
            let deltaY = ballY - (stick1Y + stickHeight / 2)
            ballSpeedY = deltaY;
        } 
        else {
            player1Score +=1;
            ballReset();
            
            }
        }


    if(ballY > canvas.height){
        ballSpeedY = -ballSpeedY;
        }
    if(ballY < 0) {
        ballSpeedY = -ballSpeedY;  
        }
    }


function drawAttheBeginning(){

    canvasContext.fillStyle = 'black';
    canvasContext.fillRect(0,0, canvas.width, canvas.height);
}


//function to draw any kind of circle
function drawCircle(leftX, topY, radius, color, param, pi, bool, ){
    canvasContext.beginPath();
    canvasContext.fillStyle = color;
    canvasContext.arc(leftX, topY, radius, 0,  Math.PI*2, true);
    canvasContext.fill();
}

function draw(){
    
    move();
//Here I draw everything that is on the canvas

//the main table
    // canvasContext.fillStyle = 'black';
    // canvasContext.fillRect(0,0, canvas.width, canvas.height);
    giveParamsAndColors(0,0, canvas.width, canvas.height, 'black')

    if(isFinished){
        // canvasContext.font('60pt Arial');
        canvasContext.font="15pt Arial";
        canvasContext.fillStyle = 'red';

            if(player1Score >= winningScore){
                canvasContext.fillText(`The player 2 won!`, 300, 270);
            } 
            else if (player2Score >= winningScore) {
                canvasContext.fillText(`The player 1 won!`, 300, 270);
            }

            canvasContext.fillText(`the game is finished. click to continue`, 200,500);

            return
        }
        

   
    drawMiddleLines();

    // //the BALL
    // canvasContext.fillStyle = 'red';
    // canvasContext.beginPath();
    // canvasContext.arc(ballX, 100, 10, 0, Math.PI*2);
    // canvasContext.fill();

    drawCircle(ballX, ballY, 10, 'red')


        


    //the Tennis sticks
    // canvasContext.fillStyle = 'white';
    // canvasContext.fillRect(10, ((canvas.height/2) -10) , 20, 40);

    //updated version  --- added a function
    giveParamsAndColors(0,  stick1Y, paddleThickness, stickHeight, 'white')

    // canvasContext.fillStyle = 'white';
    // canvasContext.fillRect(canvas.width - 20, ((canvas.height/2) -10) , 20, 40);
    giveParamsAndColors(canvas.width - paddleThickness, stick2Y, paddleThickness, 100, 'white')



    //write the score text
    canvasContext.fillText(`Player 1 score is: ${player1Score}`, 100,100);
    canvasContext.fillText(`Player 2 score is: ${player2Score}`, 600,100);

 
}

function giveParamsAndColors(leftX, topY, width, height, newColor){
    canvasContext.fillStyle = newColor;
    canvasContext.fillRect(leftX, topY, width, height);

}



//FIND A MOUSE POSITION RELATIVE TO GAME CANVAS

function calculateMousePosition(event){
    let rect = canvas.getBoundingClientRect(); //this is the area of black;
    let root = document.documentElement; // this is the full HTML document;
    
    let mouseX = event.clientX - rect.left - root.scrollLeft;
    let mouseY = event.clientY - rect.top - root.scrollTop;
    return {
        x : mouseX,
        y: mouseY
    }

}

// RESET THE BALL POSITION
function ballReset(){
    if(player1Score >= winningScore || player2Score >= winningScore){
        isFinished = true;
    } 


    ballSpeedX = -ballSpeedX;
    ballX = canvas.width/2;
    ballY = canvas.height/2;
}


function drawMiddleLines(){
    for(let i = 0; i < canvas.height; i+=40){
        giveParamsAndColors(canvas.width/2 - 5, i, 4, 20, 'white'); 
    }
}

