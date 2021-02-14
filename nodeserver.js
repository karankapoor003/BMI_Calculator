const express = require('express');
const bodyParser =require("body-parser")
const cors = require("cors")
const path = require("path")

const app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/",function(req,res){
      res.send("<h1><u>My name is karan Kapoor</u></h1> i am a student")
});

app.get("/BMI",function(req,res){
    res.sendFile(__dirname +"/bmi.html");
});
app.post("/BMI",function(req,res){
    console.log(req.body);
    let W1 = Number(req.body.weight);
    let H1 = Number(req.body.height);

    let bmi = W1 / (H1 * H1); 
     
    res.render('index',{
       result:bmi
        
    } );
    
});
app.listen(3000,function(req,res){
    console.log("karan kapoor made the server in 2020");
});