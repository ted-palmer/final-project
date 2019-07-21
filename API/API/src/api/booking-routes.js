const express = require('express');
const fs = require("fs");
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

authServe.authenticateUser


//get all bookings
router.get("/", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        res.json(parseData.bookings);
    });
});

//get bookings with lisitng id and status
router.get("/listing/:listingID/:status", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        const found = parseData.bookings.some((booking => booking.listingID === req.params.listingID) && (booking => booking.status === req.params.status));
        if (found) {
            res.json(parseData.bookings.filter((booking => booking.listingID === req.params.listingID) && (booking => booking.status === req.params.status)));
        } else {
            res.status(400).json({ msg: "Booking not found" });
        }
    });
});

//get bookings with userid and status
router.get("/user/:userID/:status", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        const found = parseData.bookings.some((booking => booking.userID === req.params.userID) && (booking => booking.status === req.params.status));
        if (found) {
            res.json(parseData.bookings.filter((booking => booking.userID === req.params.userID) && (booking => booking.status === req.params.status)));
        } else {
            res.status(400).json({ msg: "Booking not found" });
        }
    });
});

//get bookings with start date and end date
router.get("/date/:startDate/:endDate", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        const found = parseData.bookings.some((booking => booking.startDate === req.params.startDate) && (booking => booking.endDate === req.params.endDate));
        if (found) {
            res.json(parseData.bookings.filter((booking => booking.startDate === req.params.startDate) && (booking => booking.endDate === req.params.endDate)));
        } else {
            res.status(400).json({ msg: "Booking not found" });
        }
    });
});




module.exports = router;