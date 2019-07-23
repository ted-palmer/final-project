const fs = require("fs");
const Booking= require("../models/booking");

module.exports = class BookingService {
    
    constructor() {}

    createBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
                Booking.createBooking(bookingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
            });
        }


    //remove booking
    removeBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            Booking.removeBooking(bookingReq, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }


    //update booking
    updateBooking(bookingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            Booking.updateBooking(bookingReq, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }




    // find all bookings
        findBookings()
        {        
            return new Promise((resolve, reject) => {        
                 Booking.findAllBookings((err, res) => {
                     if (err) {
                     reject(err);
                     }
                     resolve(res);
                 });
            });
        }


    //find bookings by listing id and status
    findBookingsByListing(listingId, status) {
        return new Promise((resolve, reject) => {
            //console.log("SERVICE err: " + err);   
            Booking.findBookingByListingId(listingId, status, (err, res) => {
                //console.log("SERVICE err: " + err);
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }


    //find bookings by user id and status
    findBookingsByUser(userId, status) {
        return new Promise((resolve, reject) => {
            //console.log("SERVICE err: " + err);   
            Booking.findBookingByUserId(userId, status, (err, res) => {
                //console.log("SERVICE err: " + err);
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }

    //find bookings by start and end date
    findBookingsByDate(dateStart, dateEnd) {
        return new Promise((resolve, reject) => {
            //console.log("SERVICE err: " + err);   
            Booking.findBookingByDate(dateStart, dateEnd, (err, res) => {
                //console.log("SERVICE err: " + err);
                if (err) {
                    reject(err);
                } else {
                    resolve(res);
                }
            });
        });
    }




        // // find bookings by listing id and status
        // findBookings(listingId, status)
        // {        
        //     return new Promise((resolve, reject) => {        
        //          Booking.findBookings((err, res) => {
        //              if (err) {
        //              reject(err);
        //              }
        //              resolve(res);
        //          });
        //     });
        // }



    }