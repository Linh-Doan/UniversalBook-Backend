const express = require('express');
const chapterController = require('../controllers/chapterController');

const router = express.Router();

router
    .route('/')
    .get(chapterController.getAllChapters)
    .post(chapterController.createChapters);

router
    .route('/:id')
    .get(chapterController.getChapter)
    .patch(chapterController.updateChapter)
    .delete(chapterController.deleteChapter);

module.exports = router