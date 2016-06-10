var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended:true}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')

// Routes and Logic

app.get('/', function(req, res) {
  res.render('index');
});

app.post('/survey', function (req, res){
  var userinfo = req.body;
  res.render('result', {user: userinfo})
})


app.listen(7000, function() {
  console.log('listening on port 7000');
})
