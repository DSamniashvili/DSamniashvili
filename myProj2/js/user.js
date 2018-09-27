let boardW = document.getElementById('board_width');
let boardH = document.getElementById('board_height');
let applesQ = document.getElementById('apples');
let snakeLength = document.querySelector('#snake_length');
let levels = document.getElementById('levels');
let novice = document.querySelector('#novice');
let intermediate = document.querySelector('#intermediate');
let hard = document.querySelector('#hard');
let speed = document.querySelector('#snake_speed');

// var nodes = document.querySelectorAll("#inputs input[type=text]");
// console.log(nodes)
// let reg = new RegExp('^[0-9]+$');
// for (var i = 0; i < nodes.length; i++)
//     if (nodes[i].value == "" || reg.test(nodes[i].value)) alert("invalid.")


function check(){
    
}




//save width and height in local storage
function saveInLocalWH() {
    localStorage.setItem('boardW', boardW.value);
    localStorage.setItem('boardH', boardH.value);
}
// save snake length in local storage
function saveSnakeLength() {
    localStorage.setItem('snake-length', snakeLength.value);
}
// save snake speed
function saveSnakeSpeed() {
    localStorage.setItem('snake-speed', speed.value);
}
// save number of apples in local storage
function saveApples() {
    localStorage.setItem('apples', applesQ.value);
}
//save level in the local storage
function saveLvl() {
    localStorage.setItem('level', levels.value);
}



// function checkForSpeed(){
//     if(localStorage.getItem('level') == 'novice' 
//     || localStorage.getItem('level') == 'intermediate'  
//     || localStorage.getItem('level') == 'hard' 
//     && parseInt(localStorage.getItem('snake-speed')) > 50){
//         alert(`You\'re automatically moved to the next Level!`);
//         document.querySelector('#hidden').innerHTML = 'Level automatically updated!'
//     }
// }


// console.log(parseInt(localStorage.getItem('snake-speed')) > 50);

function checkForSpeed(){

if(
localStorage.getItem('level') == 'novice' && parseInt(localStorage.getItem('snake-speed') > 50) || 
localStorage.getItem('level') == 'intermediate' && parseInt(localStorage.getItem('snake-speed') > 50)  || 
localStorage.getItem('hard') == 'hard' && parseInt(localStorage.getItem('snake-speed') > 50)
)
{
    alert(`You\'re automatically moved to the next Level!`);
    document.querySelector('#hidden').innerHTML = 'Level automatically updated!'
}
}

// console.log(parseInt(localStorage.getItem('snake-speed')))
// console.log(typeof((parseInt(localStorage.getItem('snake-speed')))));
// console.log(parseInt(localStorage.getItem('snake-speed')) > 50)
// console.log(parseInt(localStorage.getItem('snake-speed')) > 80)

