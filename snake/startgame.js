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


        function check(level, speed){
            alert(`You\'re automatically moved to the next Level!`);
            localStorage.setItem('level', 'intermediate')
            localStorage.removeItem('snake-speed');
            game = setInterval(draw, 120);
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


        if (level == 'hard' && speed < maxSpeed) {
            game = setInterval(draw, 60 - speed);
        }
        else if (level == 'hard' && speed > maxSpeed) {
            alert(`Maximum level avialable`);
            localStorage.setItem('snake-speed', 50)
            return;
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


