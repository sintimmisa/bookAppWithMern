const mongoose = require("mongoose");


//Books Database Schema: Schema is the design of a database;structure and organization
const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true
        
    },
    author: {
        type: String,
        required: true
    },
    description: {
        type: String,
       
    },
    publisher: {
        type: String,
        
    },
    publish_date: {
        type: Date,
        default: Date.now
    }
 
});

module.exports = Books = mongoose.model('book', BookSchema);