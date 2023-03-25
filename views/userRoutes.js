const router = require('express').Router();
const userController = require('../controllers/userController');
const isAdmin = require('../middlewares/isAdmin');
const verifyToken = require('../middlewares/verifyToken');

// ENDPOINTS

router.get('/profile', verifyToken, userController.profile)
router.put('/update', verifyToken, userController.updateUser)
router.get('/allUsers', verifyToken, isAdmin, userController.getAllUsers)

module.exports = router;