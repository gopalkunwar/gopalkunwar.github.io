const express=require('express');
const path=require('path');

const app=express();

app.use(express.urlencoded({ extended: false }));

app.use('/css', express.static(path.join(__dirname,'css')));
app.use('/js', express.static(path.join(__dirname,'js')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/index.html'));

});

app.post('/result',(req,res)=>{
    let{name,age}=req.body;
    res.send(`Your name is ${name} & your age ${age}`);
});
app.listen(3000);