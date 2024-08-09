const mongoose = require('mongoose');
const database = 'booksDirectory';
const url = `mongodb://localhost:27017/${database}`;

const log = console.log;

const dbConnect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
        log("Connected to database");
    } catch (error) {
        log("Database Connection error >>> ", error);
    }
}
module.exports = dbConnect;