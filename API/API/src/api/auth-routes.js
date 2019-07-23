const express = require('express');
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();


//register
router.post('/register', (req,res) => {
    // asynchronous function call structure 
    authServe.register(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

//login
router.post('/login', (req,res) => {
    authServe.login(req.body).then(user => {
        res.json(user);
    }).catch(err => {
        res.json(err);
    });
});

module.exports = router;