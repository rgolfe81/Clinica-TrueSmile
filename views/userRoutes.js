const userController = require('../controllers/userController');
const router = require('express').Router();

router.get('/profile', userController.profile)
router.post('/register', userController.register)

module.exports = router;