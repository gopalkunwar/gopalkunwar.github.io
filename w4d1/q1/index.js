const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const app = express();

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, "views"));

app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.render('index', {
        //req.cookies is object that contais the cookies sent by the request.
        cookies: req.cookies
    })
});

app.post('/add', (req, res) => {
    //res.cookie() function is used to set the cookie name to value.
    //req. body object to receive data through POST and PUT requests in the Express server
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
});

app.listen(3000);