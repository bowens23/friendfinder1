var express = require("express");
var app = express.Router();

app.get("/api/friends1", function(req, res) {
  res.json(friends);
});
var friends=[];
app.post("/api/friends", function(req, res) {

  var newFriend = req.body;
  friends.push(newFriend);
  //console.log(friends.length)
  res.json(newFriend);
  //console.log(newFriend.hiking)
  console.log(friends)

  for(var i=0; i<friends.length; i++){
  	//console.log(friends[i]);
var array=[]
  	var difference = (friends[i].hiking-newFriend.hiking)+(friends[i].parties-newFriend.parties)
array.push(difference)
for (vari=0; i<difference.length; i++){array.sort(); console.log(array[0])}
//return array[0];



  }

//   for(var i=1; i<arr.length; i++){
//     if(arr[i] < smallest){
//         smallest = arr[i];   
//     }
// }
});
module.exports = app
