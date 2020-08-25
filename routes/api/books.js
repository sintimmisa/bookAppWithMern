const express = require("express");

//Import Router from expres module
const router = express.Router();

/*import the BookDb Schema from the model dir
  This will be used to load Book model
*/
const Book= require("../../models/Book");

/*Describe a test routs to test the api*/
router.get("/test", (req, res) => {
    res.send("Testing book route!");
});

/*Get All books*/
router.get("/", (req, res) => {
    Book.find().then((book) => { res.json(book) }).catch((err) => {
        res.status(404).json({
            nobooksfound: "No Books Found"
        });
    });
});

/*Get Single Book by ID*/
router.get("/:id", (req, res) => {
    Book.findById(req.params.id).then((book) => { res.json(book) }).catch((err) => {
        res.status(404).json({
          nobooksfound: "No Books Found"
        });
    });
});

/*Add/Save Book*/
router.post("/", (req, res) => {
    Book.create(req.body).then((book) => {
        res.json({ Msg: "Book Successfully Added" }).catch((err) => {
            res.status(404).json({
                error: "Unable to Add this book"
            })
        });
    });
});


/*Update Book data*/
router.put("/:id", (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body).then((book) => {
        res.json({ msg: "Updated successfully" }).catch((err) => {
            res.status(400).json({
                error: "Unable to Update"
            });
        });
    });
});


/*delete Book*/
router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body).then((book)=>{
        res.json({ msg: "Book Successfully Deleted" }).catch((err) => {
            res.status(404).json({
                msg: "Unable to Delete"
            });
        });
    });
});;
//Export router
module.exports = router;