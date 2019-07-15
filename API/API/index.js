
const express = require('express');
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => {
    res.send('<h1>Yooooooooo</h1>')
});


//get all users
app.get("/api/users", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    res.json(parseData.users);
});
});

//get users with role
app.get("/api/users/:role", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    const found = parseData.users.some(user => user.role === req.params.role);
    if (found) {
      res.json(parseData.users.filter(user => user.role === req.params.role));
    } else {
      res.status(400).json({ msg: "User not found" });
    }
  });
});

//get all listings
app.get("/api/listings", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    res.json(parseData.listings);
});
});

//get listings with hostID
app.get("/api/listings/:hostID", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    const found = parseData.listings.some(listing=> listing.hostID === req.params.hostID);
    if (found) {
      res.json(parseData.listings.filter(listing => listing.hostID === req.params.hostID));
    } else {
      res.status(400).json({ msg: "Listing not found" });
    }
  });
});

//get all bookings
app.get("/api/bookings", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    res.json(parseData.bookings);
});
});

//get bookings with lisitng id and status
app.get("/api/bookings/listing/:listingID/:status", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    const found = parseData.bookings.some((booking => booking.listingID === req.params.listingID)&&(booking => booking.status === req.params.status));
    if (found) {
      res.json(parseData.bookings.filter((booking => booking.listingID === req.params.listingID)&&(booking => booking.status === req.params.status)));
    } else {
      res.status(400).json({ msg: "Booking not found" });
    }
  });
});

//get bookings with userid and status
app.get("/api/bookings/user/:userID/:status", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    const found = parseData.bookings.some((booking => booking.userID === req.params.userID)&&(booking => booking.status === req.params.status));
    if (found) {
      res.json(parseData.bookings.filter((booking => booking.userID === req.params.userID)&&(booking => booking.status === req.params.status)));
    } else {
      res.status(400).json({ msg: "Booking not found" });
    }
  });
});


//get bookings with start date and end date

app.get("/api/bookings/date/:startDate/:endDate", (req, res) => {
  fs.readFile("./src/data/data.json", function(err, data) {
    if (err) throw err;
    var parseData = JSON.parse(data);
    const found = parseData.bookings.some((booking => booking.startDate === req.params.startDate)&&(booking => booking.endDate === req.params.endDate));
    if (found) {
      res.json(parseData.bookings.filter((booking => booking.startDate === req.params.startDate)&&(booking => booking.endDate === req.params.endDate)));
    } else {
      res.status(400).json({ msg: "Booking not found" });
    }
  });
});

//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execue:
app.use(logger);


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



