const router = require('express').Router();
const doctorController = require('../controllers/doctorController');
const verifyToken = require('../middlewares/verifyToken');

//ENDPOINTS

router.get('/all-patients', verifyToken, doctorController.getAllPatients)

module.exports = router;