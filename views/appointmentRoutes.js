const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

//ENDPOINTS 

router.post('/create', verifyToken, appointmentController.createAppointments)
router.put('/update/:id', verifyToken, appointmentController.updateAppointments)
<<<<<<< HEAD
router.delete('/delete/:Id', verifyToken, appointmentController.deleteAppointments)
// router.get('/view', appointmentController.view)
// router.get('/view-doctor', appointmentController.view-doctor)

=======
// router.get('/view', appointmentController.view)
// router.get('/view-doctor', appointmentController.view-doctor)



>>>>>>> 6e7bde966f5a588547db81a016472719cad49057
module.exports = router;