var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../model/burger.js");



// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/index", function(req, res) {
  res.redirect('/');
});


router.post('/burger/create', function (req, res) { 
  console.log("CREATING BURGER NOW!")
  console.log(req.body.burger_name);
  burger.create(req.body.burger_name, function(result) {
    res.redirect('/');
    });
  });


router.post("/burger/eat/:id", function(req, res) {
  console.log("UPDATE POST METHOD!")
  var condition = "id = " + req.params.id;
  console.log("condition", condition);

  burger.update(
    {devoured: 1
  },condition ,function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.redirect('/');
    }
  });
});


module.exports = router;
