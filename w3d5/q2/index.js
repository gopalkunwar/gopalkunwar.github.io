const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send(
        '<form action="/result" method="POST"><label>Name</label> <input name="name" type="text"><label>Age</label><input name="age" type="number"><button type="submit">Submit Qurey</button></form>');
});


app.post('/result', (req, res) => {
    // let { name, age } = req.body;
    res.send(`Your name is ${req.body.name} & your age is ${req.body.age}.`)
});

app.listen(3000);