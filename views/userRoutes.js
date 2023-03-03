const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// ENDPOINTS

router.get('/profile', userController.profile)


module.exports = router;