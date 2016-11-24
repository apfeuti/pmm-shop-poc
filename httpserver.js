var express = require("express");
var bodyParser = require("body-parser");
var app = express();

var webappRoot = __dirname;

app.set('port', (process.env.PORT || 5000));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", express.static(webappRoot));


app.get('/', function (req, res) {
  res.sendFile("index.html", { root: webappRoot });
});

app.get('/api/dimension', function (req, res) {
  res.json({ dimension: Math.floor((Math.random() * 100) + 1)});
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});