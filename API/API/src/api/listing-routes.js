const express = require('express');
const router = express.Router();

const ListingService = require('../services/listing-service');
const listingServer = new ListingService();


// get all listings
router.get('/', (req,res) => {
    // asynchronous function call structure 
    listingServer.findListings().then(listings => {
        res.json(listings);
    }).catch(err => {
        res.json(err);
    });
});



//create
router.post('/add', (req,res) => {
    // asynchronous function call structure 
    listingServer.createListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});


//update listing
router.post('/update', (req,res) => {
    // asynchronous function call structure 
    listingServer.updateListing(req.body).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});

//delete by id
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    listingServer.removeListing(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});




//get by id
router.get('/:id', (req,res) => {
    // asynchronous function call structure 
    listingServer.findListingById(req.params.id).then(listing => {
        res.json(listing);
    }).catch(err => {
        res.json(err);
    });
});





module.exports = router;