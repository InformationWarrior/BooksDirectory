const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Book = require('./model/book.model');
const filePath = path.join(__dirname, 'book.data.json');
const log = console.log;

const seedBooks = async () => {
    try {
        const fileData = fs.readFileSync(filePath, 'utf8');
        const books = JSON.parse(fileData);        
        await Book.insertMany(books);
        console.log("Books successfully added to database. ");
        mongoose.disconnect();
    } 
    catch (error) {
        console.log("Error seeding books > ", error);
        mongoose.disconnect();
    }
};

module.exports = seedBooks;