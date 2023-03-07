const router = require('express').Router();
const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const isAdmin = require('../middlewares/isAdmin');

//ENDPOINTS 

router.post('/create', verifyToken, appointmentController.createAppointments)
router.put('/update/:id', verifyToken, appointmentController.updateAppointments)

router.get("/viewPatient", verifyToken, appointmentController.getPatientAppointments)
router.get("/viewDoctor", verifyToken, appointmentController.getDoctorAppointments)
router.get("/viewAll", verifyToken, isAdmin, appointmentController.getAllAppointments)

router.delete('/delete/:id', verifyToken, appointmentController.deleteAppointments)



module.exports = router;