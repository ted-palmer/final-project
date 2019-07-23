var mysqlConn = require("../database/database");

//Task object constructor
var User = (user) => {
    this.name = user.name;
    this.surname = user.surname;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
};

User.createUser = (newUser, result) => {
    mysqlConn.query("INSERT INTO user set ?", newUser, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


//authenticate user
User.authenticate = (user, result) => {
    mysqlConn.query("Select * from user where email = ? and password = ?", [user.email, user.password], (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};



User.findUserByName = (userName, result) => {
    mysqlConn.query("Select * from user where name = ?", userName, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};


//adding this
User.findUserByEmail = (userEmail, result) => {
    mysqlConn.query("Select * from user where email = ?", userEmail, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

//find user by role
User.findUserByRole = (userRole, result) => {
    mysqlConn.query("Select * from user where role = ?", userRole, (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};





User.findAllUsers = (result) => {
    mysqlConn.query("Select * from user", (err, res) => {
        if (err) {
        console.log("error: ", err);
        result(err, null);
        } else {
        console.log(res);
        result(null, res);
        }
    });
};

module.exports = User;