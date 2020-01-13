



const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const  app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/", function(req, res){
    res.render("home");
});

app.get("/signup", function(req, res){
    res.render("signup");
});

app.listen("3000", function(){
    console.log("Listening on port 3000.")
});