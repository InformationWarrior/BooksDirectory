const express = require("express");
const booksRouter = require("./book.router");
const dbConnect = require("./databaseConnect");
const seedBooks = require('./seedBooksInDb');
const errorHandler = require('./middleware/midwar.errorHandler');
const app = express();

dbConnect();
//seedBooks();

app.use(express.raw());
//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);
app.use("/books", booksRouter);
 
app.post('/', function (req, res) {
    console.log(req.body)
    res.end();
})
// app.get("/", (req, res) => {
//   res.send({message:"Server is up..."});
// });

// app.get('/', (req, res) => {
//   // Log the request URL
//   console.log('Request URL:', req.url);
  
//   // Log the request method
//   console.log('Request Method:', req.method);
  
//   // Log the request headers
//   console.log('Request Headers:', req.headers);
  
//   // Sending a response
//   res.send('Hello World!');
// });

app.get('/', (req, res) => {
  throw new Error('Something went wrong!');
});

app.use(errorHandler);

module.exports = app;