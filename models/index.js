var mongoose = require("mongoose");


//connect app to database
mongoose.connect("mongodb://localhost/myTripPlanner");

var placeSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number]
});

var hotelSchema = new mongoose.Schema({
  name: String,
  place: [placeSchema],
  num_starts: {type: Number, min: 1, max: 5},
  amenities: [String]
});

var thingsToDoSchema = new mongoose.Schema({
  name: String,
  place: [placeSchema],
  age_range: String
});

var restaurantSchema = new mongoose.Schema({
  name: String,
  place: [placeSchema],
  cuisine: [String],
  price: {type: Number, min: 1, max: 5}
});


var Place = mongoose.model("Place", placeSchema);
var Hotel = mongoose.model("Hotel", hotelSchema);
var ThingsToDo = mongoose.model("ThingsToDo", thingsToDoSchema);
var Restaurant = mongoose.model("Restaurant", restaurantSchema);

module.exports = {
  Place: Place,
  Hotel: Hotel,
  ThingsToDo: ThingsToDo,
  Restaurant: Restaurant
};