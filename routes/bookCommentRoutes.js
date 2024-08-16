const express = require('express');
const bookCommentController = require('../controllers/bookCommentController');

const router = express.Router();

router
    .route('/')
    .get(bookCommentController.getCommentsByBookId)
    .post(bookCommentController.createBookComment);

module.exports = router