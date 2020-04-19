var express = require('express');
var fs = require('fs');
var https = require('https');
var http = require('http');
var app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const bodyParser = require('body-parser');



app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//app.get('/getHashString/:str', function (req, res) {
app.get('/', function (req, res) {
   // res.statusCode=200;
res.send("<h1>Hello World</h1>");
});

http.createServer( app)
    .listen(3001, function () {
        console.log('Example server listening on port 3000! Go to http://127.0.0.1:3001/')
    });

https.createServer({
    key: fs.readFileSync('ssl/rootCA.key'),
    cert: fs.readFileSync('ssl/rootCA.crt')
}, app)
    .listen(3000, function () {
        console.log('Example server listening on port 3000! Go to https://127.0.0.1:3000/')
});
