const Book = require('../models/Book');

const createBook = async (req, res) => {
  const { title, author } = req.body;

  try {
    const newBook = new Book({ title, author });
    await newBook.save();

    res.status(201).json({ message: 'Book created successfully', book: newBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const getBooks = async (req, res) => {
  const { old, new: isNew } = req.query;
  const filter = {};

  if (old) {
    filter.created_at = { $lte: new Date(Date.now() - 10 * 60 * 1000) };
  } else if (isNew) {
    filter.created_at = { $gt: new Date(Date.now() - 10 * 60 * 1000) };
  }

  try {
    const books = await Book.find(filter);
    res.json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json({ message: 'Book deleted successfully', book: deletedBook });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = { createBook, getBooks, deleteBook };
