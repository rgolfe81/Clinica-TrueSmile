const { User } = require("../models/index");
// const jwt = require('jsonwebtoken')

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


module.exports = userController;