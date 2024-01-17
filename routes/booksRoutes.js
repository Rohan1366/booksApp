const express = require('express');
const booksController = require('../controllers/booksController');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/books', authMiddleware(['CREATOR']), booksController.createBook);
router.get('/books', authMiddleware(['VIEWER', 'VIEW_ALL']), booksController.getBooks);
router.delete('/books/:id', authMiddleware(['CREATOR']), booksController.deleteBook);

module.exports = router;
