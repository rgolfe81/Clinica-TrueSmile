const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//ENDPOINTS 

router.post('/create', verifyToken, appointmentController.createAppointments)
// router.get('/view', appointmentController.view)
// router.get('/view-doctor', appointmentController.view-doctor)

module.exports = router;