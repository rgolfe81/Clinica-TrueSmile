const { Appointment, Patient, Doctor, User } = require("../models");

const doctorController = {};

doctorController.getAllPatients = async (req, res) => {
    try {
        const allPatients = await Patient.findAll({
            where: {
                doctor_id: req.doctorId,
            },
            include: [
                {
                    model: User,
                    attributes: {
                        exclude: ["password", "role_id", "createdAt", "updatedAt"],
                    },
                },
            ],
            attributes: {
                exclude: ["doctor_id", "createdAt", "updatedAt"],
            },
        });
        return res.json(allPatients);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

module.exports = doctorController;