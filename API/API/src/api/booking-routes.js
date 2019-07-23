const express = require('express');
const router = express.Router();

const BookingService = require('../services/booking-service');
const bookingServer = new BookingService();


// get all bookings
router.get('/', (req,res) => {
    // asynchronous function call structure
    bookingServer.findBookings().then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});


//get booking by listing id and status
//get by role
// router.get('/listing/:listingId/:status', (req,res) => {
//     bookingServer.findBookings(req.params.listingId, req.params.status).then(bookings => {
//         res.json(bookings);
//     }).catch(err => {
//         res.json(err);
//     });
// });



//create
router.post('/add', (req,res) => {
    // asynchronous function call structure
    bookingServer.createBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});


//delete by id
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure
    bookingServer.removeBooking(req.params.id).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});


//update booking
router.post('/update', (req,res) => {
    // asynchronous function call structure
    bookingServer.updateBooking(req.body).then(booking => {
        res.json(booking);
    }).catch(err => {
        res.json(err);
    });
});


//find booking by listing id and status
router.get('/listing/:listingId/:status', (req,res) => {
    // asynchronous function call structure
    bookingServer.findBookingsByListing(req.params.listingId, req.params.status).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});


//find booking by user id and status
router.get('/user/:userId/:status', (req,res) => {
    // asynchronous function call structure
    bookingServer.findBookingsByUser(req.params.userId, req.params.status).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});


//find bookings by start date and end date
router.get('/date/:dateStart/:dateEnd', (req,res) => {
    // asynchronous function call structure
    bookingServer.findBookingsByDate(req.params.dateStart, req.params.dateEnd).then(bookings => {
        res.json(bookings);
    }).catch(err => {
        res.json(err);
    });
});







module.exports = router;
