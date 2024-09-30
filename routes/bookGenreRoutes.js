const express = require('express');
const bookGenreController = require('../controllers/bookGenreController');

const router = express.Router();

// Route to create a new book-genre association
router
    .route('/')
    .post(bookGenreController.createBookGenre);

// Route to get genres associated with a specific book
router
    .route('/:bookId/genres')
    .get(bookGenreController.getGenresByBookId);

module.exports = router;
