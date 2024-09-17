const express = require('express');
const chapterController = require('../controllers/chapterController');

const router = express.Router();

// Route to get all chapters
router.route('/')
    .get(chapterController.getAllChapters)
    .post(chapterController.createChapter);

// Route to get top-rated chapters
router.route('/top-rated')
    .get(chapterController.getTopRatedChapters);

// Route to get latest chapters
router.route('/latest')
    .get(chapterController.getLatestChapters);

// Routes for specific chapters
router.route('/:id')
    .get(chapterController.getChapter)
    .patch(chapterController.updateChapter)
    .delete(chapterController.deleteChapter);

module.exports = router;



