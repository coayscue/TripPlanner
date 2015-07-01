var express = require('express');
var router = express.Router();
var models = require("../models");

/* GET home page. */
router.get('/', function(req, res, next) {
  var objects = {};

  models.Hotel.find().exec().then(function(hotels){
    objects.hotels = hotels;
    return models.Restaurant.find().exec();
  }).then(function(restaurants){
    objects.restaurants = restaurants;
    return models.ThingsToDo.find().exec();
  }).then(function(thingsToDo){
    objects.thingsToDo = thingsToDo;
    return objects;
  }).then(function(objects){
    // res.json(objects);
    // console.log(res.header);
    res.render("index", {objects: objects});
  }).then(null, function(err){
    console.log(err);
    next(err);
  });

});


// router.get('./bower_components/:path', function (req, res, next) {
//   res.send()
// })


module.exports = router;
