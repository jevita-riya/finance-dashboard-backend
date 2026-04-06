const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const loginUser = async (email, password) => {
    const user = await userModel.getUserByEmail(email);
    console.log("user:",user);

    if (!user) {
        throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        throw new Error("Invalid credentials");
    }

    const token = jwt.sign(
        {
            id: user.user_id,
            role: user.role
        },
        process.env.JWT_SECRET, 
        { expiresIn: "1h" }
    );

    return {
        token,
        user: {
            id: user.user_id,
            name: user.name,
            role: user.role
        }
    };
};

module.exports = {
    loginUser
};