const { Appointment, Patient, Doctor, User, Dental_intervention} = require("../models");
const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    try {
        const { date, doctor_id, dental_intervention_id } = req.body;

        const patient = await Patient.findOne({
            where: 
                {
                    user_id : req.userId
                }
            })

        if (!patient){
            return res.send("You are not a patient");
        }

        const newAppointment = await Appointment.create({
            date: date,
            doctor_id: doctor_id,
            patient_id: patient.id,
            dental_intervention_id: dental_intervention_id
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
            return res.send('Appointment not found');
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

appointmentController.deleteAppointments = async (req, res) => {
    try {
        const appointmentId = req.params.id;

        const deletedAppointment = await Appointment.destroy({
        where: {
            id: appointmentId
        },
    });

    if (!deletedAppointment) {
        return res.send("Appointment not found");
    }

    return res.send("Appointment deleted successfully");
    } catch (error) {
    console.error(error);
    return res.status(500).send(error.message);
    }
};

appointmentController.getPatientAppointments = async (req, res) => {
    try {

        const patient = await Patient.findOne({where: {user_id: req.userId}})

        if(!patient){
            return res.send("You are not a patient")
        }

        const appointments = await Appointment.findAll({
            where: {patient_id: patient.id},
            include: 
            [
                {model: Patient, attributes: {exclude: ["createdAt", "updatedAt"]},
                include: {model: User, attributes: {exclude: ["password", "role_id", "createdAt", "updatedAt"]}}},
                {model: Dental_intervention, attributes: {exclude: ["createdAt", "updatedAt"]}},
                {model: Doctor, attributes: {exclude: ["user_id", "createdAt", "updatedAt"]},
                include: {model: User, attributes: {exclude: ["password", "role_id", "createdAt", "updatedAt"]}}}
            ], 
            attributes: {exclude: ["patient_id", "doctor_id", "createdAt", "updatedAt"]}
        });

        return res.json(appointments);
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};

appointmentController.getDoctorAppointments = async (req, res) => {
    try {

        const doctor = await Doctor.findOne({where: {user_id: req.userId}})

        if(!doctor){
            return res.send("You are not a doctor")
        }
        console.log(doctor);
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
        {model: Dental_intervention, attributes: {exclude: ["createdAt", "updatedAt"]}},
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


appointmentController.getAllAppointments = async (req, res) => {
    try{
        const appointments = await Appointment.findAll({
            include: [
            {
                model: Patient,
                attributes: { exclude: ["createdAt", "updatedAt"] },
                include: {
                    model: User,
                    attributes: { exclude: ["password", "createdAt", "updatedAt"] },
                },
            },
            {model: Dental_intervention, attributes: {exclude: ["createdAt", "updatedAt"]}},
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
}

module.exports = appointmentController;