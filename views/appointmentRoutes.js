const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//ENDPOINTS 

router.post('/create', verifyToken, appointmentController.createAppointments)
router.put('/update/:id', verifyToken, appointmentController.updateAppointments)

router.get("/viewPatient", verifyToken, appointmentController.getPatientAppointments)
router.get("/viewDoctor", verifyToken, appointmentController.getDoctorAppointments)

router.delete('/delete/:Id', verifyToken, appointmentController.deleteAppointments)

module.exports = router;