const express = require('express');
const path = require('path');
const app = express();

const product = require('./router/router'); // router

app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/img", express.static(path.join(__dirname, "img")));


app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(product); // set router

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
})





