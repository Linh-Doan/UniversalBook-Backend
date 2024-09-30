const express = require('express');
const bookController = require('../controllers/bookController');
const authController = require('../controllers/authController');
const router = express.Router();

router
    .route('/')
    .get(bookController.getAllBooks)
    .post(authController.protect, bookController.createBook);

router.route('/top-rated').get(bookController.getTopRatedBooks);
router.route('/latest').get(bookController.getLatestBooks);
router.route('/genre/:id').get(bookController.getBooksByGenre);

router
    .route('/:id')
    .get(authController.protect, bookController.getBook)
    .patch(authController.protect, bookController.updateBook)
    .delete(authController.protect, bookController.deleteBook);

router.route('/:id/chapters').get(authController.protect, bookController.getBookChapters);

module.exports = router