const express = require('express');
const fs = require("fs");
const router = express.Router();

const AuthService = require('../services/auth-service');

const authServe = new AuthService();

authServe.authenticateUser

// get all users
router.get('/', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        else if (data) {
            let dataParsed = JSON.parse(data);
            res.send(dataParsed.users);
        }
    });
});


//get users with role
router.get("/:role", (req, res) => {
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

// //create
// router.post('/create', (req,res) => {
//     fs.readFile("./src/data/data.json", (err,data) => {
//         if (err) { throw err; }
//         else if (data) {
//             let users = JSON.parse(data);
//             const found = users.users.some(user => user.id === req.body.id);
//             let userCount = users.users.length;
//             if (!found) {
                
//                 let user = {
//                     id: (users.users[userCount-1].id++).toString(),
//                     name: req.body.name,
//                     surname: req.body.surname,
//                     cellPhone: req.body.cellPhone,
//                     email: req.body.email,
//                     password: req.body.password,
//                     role: req.body.role
//                 }
//                 users.users.push(user);

//                 fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
//                     res.send(err);
//                 });

//                 res.status(200).json(user.id);
//             }  
//             else {
//                 res.send("user already exists");
                
//             }
//         }
//     });
// });

// router.post("/create", (req, res) => {
//     const user = req.body;
//     fs.readFile("./src/data/data.json", function(err, data) {
//       var error = false;
//       var errMsg = "";
//       if (err) {
//         error = true;
//         throw err;
//       } else {
//         var count = 0;
  
//         if (data.length > 0) {
//           var parseData = JSON.parse(data);
//           parseData.users.forEach(existingUser => {
//             if (existingUser.email === user.email) {
//               throw new Error("This email address already been used");
//             }
//             count++;
//           });
//         } else {
//           parseData = {
//             users: []
//           };
//         }
  
//         const newUser = {
//           id: (count + 1).toString(),
//           name: user.name,
//           surname: user.surname,
//           cellPhone: user.cellPhone,
//           email: user.email,
//           password: user.password,
//           role: user.role
//         };
  
//         parseData.users.push(newUser);
//         fs.writeFile("./src/data/data.json", JSON.stringify(parseData), function(
//           err
//         ) {
//           if (err) {
//             error = true;
//             throw err;
//           }
//           res.json(newUser);
//         });
//       }
  
//       if (error) {
//         res.status(400).json({ msg: errMsg });
//       } else {
//         res.json(user);
//       }
//     });
//   });

//delete
router.delete('/delete/:id', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        else if (data) {
            let users = JSON.parse(data);
            const found = users.users.some(user => user.id === req.params.id);
            if (found) {
                users.users.splice(req.params.id-1,1);
                console.log(users.users.length);

                fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
                    res.send(err);
                });

                res.status(200).json("user was deleted");
            }  
            else {
                res.send("user doesn't exists");
                
            }
        }
    });
});

module.exports = router;