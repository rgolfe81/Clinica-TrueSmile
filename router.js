const router = require('express').Router();

const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');
const doctorRoutes = require('./views/doctorRoutes');

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/appointment", appointmentRoutes);
router.use("/doctor", doctorRoutes);

module.exports = router;