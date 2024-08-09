const express = require("express");
const booksRouter = require("./router/book.router");
const dbConnect = require("./config/databaseConnect");
const seedBooks = require('./seedBooksInDb');
const errorHandler = require('./middleware/midwar.errorHandler');
const app = express();

dbConnect();
//seedBooks();

app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.use("/books", booksRouter);

module.exports = app;