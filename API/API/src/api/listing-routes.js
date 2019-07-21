const express = require('express');
const fs = require("fs");
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

authServe.authenticateUser


//get all listings
router.get("/", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        res.json(parseData.listings);
    });
});


//get listings with hostID
router.get("/:hostID", (req, res) => {
    fs.readFile("./src/data/data.json", function (err, data) {
        if (err) throw err;
        var parseData = JSON.parse(data);
        const found = parseData.listings.some(listing => listing.hostID === req.params.hostID);
        if (found) {
            res.json(parseData.listings.filter(listing => listing.hostID === req.params.hostID));
        } else {
            res.status(400).json({ msg: "Listing not found" });
        }
    });
});

//listings add
router.post('/add', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        else if (data) {
            let listings = JSON.parse(data);
            const found = listings.listings.some(listing => listing.listingID === req.body.listingID);
            let listingCount = listings.listings.length;
            if (!found) {
                
                let listing = {
                    hostID: req.body.hostID,
                    listingID: (listings.listings[listingCount-1].listingID+1),
                    name: req.body.name,
                    location: req.body.location,
                    price: req.body.price,
                    imgURL: req.body.imgURL
                }
                listings.listings.push(listing);

                fs.writeFile("./src/data/data.json", JSON.stringify(listings), (err) => {
                    res.send(err);
                    console.log(err);
                    throw Error;
                });

                res.status(200).json(listing);
            }  
            else {
                res.send("Listing already exists");
                
            }
        }
    });
});





module.exports = router;