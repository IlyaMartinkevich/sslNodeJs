var express = require('express');
var fs = require('fs');
var https = require('https');
var app = express();


app.get('/', function (req, res) {
    res.send('Hello World!');
});


https.createServer({
    key: fs.readFileSync('ssl/rootCA.key'),
    cert: fs.readFileSync('ssl/rootCA.crt')
}, app)
    .listen(3000, function () {
        console.log('Example server listening on port 3000! Go to https://localhost:3000/')
    });