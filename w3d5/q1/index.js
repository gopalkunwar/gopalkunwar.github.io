const express = require('express');
const app = express();
app.get('/', (req, res) => {
 let name = req.query.name;
 let age=req.query.age;
 if (!name) {
 name = "unknown";
 }

 if(!age){
     age="unknown"
 }
 res.send(`Your name is ${name} & your age is ${age}`);
});
app.listen(3000);