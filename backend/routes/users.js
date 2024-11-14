const express = require('express');
const router = express.Router();

// User Model
const { createUser, loginUser } = require('../controllers/userController');

// @route   POST /api/v1/users
// @desc    Register new user ✅
// @access  Public
router.route('/').post(createUser);

// @route   POST /api/v1/users/login
// @desc    Login user ✅
// @access  Public
// router.route('/login').post();
router.route('/login').post(loginUser)

module.exports = router;