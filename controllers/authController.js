const { User, Patient } = require('../models/index');
const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

const authController = {};


authController.register = async (req, res) => {
    try {
        const { dni, name, surname, city, phone, email, password } = req.body;
        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = await User.create(
            {
                dni: dni,
                name: name,
                surname: surname,
                city: city,
                phone: phone,
                email: email,
                password: encryptedPassword,
                role_id: 1
            }
        )
        const newPatient = await Patient.create(
            {
                user_id: newUser.id
            }
        )

        return res.json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = authController;