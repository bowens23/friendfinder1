var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var htmlRoutes = require("./app/routing/htmlRoutes.js");
var apiRoutes = require("./app/routing/apiRoutes.js");
var PORT = 3000 || process.env.PORT;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(htmlRoutes);
app.use(apiRoutes);
app.listen(PORT, function() {
console.log("App listening on PORT " + PORT);});