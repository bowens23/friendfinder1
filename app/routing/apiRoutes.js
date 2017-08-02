var express = require("express");
var app = express.Router();


var friends=[];
app.post("/api/friends", function(req, res) {

  var newFriend = req.body;


  res.json(newFriend);

  console.log(newFriend);
var comparisonArray=[]
for(var i=0; i<friends.length; i++){
var difference = Math.abs(friends[i].hiking-newFriend.hiking)+Math.abs(friends[i].parties-newFriend.parties)
comparisonArray.push(difference)

var i = comparisonArray.indexOf(Math.min(...comparisonArray));
console.log (friends)
console.log ( "You're New Best Friend is " + friends[i].name);
}
friends.push(newFriend);
});
module.exports = app
