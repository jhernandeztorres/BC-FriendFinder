// Path dependency to get correct file path
const path = require("path");

// Routing
module.exports = function(app){
// HTML GET Requests
    app.get("/survey", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/survey.html"));
    });
    
// Route to default to home
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    })
}