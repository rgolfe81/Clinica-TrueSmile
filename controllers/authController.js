const { User, Patient } = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

authController.login = async (req, res) => {
    try{
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {email: email}
            }
        );

        if(!user){
            return res.send('This email is wrong')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch){
            return res.send('This password is wrong')
        }

        const token = jwt.sign(
        {
            userId: user.id,
            email: user.email,
            roleId: user.role_id
        },
        process.env.JWT_SECRET,
        {expiresIn: '90h'}
    );

    return res.json(
        {
            success: true,
            message: "Login successfully",
            token: token
        }
    )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: "Somenthing went wrong",
                error_message: error.message
            }
        )
    }
}


module.exports = authController;