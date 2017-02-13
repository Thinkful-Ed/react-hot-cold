var express = require('express');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 8080;

var fewestGuesses = Infinity;

var app = express();

var jsonParser = bodyParser.json();

app.use(express.static('build'));

app.get('/fewest-guesses', function(req, res) {
    res.json({"guesses": fewestGuesses});
});

app.post('/fewest-guesses', jsonParser, function(req, res) {
    console.log(req.body);
    fewestGuesses = Math.min(req.body.guesses, fewestGuesses);
    res.json({});
});

app.listen(PORT, function () {
    console.log('Example app listening on localhost:' + PORT);
});
