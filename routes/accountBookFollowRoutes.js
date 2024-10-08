const express = require('express');
const accountBookFollowController = require('../controllers/accountBookFollowController');

const router = express.Router();

router
    .route('/')
    .get(accountBookFollowController.getRelationship, accountBookFollowController.getBooksAccountIsFollowing)
    .post(accountBookFollowController.createRelationship)
    .delete(accountBookFollowController.deleteRelationship);

module.exports = router