const router = require('express').Router();
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');

// ENDPOINTS

router.get('/profile/:id', verifyToken, userController.profile)
router.put('/update/:id', verifyToken, userController.updateUser)

module.exports = router;