class Config extends Canvas {
    constructor(){
        super("snake");
        
    }
    startGame(){
        let game = '';
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
}
