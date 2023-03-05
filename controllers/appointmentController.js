const { Appointment, Patient, Doctor} = require("../models");
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
        const { date, patient_id, doctor_id } = req.body;
        const appointmentId = req.params.id;

        let updateFields = {
            date: date,
            patient_id: patient_id,
            doctor_id: doctor_id
        }

        if (!appointmentId) {
            return res.status(500).send('Appointment not found');
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
        return res.send("Appointment updated successfully");
    } catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};


appointmentController.deleteAppointments = async (req, res) => {
    try{
        const { date } = req.body;
        const appointmentId = req.params.id;

        let deleteFields = {
            date: date,
        }

        if (!appointmentId){
            return res.status(500).send('Appointment not found');
        }

        const deleteAppointment = await Appointment.delete(
            deleteFields,
            {
                where: {
                    id: appointmentId
                }
            }
        );

        if (!deleteAppointment){
            return res.send("Appointment not deleted")
        }
        return res.send("Appointment deleted successfully");
    }catch (error) {
        console.error(error);
        return res.status(500).send(error.message);
    }
};


// appointmentController.getAppointment = async (req, res) => {
//     try {
//         const userAppointment = await User.findByPk(
//             req.userId,
//             { 
//                 include: [
//                     {
//                     Appointment,
//                     through: {
//                         attributes: ["doctor_id", "patient_id", "dental_intervention_id", "createdAt",],
//                     }
                    
//                 },
//             ]
//             }
//         )
//         return res.json(userAppointment)
//     } catch (error) {
        
//         return res.status(500).send(error.message)
//     }
// }

// appointmentController.getAppointmentDoctor = async (req, res) => {
//         try{
//             const userAppointmentDoctor = await Appointment.findAll(
//         {
//             where: { 
//                 user_id: req.userId 
//             },
//             include: [
//                 Appointment,
//                 {
//                     User,
//                     attributes: {
//                         exclude: ["password", "role_id", "createdAt", "updatedAt"]
//                 },
//             },
//             {
//                     Doctor,
//                     attributes: {
//                         exclude: ["user_id", "createdAt", "updatedAt"]
//                 },
//                     include: {
//                         User,
//                             attributes: {
//                                 exclude: ["password", "role_id", "createdAt", "updatedAt"]
//                         },
//                     }
//             },
//         ],
//                     attributes: {
//                         exclude: ["user_id", "doctor_id", "service_id"]
//                     }
//             }
//         )
//         return res.json(userAppointmentDoctor)
//     }catch (error) {
        
//         return res.status(500).send(error.message)
//         }
//     }

module.exports = appointmentController;