const { Appointment, Patient, Doctor, User} = require("../models");
const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    try {
        const { date, doctor_id, patient_id } = req.body;

        const newAppointment = await Appointment.create({
            date: date,
            doctor_id: doctor_id,
            patient_id: patient_id
        });

    return res.json(newAppointment);
    } catch (error) {
    return res.status(500).send(error.message);
    }
};

appointmentController.updateAppointments = async (req, res) => {
    try {
        const { date, doctor_id } = req.body;
        const appointmentId = req.params.id;

        let updateFields = {
            date: date,
            doctor_id: doctor_id
        }

        if (!appointmentId) {
            return res.status(404).send('Appointment not found');
        }

        const updatedAppointment = await Appointment.update(
            updateFields,
            {
                where: {
                    id: appointmentId
                }
            }
        );
        
        if (!updatedAppointment){
            return res.send("Appointment not updated")
        }
        return res.send("Appointment updated succesfuly");
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

appointmentController.getPatientAppointments = async (req, res) => {
    try {
        const appointments = await Appointment.findAll({
            where: {
                patient_id: req.userId
            },
            include: [
                {
                    model: Patient,
                    attributes: {
                        exclude: ["createdAt", "updatedAt"]
                    }
                },
                {
                    model: Doctor,
                    attributes: {
                        exclude: ["user_id", "createdAt", "updatedAt"]
                    },
                    include: {
                        model: User,
                        attributes: {
                            exclude: ["password", "role_id", "createdAt", "updatedAt"]
                        }
                    }
                }
            ],
            attributes: {
                exclude: ["patient_id", "doctor_id", "createdAt", "updatedAt"]
            }
        });

        return res.json(appointments);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

appointmentController.getDoctorAppointments = async (req, res) => {
    try {

    const appointments = await Appointment.findAll({
        where: { doctor_id: doctor.id },
        include: [
        {
            model: Patient,
            attributes: { exclude: ["createdAt", "updatedAt"] },
            include: {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
            },
        },
        {
            model: Doctor,
            attributes: { exclude: ["user_id", "createdAt", "updatedAt"] },
            include: {
                model: User,
                attributes: { exclude: ["password", "createdAt", "updatedAt"] },
            },
        },
        ],
    });

    return res.json(appointments);
    } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
    }
};

userController.getAppointment = async (req, res) => {
    try {
        const userAppointment = await User.findByPk(
            req.userId,
            { 
                include: [
                    {
                    model: Appointment,
                    through: {
                        attributes: ["doctor_id", "patient_id", "dental_intervention_id", "createdAt",],
                    }

                },
            ]
            }
        )
        return res.json(userAppointment)
    } catch (error) {

        return res.status(500).send(error.message)
    }
}

module.exports = appointmentController;