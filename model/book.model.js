const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
{
title: String,
isbn:String,
pageCount: Number,
publishedDate: String,
thumbnailUrl:String,
shortDescription: {
    type : String,
    require:false
},
longDescription: {
    type : String,
    require:false
},
status: String,
authors:[String],
categories:[String]
});

module.exports = new mongoose.model("Book", BookSchema);