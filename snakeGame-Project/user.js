let boardW = document.getElementById('board_width');
let boardH = document.getElementById('board_height');
let applesQ = document.getElementById('apples');
let snakeLength = document.querySelector('#snake_length');
let levels = document.getElementById('levels');
let novice = document.querySelector('#novice');
let intermediate = document.querySelector('#intermediate');
let hard = document.querySelector('#hard');
let speed = document.querySelector('#snake_speed');


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

function clearSpeed(){
    localStorage.removeItem('snake-speed');
}


