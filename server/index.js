var express = require('express');
var bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var movies = require('../database-mysql');
// var movies = require('../database-mongo');

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

app.get('/movies', function (req, res) {
  movies.selectAll(function(err, data) {
    console.log('data from selectAll', data);
    if(err) {
      res.sendStatus(500);
    } else {
      console.log('no err GET');
      res.json(data);
    }
  });
});

app.post('/movies', (req, res) => {

  movies.save(req.query.title, (err, data) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(201);
    }
  })
})

app.listen(1234, function() {
  console.log('listening on port 1234!');
});

