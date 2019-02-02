// Link to a data source
const friendData = require("../data/friendData");

// Routing
module.exports = function(app){
// API GET Requests
    app.get("/api/friends", (req, res) => {
        res.json(friendData);
    })
// API POST Requests
    app.post("/api/friends", (req, res) => {
        let userScore = req.body.scores;

        let friendName = '';
        let friendImg = '';
        let totalDiff = 50;

        // Looping through friends array
        for(let i = 0; i < friendData.length - 1; i++){
            let diff = 0;
            // Looping through score array from user input
            for(let j = 0; j < userScore.length; j++){
                diff += Math.abs(friendData[i].scores[j] - userScore[j]);
            }

            if(diff <= totalDiff){
                console.log(`Closest match found = ${diff}
Friend name = ${friendData[i].name}
Friend image = ${friendData[i].photo}`);
            }
        }

        // friendData.push();



        // friendData.push(req.body);
        res.json({status: 'OK', friendName: friendName, friendImg: friendImg});
    });
};