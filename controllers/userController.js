const { User } = require("../models/index");
const jwt = require('jsonwebtoken')

const userController = {};

userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findOne(
        {
            user_id: userId,
        }   
        )
        return res.json(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const userId = req.userId

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const updateUSer = await User.update(
            {
                name: name,
                password: encryptedPassword,
                surname: surname,
                city: city,
                phone: phone,
                email: email,
            },
            {
                where: {
                    id: userId
                }
            }
        );

        if (!updateUSer) {
            return res.send('User not updated')
        }

        return res.send('User updated')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.getAppointment = async (req, res) => {
    try {
        const userAppointment = await User.findByPk(
            req.userId,
            { 
                include: [
                    {
                    model: Service,
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

// userController.getAppointmentDoctor = async (req, res) => {
//     const userAppointmentDoctor = await Appointment.findAll(
//         {
//             where: { 
//                 user_id: req.userId 
//             },
//             include: [
//                 Service,
//             {
//             model: User,
//             attributes: {
//                 exclude: ["password", "role_id", "createdAt", "updatedAt"]
//                 },
//             },
//             {
//             model: Doctor,
//             attributes: {
//                 exclude: ["user_id", "createdAt", "updatedAt"]
//                 },
//                 include: {
//                     model: User,
//                     attributes: {
//                         exclude: ["password", "role_id", "createdAt", "updatedAt"]
//                         },
//                     }
//             },
//             ],
//                 attributes: {
//                 exclude: ["user_id", "doctor_id", "service_id"]
//                 }
//             }
//         )
//         return res.json(userAppointmentDoctor)
//         } catch (error) {
//         return res.status(500).send(error.message)
//     }



module.exports = userController;