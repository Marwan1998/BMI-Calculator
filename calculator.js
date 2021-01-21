const express = require("express");
const bodyParsor = require("body-parser");

const app = express();
app.use(bodyParsor.urlencoded({extended: true}));



app.get("/", function(req,res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){

var weight = Number(req.body.weigth);
var heigh = Number(req.body.heigh);
var bmiResult = weight * heigh;

res.send("Your BMI calculate is: " + bmiResult);
});


app.listen(3000, function(){
  console.log("server is running successfully");
});
