//set up express and bodyparser

var express = require("express");
var bodyParser = require("body-parser");
//set up express and path
var app = express();
var path = require("path");
//connect to the localhost PORT
const PORT = process.env.PORT || 4000;
//sets up data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
//starts tge server
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});