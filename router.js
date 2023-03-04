const router = require('express').Router();

const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');
const appointmentRoutes = require('./views/appointmentRoutes');

router.use("/user", userRoutes);
router.use("/auth", authRoutes);
router.use("/appointment", appointmentRoutes);

module.exports = router;