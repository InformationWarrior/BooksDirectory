const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema(
    {
        title: String,
        isbn: String,
        pageCount: Number,
        publishedDate: String,
        thumbnailUrl: String,
        shortDescription: {
            type: String,
            require: false
        },
        longDescription: {
            type: String,
            require: false
        },
        status: String,
        authors: [String],
        categories: [String]
    },
    { timestamps: true }
);

BookSchema.methods.toJSON = function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
};

module.exports = new mongoose.model("books", BookSchema);