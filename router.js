const router = require('express').Router();

const userRoutes = require('./views/userRoutes');
const authRoutes = require('./views/authRoutes');

router.use("/user", userRoutes);
router.use("/auth", authRoutes);


module.exports = router;