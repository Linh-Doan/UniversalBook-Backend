const express = require('express');
const genreController = require('../controllers/genreController');

const router = express.Router();

router
    .route('/')
    .get(genreController.getAllGenres)
    .post(genreController.createGenre);

router.route('/top-rated').get(genreController.getTopRatedGenres);
router.route('/latest').get(genreController.getLatestGenres);
router.route('/most-followed').get(genreController.getMostFollowedGenres);
router.route('/trending').get(genreController.getTrendingGenres);
router.route('/discover').get(genreController.getDiscoverGenres);

// Route to check if a specific user is following a specific genre
router.route('/is-following/:accountId/:genreId').get(genreController.isUserFollowingGenre);

router
    .route('/:id')
    .get(genreController.getGenre)
    .patch(genreController.updateGenre)
    .delete(genreController.deleteGenre);

module.exports = router;
