const express = require('express');
const router = express.Router();

const UserService = require('../services/user-service');
const userServer = new UserService();

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

// get all 
router.get('/', (req,res) => {
    // asynchronous function call structure 
    userServer.findUsers().then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});


//get by role
router.get('/:role', (req,res) => {
    // asynchronous function call structure 
    userServer.findUserByRole(req.params.role).then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});

//get by email
router.get('/email/:email', (req,res) => {
    // asynchronous function call structure 
    userServer.findUserByEmail(req.params.email).then(users => {
        res.json(users);
    }).catch(err => {
        res.json(err);
    });
});






//get user by email 







// get by id
// router.get('/:id', (req,res) => {
//     // asynchronous function call structure 
//     userServer.findUserById(req.params.id).then(user => {
//         res.json(user);
//     }).catch(err => {
//         res.json(err);
//     });
// });

//create
router.post('/create', (req,res) => {
    // asynchronous function call structure 
    userServer.createUser(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

//delete
router.delete('/delete/:id', (req,res) => {
    // asynchronous function call structure 
    userServer.deleteUSer(req.params.id).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;