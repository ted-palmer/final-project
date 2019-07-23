const fs = require("fs");
const Listing= require("../models/listing");

module.exports = class ListingService {
    
    constructor() {}

    /*
    findUsers()
    {        
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {        
            fs.readFile("./src/data/data.json", (err,data) => {
                if (err) { reject(err); } // reject error in promise
                else if (data) {
                    let dataParsed = JSON.parse(data);
                    resolve(dataParsed.users); // resolve promise to return value
                }
            });
        });
    }
    */

   findListings()
   {        
       return new Promise((resolve, reject) => {        
            Listing.findAllListings((err, res) => {
                if (err) {
                reject(err);
                }
                resolve(res);
            });
       });
   }


   //find listings by hostIe
findListingById(listingId)
{        
    return new Promise((resolve, reject) => {        
         Listing.findListingById(listingId, (err, res) => {
             if (err) {
             reject(err);
             }
             resolve(res);
         });
    });
}

//update listing


//     findUserById(userId) {
//         // return promise (asynchronous function method)
//         // https://developers.google.com/web/fundamentals/primers/promises
//         return new Promise((resolve, reject) => {  
//             fs.readFile("./src/data/data.json", (err,data) => {
//                 if (err) { reject(err); } // reject error in promise
//                 else if (data) {
//                     let users = JSON.parse(data);
//                     const found = users.users.some(user => user.id === userId);
//                     if (!found) {
//                         reject('User is not registered'); // reject error in promise
//                     }  
//                     else {
//                         resolve(users.users.filter(user => user.id === userId));  // resolve promise to return value
//                     }
//                 }
//             });
//         });
//     }

// //adding this
// findLitingById(listingId)
//    {        
//        // return promise (asynchronous function method)
//        // https://developers.google.com/web/fundamentals/primers/promises
//        return new Promise((resolve, reject) => {        
//             User.findUserByEmail(userEmail, (err, res) => {
//                 if (err) {
//                 reject(err);
//                 }
//                 resolve(res);
//             });
//        });
//    }


    /*
    createUser(userReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            fs.readFile("./src/data/data.json", (err,data) => {
                if (err) { reject(err); } // reject error in promise
                else if (data) {
                    let users = JSON.parse(data);
                    const found = users.users.some(user => user.name === userReq.name);
                    let userCount = users.users.length;
                    if (!found) {
                        
                        let user = {
                            id: (parseInt(users.users[userCount-1].id) +  1).toString(),
                            name: userReq.name,
                            surname: userReq.surname,
                            role: userReq.role
                        }
                        users.users.push(user);
        
                        fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
                            if (err) {
                                reject(err); // reject error in promise
                            }
                        });
        
                        resolve(user); // resolve promise to return value
                    }  
                    else {
                        resolve("user already exists"); // resolve promise to return value
                    }
                }
            });
        });
    }
    */
    createListing(listingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
                Listing.createListing(listingReq, (err, res) => {
                    if (err) {
                      reject(err);
                    }
                    resolve(res);
                });
            });
        }

    //update listing
    updateListingbyId(listingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            Listing.updateListingbyId(listingReq, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }



    //delete lisitng
        removeListing(listingReq) {
            // return promise (asynchronous function method)
            // https://developers.google.com/web/fundamentals/primers/promises
            return new Promise((resolve, reject) => {
                    Listing.removeListing(listingReq, (err, res) => {
                        if (err) {
                          reject(err);
                        }
                        resolve(res);
                    });
                });
            }

        
         //update listing
    updateListing(listingReq) {
        // return promise (asynchronous function method)
        // https://developers.google.com/web/fundamentals/primers/promises
        return new Promise((resolve, reject) => {
            Listing.updateListing(listingReq, (err, res) => {
                if (err) {
                    reject(err);
                }
                resolve(res);
            });
        });
    }


    }

    //delete lisitng
    



//     deleteUSer(userId) {
//         // return promise (asynchronous function method)
//         // https://developers.google.com/web/fundamentals/primers/promises
//         return new Promise((resolve, reject) => {
//             fs.readFile("./src/data/data.json", (err,data) => {
//                 if (err) { reject(err); } // reject error in promise
//                 else if (data) {
//                     let users = JSON.parse(data);
//                     const found = users.users.some(user => user.id === userId);
//                     if (found) {
//                         users.users = users.users.filter(user => user.id != userId);

//                         fs.writeFile("./src/data/data.json", JSON.stringify(users), (err) => {
//                             if (err) {
//                                 reject(err); // reject error in promise
//                             }
//                         });

//                         resolve("user was deleted"); // resolve promise to return value
//                     }  
//                     else {
//                         resolve("user doesn't exist"); // resolve promise to return value
//                     }
//                 }
//             });
//         });
//     }

// }
