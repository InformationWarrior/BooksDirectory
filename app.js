const express = require("express");
const booksRouter = require("./router/book.router");
const dbConnect = require("./config/databaseConnect");
const seedBooks = require('./app/seedBooksInDb');
const app = express();

dbConnect();
//seedBooks();

app.use(express.raw());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.json({ message: "Information Warrior welcomes you." });
});

module.exports = app;