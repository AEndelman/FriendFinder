//Link Friends api
var path = require("path");
var friendData = require("../data/friends");

//Routes

module.exports = function(app) {
//Shows APIs

  app.get("/api/friends", function(req, res) {
    res.json(friendData);
  });

// Handles the data and places into an array from the JSON

  app.post("/api/friends", function(req, res) {
      friendData.push(req.body);
      var input = req.body.scores;

      friendData.forEach(function(element){
        element['similarity'] = 0;
          for (var i = 0; i < input.length; i++){
            if (element.scores[i] == input[i]) {
              element.similarity++;
            }
          }
      })
      console.log(friendData)

      function compare(a, b){
        const friendOne = parseFloat(a.similariry);
        const friendTwo = parseFloat(b.similariry);

        let comp = 0;
        if (friendOne < friendTwo){
          comp = 1;
        }
        else if(friendOne > friendTwo){
          comp = -1;
        }
        return comp;
      }

      sortedArr = friendData.sort(compare);
      var friendName = sortedArr[0].name;
      var friendPhoto = sortedArr[0].photoID;
      res.json({ status: "OK", name: friendName, photo:friendPhoto })
      
  });
};
