const express = require('express');
const chapterController = require('../controllers/chapterController');

const router = express.Router();

router
    .route('/')
    .get(chapterController.getAllChapters)
    .post(chapterController.createChapter);

router
    .route('/:id')
    .get(chapterController.getChapter)
    .patch(chapterController.updateChapter)
    .delete(chapterController.deleteChapter);
 
router
    .route('/top-rated')
    .get(chapterController.getTopRatedChapters);

router
    .route('/latest')
    .get(chapterController.getLatestChapters);

module.exports = router;
