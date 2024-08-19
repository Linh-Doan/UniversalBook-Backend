const express = require('express');
const authorGroupController = require('../controllers/authorGroupController');

const router = express.Router();

router
    .route('/')
    .get(authorGroupController.getAllAuthorGroups, authorGroupController.getAuthorGroupsByAccountId)
    .post(authorGroupController.createAuthorGroup);

router
    .route('/:id')
    .get(authorGroupController.getAuthorGroup)
    .patch(authorGroupController.updateAuthorGroup)
    .delete(authorGroupController.deleteAuthorGroup);

module.exports = router