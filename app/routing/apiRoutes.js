var friends = require("../data/friends");
var friendScore = 0;
var scoreArray = [];
var diffArray = [];

// function bestFriendCalc() {
//   for (var i = 0; i < friends.length; i++) {
//     for (var j = 0; j < friends[i].scores.length; j++) {
//       let score = parseInt(friends[i].scores[j]);
//       friendScore += score;
//     }
//     scoreArray.push(friendScore);
//     friendScore = 0;
//   }
//   var lastPerson = parseInt(scoreArray.length - 1)
//   for (var k = 0; k < scoreArray.length - 1; k++) {
//     var diffScore = parseInt(scoreArray[k] - scoreArray[lastPerson]);
//     var absoluteDiffScore = Math.abs(diffScore)
//     diffArray.push(absoluteDiffScore)
//   }
//   Array.min = function (diffArray) {
//     return Math.min.apply(Math, diffArray);
//   };
//   var minimum = Array.min(diffArray);
//   var indexOfMinimum = diffArray.indexOf(minimum)
//   var bestFriend = friends[indexOfMinimum]
//   res.json(bestFriend);
//   console.log(res.json(bestFriend))
// };

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
  app.post("/api/friends", function (req, res) {
    friends.push(req.body);
    // bestFriendCalc();
    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < friends[i].scores.length; j++) {
        let score = parseInt(friends[i].scores[j]);
        friendScore += score;
      }
      scoreArray.push(friendScore);
      friendScore = 0;
    }
    var lastPerson = parseInt(scoreArray.length - 1)
    for (var k = 0; k < scoreArray.length - 1; k++) {
      var diffScore = parseInt(scoreArray[k] - scoreArray[lastPerson]);
      var absoluteDiffScore = Math.abs(diffScore)
      diffArray.push(absoluteDiffScore)
    }
    Array.min = function (diffArray) {
      return Math.min.apply(Math, diffArray);
    };
    var minimum = Array.min(diffArray);
    var indexOfMinimum = diffArray.indexOf(minimum)
    var bestFriend = friends[indexOfMinimum]
    res.json(bestFriend);
    console.log(res.json(bestFriend))
  });
  app.post("/api/clear", function (req, res) {
    friends.length = 0;
    res.json({ ok: true });
  });
};