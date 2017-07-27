var path = require ("path")
var express = require ("express");
var router = express.Router();

router.get("/public/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

router.get("/public/home", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = router;