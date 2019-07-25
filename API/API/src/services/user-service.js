const fs = require("fs");
const User = require("../models/user");

module.exports = class UserService {

    constructor() {}


   findUsers()
   {
       // return promise (asynchronous function method)
       // https://developers.google.com/web/fundamentals/primers/promises
       return new Promise((resolve, reject) => {
            User.findAllUsers((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

 

//find users by role
findUserByRole(userRole)
   {
       return new Promise((resolve, reject) => {
            User.findUserByRole(userRole, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }

   findUserByEmail(userEmail)
   {
       return new Promise((resolve, reject) => {
            User.findUserByEmail(userEmail, (err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }



   //authenticate user
   authenticateUser(user)
   {
        return new Promise((resolve, reject) => {
            User.authenticate(user, (err, res) => {
                if (err) {
                    reject(err);

                } else {
                    resolve(res);
                }
            });
    });
   }


    createUser(userReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            User.findUserByEmail(userReq.email, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    User.createUser(userReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(userReq);
                    });
                }
                else {
                    reject(err);
                }
            })
        });
    }


    removeUser(userReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            User.findUserByName(userReq.name, (err, res) => { // check if user exists
                if (err) {
                    reject(err);
                }
                if (res.length < 1) { // create user
                    User.removeUser(userReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
                }
                else {
                    reject("not sure what to put here: user already exists");
                }
            })
        });
    }

}
