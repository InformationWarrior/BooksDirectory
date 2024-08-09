const router = require("express").Router();
const booksController = require('./book.controller');
const log = console.log;

router.get('/', booksController.findAllBooks);
// router.get('/:id', booksController.findBookById);
// router.push('/', booksController.createBook);
// router.put('/:id', booksController.updateBookById);
// router.delete('/:id', booksController.deleteBookById);

// router.get("/", (req, res) => {
//   res.send(booksDirectory);
// });

router.get("/:id", (request, response) => {
  const { id } = request.params;
  //const id = request.params.id;

  const book = doesBookExist(id);
  if (!book) {
    response.status(404).send("Book does not exist.");
  } else {
    response.send(book);
  }
});

router.post("/", (request, response) => {
  const {
    title,
    isbn,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = request.body;

  const isBook = doesBookExist(id);

  if (!isBook) {
    const book = {
      title,
      isbn,
      pageCount,
      publishedDate,
      thumbnailUrl,
      shortDescription,
      longDescription,
      status,
      authors,
      categories,
    };

    booksDirectory.push(book);
    response.status(200).send(book);
  } else {
    response.send("Book already exist");
  }
});

router.put("/:id", (request, response) => {
  const id = request.params.id;

  const {
    title,
    pageCount,
    publishedDate,
    thumbnailUrl,
    shortDescription,
    longDescription,
    status,
    authors,
    categories,
  } = request.body;

  const book = doesBookExist(id);

  if (!book) {
    response.send("Book does not exist");
  }

  const updateBook = (newValue, prevValue) =>
    !newValue ? prevValue : newValue;

  const updatedBook = {
    ...book,
    title: updateBook(title, book.title),
    pageCount: updateBook(pageCount, book.pageCount),
    publishedDate: updateBook(publishedDate, book.publishedDate),
    thumbnailUrl: updateBook(thumbnailUrl, book.thumbnailUrl),
    shortDescription: updateBook(shortDescription, book.shortDescription),
    longDescription: updateBook(longDescription, book.longDescription),
    status: updateBook(status, book.status),
    authors: updateBook(authors, book.authors),
    categories: updateBook(categories, book.categories),
  };

  const bookIndex = booksDirectory.findIndex((item) => item.isbn === id);
  booksDirectory.splice(bookIndex, 1, updatedBook);

  response.send(updatedBook);
});

router.delete("/:id", (request, response) => {
  const id = request.params.id;
  const book = doesBookExist(id);
  if (!book) {
    response.status(404).send("Book does not exist");
  }
  booksDirectory = booksDirectory.filter((item) => item.isbn !== id);
  response.send("Book removed successfully");
});

function doesBookExist(bookId) {
  return booksDirectory.find((item) => item.isbn === bookId);
}

router.get("*", (req, res) => {
  res.send("Sorry, this is an invalid URL.");
});

module.exports = router;
