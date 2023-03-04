const { User, Doctor } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userController = {};

userController.profile = async(req, res) => {
    try {
        const userId = req.userId;
        const user = await User.findByPk(userId)

        return res.json(user);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.updateUser = async (req, res) => {
    try {
        const { name, password } = req.body;
        const userId = req.userId

        // const encryptedPassword = bcrypt.hashSync(password, 10);

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
module.exports = userController;