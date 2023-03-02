const { User, Patient } = require("../models");
const userController = {};

userController.profile = async(req, res) => {
    try {
        // const userId = req.userId;
        // const user = await User.findByPk(userId)

        // return res.json(user);
        const users = await User.findAll();

        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.register = async(req, res) => {
    try {
        const {name, email, password} = req.body;

        const newUser = await User.create(
            {
                name,
                email,
                password
            }
        )

        const newClient = await Patient.create({
            user_id: newUser.id
        })

        return res.json(newUser)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;