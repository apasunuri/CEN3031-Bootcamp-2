/* Add all the required libraries*/
var mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
mongoose.connect(config.db.uri, { useNewUrlParser: true });

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
  Query = Listing.find({name: "Library West"}, function(err, result) {
    if(err)
      throw err;
    console.log(result);
  });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Query = Listing.find({code: "CABL"}, function(err, result) {
    if(err)
      throw err;
    result.forEach(function(element) {
      element.remove(function(err) {
        if(err)
          throw err;
      });
    });
    console.log(result);
  });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Query = Listing.find({name: "Phelps Laboratory"}, function(err, result) {
    if(err)
      throw err;
    result.forEach(function(element) {
      element.address = "1953 Museum Rd, Gainesville, FL 32603";
      element.save(function(err) {
        if(err)
          throw err;
      });
    });
    console.log(result);
  });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
  Query = Listing.find({}, function(err, result) {
    console.log(result);
  });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
