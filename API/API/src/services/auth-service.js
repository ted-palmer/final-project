const UserService = require('./user-service');
const userServer = new UserService();
const fs = require("fs");

module.exports = class AuthService {
    constructor() {}

// with services we need asynchronous functions due to the nature of JavaScript runtime environment
// Look at JavaScript concurrency model for more information

    // login(userInput) {
    //     // return promise (asynchronous function method)
    //     // https://developers.google.com/web/fundamentals/primers/promises
    //     return new Promise((resolve, reject) => {  
    //         fs.readFile("./src/data/data.json", (err,data) => {
    //             if (err) { reject(err); } // reject error in promise
    //             else if (data) {
    //                 let users = JSON.parse(data);
    //                 const found = users.users.some(user => user.name === userInput.name) &&
    //                 users.users.some(user => user.surname === userInput.surname);
    //                 if (!found) {
    //                     reject('User is not registered'); // reject error in promise
    //                 }  
    //                 else {
    //                     resolve(users.users.filter(user => user.name === userInput.name).filter(user => user.surname === userInput.surname));  // resolve promise to return value
    //                 }
    //             }
    //         });
    //     });
    // }

    
    //logins user
    login(user) {
        return new Promise((resolve, reject) => {  
            //console.log("USER PRINTED HERE: " + user.password);
            userServer.authenticateUser(user).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }





    register(user) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => { 
            userServer.createUser(user).then(userReturned => {
                resolve(userReturned); // resolve promise to return value
            }).catch(err => {
                reject(err); // reject error in promise
            });
        });
    }

}