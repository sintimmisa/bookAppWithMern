const express =require("express");
const connectDB = require("./config/db");

//Initialize express
const app = express();


//Declare Port
const port = process.env.PORT || 8082;

// CAll the Connect Database function from ./config/db.js
connectDB();



app.get("/",/*@Callback */(req, res) => {
    res.send("Hello Node App")
});

app.listen(port, () => {
    console.log(`Server Listening at localhost:${port}`)
})