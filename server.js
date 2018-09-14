//this file is in charge of creating express connection and running node server

//boiler plate for node server
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();
app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({
    extended:false 
}))

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//references routes file
var routes = require("./controllers/burger_controller.js")
app.use("/", routes);

var port = process.env.PORT || 8080;

app.listen(port, function(){
    console.log("app listening on https://localhost:" + port)
});