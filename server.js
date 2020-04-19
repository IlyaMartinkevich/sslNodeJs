var express = require('express');
var fs = require('fs');
var https = require('https');
var http = require('http');
var app = express();
const morgan = require("morgan");
app.use(morgan("dev"));
const bodyParser = require('body-parser');

var md5 = require('md5');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//app.get('/getHashString/:str', function (req, res) {
app.get('/:str', function (req, res) {
    var timeInMs = Date.now();

res.send(md5(req.params.str+timeInMs));
});

http.createServer( app)
    .listen(3001, function () {
        console.log('Example server listening on port 3001! Go to http://localhost:3001/')
    });

https.createServer({
    key: fs.readFileSync('ssl/rootCA.key'),
    cert: fs.readFileSync('ssl/rootCA.crt')
}, app)
    .listen(3000, function () {
        console.log('Example server listening on port 3000! Go to https://localhost:3000/')
});
