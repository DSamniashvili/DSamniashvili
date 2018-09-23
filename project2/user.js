let boardW = document.getElementById('board_width');
let boardH = document.getElementById('board_height');
let applesQ = document.getElementById('apples');
let snakeLength = document.querySelector('#snake_length');
let levels = document.getElementById('levels');
let novice = document.querySelector('#novice');
let intermediate = document.querySelector('#intermediate');
let hard = document.querySelector('#hard');
let speed = document.querySelector('#snake_speed');

let level = document.querySelectorAll('.level');
// console.log(level[0]);

let saveBtn = document.querySelector('#save');

function saveInLocalWH() {
    localStorage.setItem('boardW', boardW.value);
    localStorage.setItem('boardH', boardH.value);
}

function saveSnakeLength(){
    localStorage.setItem('snake-length', snakeLength.value);
}
function saveSnakeSpeed(){
    localStorage.setItem('snake-speed', speed.value);
}

function saveApples(){
    localStorage.setItem('apples', applesQ.value);
}


    // if(level[0].value == 'novice'){
    //     localStorage.setItem('level', level[0].value);
    // }
    // if(level[1].value == 'intermediate'){
    //     localStorage.setItem('level', level[1].value);
    // }



// console.log(level.length)
