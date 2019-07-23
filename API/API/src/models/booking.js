var mysqlConn = require("../database/database");

//Task object constructor
var Booking = (booking) => {
    this.id = booking.id;
    this.userId = booking.userId;
    this.listingId = booking.listingId;
    this.hostId = booking.hostId;
    this.status = booking.status;
    this.dateStart = booking.dateStart;
    this.dateEnd = booking.dateEnd;

};

Booking.createBooking = (newBooking, result) => {
    mysqlConn.query("INSERT INTO bookings set ?", newBooking, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//remove booking
Booking.removeBooking = (bookingId, result) => {
    mysqlConn.query("DELETE FROM bookings WHERE id = ?", bookingId, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    });
  };

  //update booking
  Booking.updateBooking = (newBooking, result) => {
    mysqlConn.query("UPDATE bookings SET userid = ?, listingid = ?, hostid = ?, status = ?, dateStart = ?, dateEnd = ? WHERE id = ?", [newBooking.userId, newBooking.listingId, newBooking.hostId, newBooking.status, newBooking.dateStart, newBooking.dateEnd, newBooking.id], (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
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



Booking.findAllBookings = (result) => {
    mysqlConn.query("Select * from bookings", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


//find booking by listing id and status
Booking.findBookingByListingId = (bookingListingId, bookingStatus, result) => {
    mysqlConn.query("SELECT * from bookings WHERE listingId = ? AND status = ?", [bookingListingId, bookingStatus], (err, res) => {
        console.log("MODEL RES: " + res);
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};

//find booking by user id and status
Booking.findBookingByUserId = (bookingUserId, bookingStatus, result) => {
    mysqlConn.query("SELECT * from bookings WHERE userId = ? AND status = ?", [bookingUserId, bookingStatus], (err, res) => {
        console.log("MODEL RES: " + res);
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};


//find bookings by start and end date
Booking.findBookingByDate = (bookingDateStart, bookingDateEnd, result) => {
    mysqlConn.query("SELECT * from bookings WHERE dateStart = ? AND dateEnd = ?", [bookingDateStart, bookingDateEnd], (err, res) => {
        console.log("MODEL RES: " + res);
        if (err) {
            console.log("error: ", err);
            result(err, null);
        } else {
            console.log(res);
            result(null, res);
        }
    });
};



//find all bookings with listing id and status
// Booking.findBookings = (listingId, status, result) => {
//     mysqlConn.query("Select * from bookings where listingId = ? and status = ?", listingId, status, (err, res) => {
//         if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         } else {
//         console.log(res);
//         result(null, res);
//         }
//     });
// };


// //find listings by hostId
// Listing.findListingById = (listingId, result) => {
//     mysqlConn.query("Select * from listings where hostId = ?", listingId, (err, res) => {
//         if (err) {
//         console.log("error: ", err);
//         result(err, null);
//         } else {
//         console.log(res);
//         result(null, res);
//         }
//     });
// };


// //update listing
// Listing.updateListingById = (listingId, listing, result) => {
//     mysqlConn.query(
//       "UPDATE user SET listings = ? WHERE id = ?",
//       [listing, listingId],
//       (err, res) => {
//         if (err) {
//           console.log("error: ", err);
//           result(null, err);
//         } else {
//           result(null, res);
//         }
//       }
//     );
//   };


module.exports = Booking;