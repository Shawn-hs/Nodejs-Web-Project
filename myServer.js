// include the express module which is a Node.js web application framework
var express = require("express");

// create an express application
var app = express();

// helps in extracting the body portion of an incoming request stream
var bodyparser = require('body-parser');

// fs module - provides an API for interacting with the file system
var fs = require("fs");

// helps in managing user sessions
var session = require('express-session');

var app = express();

app.use(session({
  secret: "csci4131secretkey",
  saveUninitialized: true;
  resave: false;
}));

app.listen(9001, ()=>console.log('Listening on port 9001'));



app.get('/',function(req,res){
  res.status(200).send('client/welcome.html')
});

app.get('/login',function(req,res){
  res.status(200).sent("login.html")
});
