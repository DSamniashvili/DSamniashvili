const express = require('express');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT || 3040;

app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('index', { title: 'color exc9', message: 'Excercise N9 - chosing colors!', color: `${req.cookies.color}` });
});


app.post('/', (req, res) => {
    let color = req.body.favcolor;
    console.log(`color : ${color}`);
    res.cookie('color', color);
    res.redirect('/')
})


app.listen(PORT);