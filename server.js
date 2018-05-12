// =============================================================
const express = require("express");
const bodyParser = require("body-parser");

// Sets up the Express App
// ===============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Make the static files available for the consumption of the app.
app.use(express.static(process.cwd() + '/public'));

// Sets up the Express app to handle data parsing
//=================================================================
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Sets up the handlebar engine.
//==================================================================
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Linking the routing 
//=================================================================

var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Starts the server to begin listening
// ===============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("heruko");
  });