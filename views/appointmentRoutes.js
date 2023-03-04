const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');

//ENDPOINTS 

router.get('/appointment', verifyToken, appointmentController.appointment)
router.get('/appointment/doctor', verifyToken, appointmentController.appointment-doctor)

module.exports = router;