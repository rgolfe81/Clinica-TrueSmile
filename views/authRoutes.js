const authController = require('../controllers/authController');
const router = require('express').Router();


// ENDPOINTS

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;