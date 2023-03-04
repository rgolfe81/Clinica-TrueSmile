const { Appointment, Patient, Doctor} = require("../models");
const appointmentController = {};

appointmentController.createAppointments = async (req, res) => {
    try {
<<<<<<< HEAD
        const { date } = req.body;
        const patientId = req.patient_id;
        const doctorId = req.doctor_id;

        const newAppointment = await Appointment.create(
            {
                patient_id: patientId,
                doctor_id: doctorId,
                date: date,
            }
        )
=======
        const { date, doctor_id, patient_id } = req.body;

        const newAppointment = await Appointment.create({
            date: date,
            doctor_id: doctor_id,
            patient_id: patient_id
        });
>>>>>>> 25b4efae36a9e4abfdf23cfe7746978d0dda352d

    return res.json(newAppointment);
    } catch (error) {
    return res.status(500).send(error.message);
    }
};

appointmentController.getAppointmentsByPatient = async (req, res) => {
    try {
      const { patientId } = req.params;
  
      // Busca todas las citas del paciente
      const appointments = await Appointment.findAll({
        where: { patient_id: patientId },
        include: [
          { model: Patient, as: "Patient" },
          { model: Doctor, as: "Doctor" }
        ]
      });
  
      return res.json(appointments);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };
  
  // Controlador para obtener todas las citas de un doctor
  appointmentController.getAppointmentsByDoctor = async (req, res) => {
    try {
      const { doctorId } = req.params;
  
      // Busca todas las citas del doctor
      const appointments = await Appointment.findAll({
        where: { doctor_id: doctorId }
      });
  
      return res.json(appointments);
    } catch (error) {
      return res.status(500).send(error.message);
    }
  };

appointmentController.updateAppointments = async (req, res) => {
    try{
        const { date, patient_id, doctor_id} = req.body;

        const updateAppointments = await Appointment.update(
            {
                date: date,
                patient_id: patient_id,
                doctor_id: doctor_id
            }
        )
        return res.json(updateAppointments);
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

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