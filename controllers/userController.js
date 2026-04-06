const userService = require("../services/userService");

const createUser = async (req, res) => {
    try {
        const result = await userService.createUser(req.body);

        res.status(201).json({
            message: "User created successfully",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getUsers = async (req, res) => {
    try {
        const users = await userService.getUsers();

        res.status(200).json(users);

    } catch (error) {
        res.status(500).json({
            message: "Server error"
        });
    }
};

module.exports = {
    createUser,
    getUsers
};