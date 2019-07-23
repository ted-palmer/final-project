var mysqlConn = require("../database/database");

//Task object constructor
var Listing = (listing) => {
    this.id = listing.id;
    this.title = listing.title;
    this.location = listing.location;
    this.description = listing.description;
    this.numberOfPeople = listing.numberOfPeople;
    this.pricePerNight = listing.pricePerNight;
    this.hostId = listing.hostId;

};

Listing.createListing = (newListing, result) => {
    mysqlConn.query("INSERT INTO listings set ?", newListing, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

 //update listing
 Listing.updateListing = (newListing, result) => {
  mysqlConn.query("UPDATE listings SET title = ?, location = ?, description = ?, numberOfPeople = ?, pricePerNight = ?, hostId = ? WHERE id = ?", [newListing.title, newListing.location, newListing.description, newListing.numberOfPeople, newListing.pricePerNight, newListing.hostId, newListing.id], (err, res) => {
      if (err) {
          console.log("error: ", err);
          result(err, null);
      } else {
          console.log(res);
          result(null, res);
      }
  });
};


//remove listing
Listing.removeListing = (listingId, result) => {
  mysqlConn.query("DELETE FROM listings WHERE id = ?", listingId, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};



// User.findUserByName = (userName, result) => {
//     mysqlConn.query("Select * from user where name = ?", userName, (err, res) => {
//         if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         } else {
//         console.log(res);
//         result(null, res);
//         }
//     });
// };


// //adding this
// User.findUserByEmail = (userEmail, result) => {
//     mysqlConn.query("Select * from user where email = ?", userEmail, (err, res) => {
//         if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         } else {
//         console.log(res);
//         result(null, res);
//         }
//     });
// };



Listing.findAllListings = (result) => {
    mysqlConn.query("Select * from listings", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


//find listings by hostId
Listing.findListingById = (listingId, result) => {
    mysqlConn.query("Select * from listings where hostId = ?", listingId, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


//update listing


module.exports = Listing;