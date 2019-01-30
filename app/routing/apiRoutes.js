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
        friendData.push(req.body);
        res.json(friendData);
    });
};