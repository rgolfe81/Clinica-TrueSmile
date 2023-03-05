const doctorController = require('../controllers/doctorController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//ENDPOINTS

router.get('all-patients', verifyToken, doctorController.getAllAppointments)

module.exports = router;