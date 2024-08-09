const Book = require('./book.model');

const findAllBooks = async (req, res)=>{
try {
    const data = await Book.find({});
    res.send(data);
} catch (error) {
    res.status(500).send({
        message:error.message||"Error occurred while retrieving books."
    });
}
};

const findBookById = async (req, res)=>{
    const isbnId = req.params.id;
    try {
        const data = await Book.findById(isbnId);
        if(!data){
            res.status(404).send(`Not found book with id - ${isbnId}`);
        }
        else res.status(200).send(data);
    } catch (error) {
        res.status(500).send({
            message:error.message||"Error occurred while retrieving book."
        })
    }
};
const createBook = async (req, res)=>{

};
const updateBookById = async (req, res)=>{

};

const deleteBookById = async (req, res)=>{
    const isbnId = req.params.isbn;
try {
    const data = await Book.findByIdAndRemove(isbnId,{
        useFindAndModify: false,
      });
    if(!data){
        res.status(404).send({
            message: `Cannot delete book with id ${isbnId}`
        });
    }
    else res.status(200).send({
        message:"Book deleted successfully"
    });

} catch (error) {
    res.status(500).send({
        message:error.message||`Cannot delete book with id ${isbnId}.`
    })
}
};
module.exports = {findAllBooks, findBookById, createBook, updateBookById, deleteBookById};