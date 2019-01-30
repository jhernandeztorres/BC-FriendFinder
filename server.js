const express = require("express");

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port and for the app to use the one setup by hosting server
const PORT = process.env.PORT || 8080;

// Express app set up tp handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('./public'));

// Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes.js")(app);

// Listener
app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT);
});