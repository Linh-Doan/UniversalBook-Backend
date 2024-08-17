const express = require('express');
const genreController = require('../controllers/genreController');

const router = express.Router();

router
    .route('/')
    .get(genreController.getAllGenres);

module.exports = router