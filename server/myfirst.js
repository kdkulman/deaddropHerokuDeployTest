//To set this up:
//Step 1) Run "npm install mysql2"
//Step 2) Download mysql
//Step 3) Make your pw "DeadDropDebussy" for now so we dont have to change pw

//To run this back end server:
    //cd server
    //node myfirst.js

//To run the front end (in a second terminal):
    //cd client
    //npm start

var http = require('http');
var mysql = require('mysql2');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

let myHost = 'host: us-cdbr-east-06.cleardb.net';
let myUser = 'bfccc3caa69342';
let myPassword = 'c8f9cfd4';
var con = mysql.createConnection({
    host: myHost,
    user: myUser,
    password: myPassword
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });