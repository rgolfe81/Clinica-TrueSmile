// const express = require('express');
// const router = express.Router();

const appointmentController = require('../controllers/appointmentController');
const verifyToken = require('../middlewares/verifyToken');
const router = require('express').Router();

// //ENDPOINTS 

// router.get('/view', appointmentController.view)
// router.get('/view-doctor', appointmentController.view-doctor)

router.post('/create', verifyToken, appointmentController.createAppointments)

module.exports = router;