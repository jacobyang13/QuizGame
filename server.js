var express = require("express");
var bodyParser = require('body-parser');

var app = express();


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var router = express.Router();
// test route
router.get('/', function(req, res) {
  res.json({message: 'welcome to our dockerdashboard module apis'});
});

const PORT = process.env.PORT || 3000;

app.use(function(req, res, next) {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));
app.listen(PORT, function() {
  console.log('Express server is up on port ' + PORT);
});
