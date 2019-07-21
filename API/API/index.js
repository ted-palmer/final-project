const express = require('express');
const fs = require("fs");
const userRoutes = require("./src/api/user-routes");
const lisitngRoutes = require("./src/api/listing-routes");
const bookingRoutes = require("./src/api/booking-routes");
const authRoutes = require("./src/api/auth-routes");

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => {
    res.send('<h1>Hello World!</h1>')
});

//Middleware function:
const logger = (req,res,next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    next();
}

//Middleware execue:
app.use(logger);
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//App routes
app.use("/api/users", userRoutes);
app.use("/api/listings", lisitngRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/auth", authRoutes);





//authenticate post
app.post('/authenticate/:email/:password', (req,res) => {
    fs.readFile("./src/data/data.json", (err,data) => {
        if (err) { throw err; }
        else if (data) {
            let users = JSON.parse(data);
            const found = users.users.some((user => user.email === req.body.email)&&(user => user.password === req.body.password));
            let userCount = users.users.length;
            if (!found) {
                
                let user = {
                    id: (users.users[userCount-1].id++).toString(),
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

//listings/add post


//bookings/add post
  


app.listen(PORT,()=>console.log(`Server running on port ${PORT}`));
