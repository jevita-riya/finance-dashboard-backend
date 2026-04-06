const authService = require("../services/authService");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const data = await authService.loginUser(email, password);

        res.status(200).json(data);

    } catch (error) {
        res.status(401).json({
            message: error.message
        });
    }
};

module.exports = {
    login
};