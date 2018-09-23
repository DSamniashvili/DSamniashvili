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

function saveInLocal() {
    localStorage.setItem('boardW', boardW.value);
    localStorage.setItem('boardW', boardW.value);
    localStorage.setItem('boardH', boardH.value);
    localStorage.setItem('apples', applesQ.value);
    localStorage.setItem('snake-length', snakeLength.value);
    localStorage.setItem('level', levels.value);
    localStorage.setItem('snake-speed', speed.value);
}

// console.log(localStorage.getItem('boardW'));

