const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/signup', authController.signUp);
router.post('/login', authController.login);
router.post('/logout', authController.logout);
router.get('/me', userController.getCurrentUser);

router
    .route('/')
    .get(userController.getUsers)
    .post(userController.createUser);

router
    .route('/:id')
    .get(authController.protect, userController.getUser)
    .patch(authController.protect, userController.updateUser)
    .delete(authController.protect, userController.deleteUser);

module.exports = router