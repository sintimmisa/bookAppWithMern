const express =require("express");

//Initialize express
const app = express();
//Declare Port
const port = process.env.PORT || 8082;



app.get("/",/*@Callback */(req, res) => {
    res.send("Hello Node App")
});

app.listen(port, () => {
    console.log(`Server Listening at localhost:${port}`)
})