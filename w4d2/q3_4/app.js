const path = require('path');
const express = require('express');
const session=require('express-session');
const app = express();

const product = require('./router/router'); 


app.use("/css", express.static(path.join(__dirname, "css")));
app.use("/img", express.static(path.join(__dirname, "img")));

app.use(express.urlencoded({extended: true}));


// session middleware
const oneDay = 1000 * 60 * 60 * 24;
app.use(session({
    secret: "secretsaltkey",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: true 
}));

// template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "views"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'views', 'js')));


// set router
app.use(product);

let items = [];

app.post("/addToCart", (req, res) => {
    console.log(req.body)
      let present = false;
          if(!items.length) {
              items.push({
                 prodName: req.body.prodName,
                 prodPrice: parseFloat(req.body.prodPrice),
                  prodQty: 1,
              })
          } else{
              for (let c of items) {
                  if (c.prodName == req.body.prodName) {
                    c.prodPrice += parseFloat(req.body.prodPrice);
                    present = true;
                    c.prodQty++;
                  }
                }
                
          if (!present) {
                  items.push({
                 prodName: req.body.prodName,
                prodPrice: parseFloat(req.body.prodPrice),
                prodQty: 1,
                 });
            }
  
          }    
          res.status(200).end();

  });

  app.get("/shoppingcart", (req,res) => {
    res.render('shoppingcart', {
        cartItems: items, pageTitle: "Shopping Cart"
    })
})

app.listen(3000, () => {
    console.log(`Server is running on 3000`);
})


