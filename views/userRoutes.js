const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/profile', userController.profile)

module.exports = router;