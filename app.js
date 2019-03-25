var express = require('express'); 
var app = express();

var port = process.env.PORT || 3000; // set environment variable for the port

app.use('/assets', express.static(__dirname + '/public')); // using built in static middleware to say everytime node sees /assets/someFile, it will go find the public folder and stream the matching result

app.get('/', function(req, res) {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet/></head><body><h1>Hello world!</h1></body></html>');
});

app.get('/person/:id', function(req, res) {
  res.send(`<html><head></head><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', function(req, res) {
  res.json({ firstname: 'John', lastname: 'Doe' });
});

app.listen(port)