const express = require('express');
const fs = require("fs");
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

//login
router.post('/login', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        let users = JSON.parse(data);
        const found = users.users.some(user => (user.email === req.body.email)&&(user.password === req.body.password));
        console.log(found);
        if (found) {
            res.send("Login successful");
            return true;
        }

        else{
            res.send("User doesn't exist");
            return false;
        }
    });
});



//register new user
router.post('/register', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        else if (data) {
            let users = JSON.parse(data);
            const found = users.users.some(user => user.id === req.body.id);
            let userCount = users.users.length;
            if (!found) {
                
                let user = {
                    id: (users.users[userCount-1].id + 1),
                    name: req.body.name,
                    surname: req.body.surname,
                    cellPhone: req.body.cellPhone,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                }
                users.users.push(user);

                fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
                    res.send(err);
                });

                res.status(200).json(user.id);
            }  
            else {
                res.send("user already exists");
                
            }
        }
    });
});

// //create
// router.post('/register', (req,res) => {
//     let response = authServe.authenticateUser(req.body);
//     res.send(response); 
// });

module.exports = router;