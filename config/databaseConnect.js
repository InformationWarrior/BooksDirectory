require('dotenv').config();
const mongoose = require('mongoose');

const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb://${DB_HOST}/${DB_PORT}/${DB_NAME}`;
const log = console.log;

const dbConnect = async () => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        log("Connected to database");
    }
    catch (error) {
        log("Database Connection error >>> ", error);
    }
}
module.exports = dbConnect;