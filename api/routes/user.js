const express = require('express');
const router = express.Router();


const UserController = require('../controllers/user');
const checkAuth = require('../middleware/check-auth');

router.post('/signup', UserController.register_user);

router.post('/login', UserController.login_user);

router.delete('/:userId', checkAuth, UserController.remove_user);

module.exports = router;