const router = require("express").Router();
const booksController = require('../controller/book.controller');

router.post('/', booksController.createBook);

router.get('/', booksController.findAllBooks);
router.get('/:isbn', booksController.findBookById);

router.put('/:isbn', booksController.updateBookById);

router.delete('/:isbn', booksController.deleteBookById);
router.delete('/', booksController.deleteAllBooks);


module.exports = router;